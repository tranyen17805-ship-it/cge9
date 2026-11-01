#!/usr/bin/env node
/* build-index.js <outDir> — nạp toàn bộ branch trong Chromium headless, ghi chỉ mục tĩnh vào index-data.js
 * (danh sách entry LMS + khóa MX). Cần: npm i playwright */
const fs=require('fs'),path=require('path');
const {chromium}=require('playwright');
(async()=>{
 const out=path.resolve(process.argv[2]||'.');
 fs.writeFileSync(path.join(out,'index-data.js'),'window.CGE_INDEX=null;\n');
 const br=await chromium.launch();const ctx=await br.newContext();
 await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());
 const page=await ctx.newPage();const errs=[];page.on('pageerror',e=>errs.push(String(e)));
 await page.goto('file://'+path.join(out,'index.html')+'#/');
 await page.waitForFunction(()=>window.CGE&&CGE.pending()===0);
 await page.evaluate(()=>CGE.load('ALL'));
 const idx=await page.evaluate(()=>({lmsEntries:lmsEntries(),mx:Object.keys(MX),extraCount:EXTRA_PRACTICE.length}));
 fs.writeFileSync(path.join(out,'index-data.js'),'/* tự sinh bởi tools/build-index.js — chạy lại sau mỗi lần split */\nwindow.CGE_INDEX='+JSON.stringify(idx)+';\n');
 console.log('index: lmsEntries',idx.lmsEntries.length,'mx keys',idx.mx.length,'errors',errs.length);errs.slice(0,5).forEach(e=>console.log(e));
 await br.close();
})();
