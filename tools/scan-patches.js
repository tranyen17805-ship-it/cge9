#!/usr/bin/env node
/* scan-patches.js <outDir> — liệt kê chỗ code trong branches ghi đè tên/đối tượng do main định nghĩa */
const ts=require(require('child_process').execSync('npm root -g').toString().trim()+'/typescript');
const fs=require('fs'),path=require('path');
const out=path.resolve(process.argv[2]||'.');
const man=JSON.parse(fs.readFileSync(path.join(out,'manifest.all.json'),'utf8'));
const parse=f=>ts.createSourceFile(f,fs.readFileSync(path.join(out,f),'utf8'),ts.ScriptTarget.ES2022,true,ts.ScriptKind.JS);
const mainNames=new Set();
man.filter(m=>m.branch==='main').forEach(m=>{const sf=parse(m.file);sf.statements.forEach(n=>{
  if(ts.isFunctionDeclaration(n)&&n.name)mainNames.add(n.name.text);
  if(ts.isVariableStatement(n))n.declarationList.declarations.forEach(d=>{ if(ts.isIdentifier(d.name))mainNames.add(d.name.text)});})});
const DATA=new Set(['MX','LBC','WBC','RDT','MXG','GS','LMD','LMV','GLS','SKL','W','P','UOE','LMS','OBJ','EX1']); // registry-like (ghi thêm key)
const rep={};
man.filter(m=>m.branch!=='main').forEach(m=>{const sf=parse(m.file);
  (function walk(n){
    if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken){
      const l=n.left;
      if(ts.isIdentifier(l)&&mainNames.has(l.text)){const k=m.branch+' :: reassign '+l.text;(rep[k]=rep[k]||[]).push(m.seq)}
      else if((ts.isPropertyAccessExpression(l)||ts.isElementAccessExpression(l))){
        let r=l;while(ts.isPropertyAccessExpression(r)||ts.isElementAccessExpression(r))r=r.expression;
        if(ts.isIdentifier(r)&&mainNames.has(r.text)&&!DATA.has(r.text)){const k=m.branch+' :: member-of '+r.text+' <- '+l.getText().slice(0,40);(rep[k]=rep[k]||[]).push(m.seq)}}
    }
    if(ts.isCallExpression(n)&&ts.isPropertyAccessExpression(n.expression)&&['push','unshift','splice'].includes(n.expression.name.text)){
      let r=n.expression.expression;while(ts.isPropertyAccessExpression(r)||ts.isElementAccessExpression(r))r=r.expression;
      if(ts.isIdentifier(r)&&mainNames.has(r.text)&&!DATA.has(r.text)){const k=m.branch+' :: mutate '+r.text+'.'+n.expression.name.text;(rep[k]=rep[k]||[]).push(m.seq)}}
    ts.forEachChild(n,walk)})(sf)});
Object.entries(rep).sort().forEach(([k,v])=>console.log(k.padEnd(70),'x'+v.length,'seq:',[...new Set(v)].slice(0,8).join(',')));
