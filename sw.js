if(!self.define){let s,o={};const e=(e,t)=>(e=new URL(e+".js",t).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(t,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let d={};const a=s=>e(s,i),c={module:{uri:i},exports:d,require:a};o[i]=Promise.all(t.map((s=>c[s]||a(s)))).then((s=>(r(...s),d)))}}define(["./workbox-f079899a"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"img/React.png",revision:"f6a065a158be7fc3fed12547f8800c1a"},{url:"index.html",revision:"f902de2d53cfbc788d19f873830d5d5f"},{url:"js/catalogoVideos.js",revision:"560edc4a65eedb07b7ac18d0f72f30c5"},{url:"manifest.json",revision:"22d2b800b1cc47bf4cbef2ef777cb17d"},{url:"Vendor/bootstrap-5.2.3-dist (1).zip",revision:"17754976568aa069bb621d759be82cc4"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-grid.css",revision:"02c04dfa80af659dc6f4c517b677435d"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-grid.min.css",revision:"dbd47382523d754013115de4be202a74"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-grid.rtl.css",revision:"63d1e5a2903e394f52b1fccaf84159a0"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-grid.rtl.min.css",revision:"92871a500cb2d82f99258a6a17e46ef6"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-reboot.css",revision:"28372dcca49ddee994668db39a49f7f0"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-reboot.min.css",revision:"7b3e39ea9e950f59c494f3e0ae5971db"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-reboot.rtl.css",revision:"d7cfce563ed23132808a3647f675a1ae"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-reboot.rtl.min.css",revision:"1a3cae87f043a9031675fab697888c7c"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-utilities.css",revision:"a5f78ee119a023227eceb749f83f6b12"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-utilities.min.css",revision:"5e47a49091ab986da0c9a5122a5dfe6c"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-utilities.rtl.css",revision:"a3ff7a01905bed4e279995549711d424"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap-utilities.rtl.min.css",revision:"1200ba112673d97391e77f097d1eb26f"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap.css",revision:"41ba0ff5eed842d853aede220a3ccfee"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap.min.css",revision:"3f30c2c47d7d23c7a994db0c862d45a5"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap.rtl.css",revision:"1457707e717950e48e9af2ef614b68e8"},{url:"Vendor/bootstrap-5.2.3-dist/css/bootstrap.rtl.min.css",revision:"dfa5ca983e2834131c9d9d51ae3b1eb2"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.bundle.js",revision:"01a034c34cb9c1d2f062af8def13ecb7"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js",revision:"b75ae000439862b6a97d2129c85680e8"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.esm.js",revision:"f86c449a0babc30b33ff71a6fd064833"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.esm.min.js",revision:"da74cf4659eb6c671e549aaed3d7ca1d"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.js",revision:"1376378024397729b1febb40f5a0e16f"},{url:"Vendor/bootstrap-5.2.3-dist/js/bootstrap.min.js",revision:"b0794583ec020a7852f0fc04d5cefc52"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
