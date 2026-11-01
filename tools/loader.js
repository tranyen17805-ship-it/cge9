/* loader.js — nạp các "branch" (dữ liệu từng unit / extra / audio) theo route.
 * - main/*.js được index.html nạp tĩnh, đúng thứ tự gốc.
 * - branch chỉ nạp khi hash cần tới, tuần tự, đúng thứ tự file trong manifest.
 * - Quy tắc route → branch nằm trong manifest.js (routes), sửa ở tools/routes.json.
 */
(function(){
  var M = window.CGE_MANIFEST || {};
  var CGE = window.CGE = window.CGE || {};
  CGE._shuf = CGE._shuf || new Set();

  var done = {};                 // name -> Promise
  var pending = 0;
  var open; var gate = new Promise(function(r){ open = r; });
  var queue = gate;              // mọi lần nạp xếp hàng sau khi main sẵn sàng

  function inject(file){
    return new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = file; s.async = false;
      s.onload = res;
      s.onerror = function(){ rej(new Error('CGE: không nạp được ' + file)); };
      document.head.appendChild(s);
    });
  }
  function enqueue(fn){
    pending++;
    var p = queue.then(fn);
    queue = p.catch(function(){}).then(function(){ pending--; });
    return p;
  }

  var mxSet = null;
  CGE.hasMX = function(k){            // khóa MX có trong các branch chưa nạp (chỉ mục tĩnh)
    if(!window.CGE_INDEX || !CGE_INDEX.mx) return false;
    if(!mxSet) mxSet = new Set(CGE_INDEX.mx);
    return mxSet.has(k);
  };
  CGE.extraCount = function(){        // số bài Extra practice (một phần được nhánh 'extra' thêm vào sau)
    return (window.CGE_INDEX && CGE_INDEX.extraCount != null) ? CGE_INDEX.extraCount : EXTRA_PRACTICE.length;
  };
  CGE.mainReady = function(){ open(); };
  CGE.pending = function(){ return pending; };
  CGE.idle = function(){ return queue; };
  CGE.loaded = function(){ return Object.keys(done); };

  CGE.load = function(name){
    if(name === 'ALL') return Promise.all(Object.keys(M.branches || {}).map(CGE.load)).then(function(){});
    if(!M.branches || !M.branches[name]) return Promise.resolve();
    if(done[name]) return done[name];
    done[name] = enqueue(async function(){
      var files = M.branches[name].files;
      var shufflesItself = files.indexOf('@shuffle') >= 0;
      var before = shufflesItself ? null : new Set(Object.keys(MX));
      for(const f of files){
        if(f === '@shuffle') CGE.shuffleNew();   // giữ hành vi "xáo đáp án" của bản gốc
        else await inject(f);
      }
      // Bản gốc chỉ xáo các khóa có trước mốc xáo. Nhánh nằm SAU mốc đó (unit 1/5/6/7, extra)
      // thì khóa mới của nó phải được coi là "đã xử lý", dù nạp trước hay sau nhánh khác.
      if(before) Object.keys(MX).forEach(function(k){ if(!before.has(k)) CGE._shuf.add(k); });
    });
    return done[name];
  };

  CGE.branchesFor = function(hash){
    var out = [];
    (M.routes || []).forEach(function(r){
      var m = new RegExp(r.re).exec(hash);
      if(!m) return;
      (r.load || []).forEach(function(t){
        out.push(t.replace('{n1}', String((+m[1]) + 1)));
      });
    });
    return out;
  };

  CGE.ensure = function(hash){
    return Promise.all(CGE.branchesFor(hash).map(CGE.load)).then(function(){});
  };

  // thay cho route() trực tiếp: nạp dữ liệu cần thiết rồi mới vẽ
  CGE.navigate = function(){
    var h = location.hash;
    return CGE.ensure(h).then(function(){
      if(location.hash === h) route();       // bỏ qua nếu người dùng đã đi tiếp
    });
  };
  CGE.boot = function(){
    gate.then(function(){ return CGE.navigate(); })
        .catch(function(e){ console.error(e); });
  };
})();
