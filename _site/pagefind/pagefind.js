const me="1.3.0";let H;(function(){const e={};let r;typeof document<"u"&&document.currentScript!==null&&(r=new URL("UNHANDLED",location.href).toString());let t,n=null;function i(){return(n===null||n.byteLength===0)&&(n=new Uint8Array(t.memory.buffer)),n}let o=0;function _(s,f){const h=f(s.length*1,1)>>>0;return i().set(s,h/1),o=s.length,h}e.init_pagefind=function(s){const f=_(s,t.__wbindgen_malloc),h=o;return t.init_pagefind(f,h)>>>0};const l=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},a=typeof l.encodeInto=="function"?function(s,f){return l.encodeInto(s,f)}:function(s,f){const h=l.encode(s);return f.set(h),{read:s.length,written:h.length}};function c(s,f,h){if(h===void 0){const b=l.encode(s),v=f(b.length,1)>>>0;return i().subarray(v,v+b.length).set(b),o=b.length,v}let d=s.length,u=f(d,1)>>>0;const g=i();let m=0;for(;m<d;m++){const b=s.charCodeAt(m);if(b>127)break;g[u+m]=b}if(m!==d){m!==0&&(s=s.slice(m)),u=h(u,d,d=m+s.length*3,1)>>>0;const b=i().subarray(u+m,u+d),v=a(s,b);m+=v.written,u=h(u,d,m,1)>>>0}return o=m,u}e.set_ranking_weights=function(s,f){const h=c(f,t.__wbindgen_malloc,t.__wbindgen_realloc),d=o;return t.set_ranking_weights(s,h,d)>>>0},e.load_index_chunk=function(s,f){const h=_(f,t.__wbindgen_malloc),d=o;return t.load_index_chunk(s,h,d)>>>0},e.load_filter_chunk=function(s,f){const h=_(f,t.__wbindgen_malloc),d=o;return t.load_filter_chunk(s,h,d)>>>0},e.add_synthetic_filter=function(s,f){const h=c(f,t.__wbindgen_malloc,t.__wbindgen_realloc),d=o;return t.add_synthetic_filter(s,h,d)>>>0};let y=null;function p(){return(y===null||y.byteLength===0)&&(y=new Int32Array(t.memory.buffer)),y}const F=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&F.decode();function k(s,f){return s=s>>>0,F.decode(i().subarray(s,s+f))}e.request_indexes=function(s,f){let h,d;try{const m=t.__wbindgen_add_to_stack_pointer(-16),b=c(f,t.__wbindgen_malloc,t.__wbindgen_realloc),v=o;t.request_indexes(m,s,b,v);var u=p()[m/4+0],g=p()[m/4+1];return h=u,d=g,k(u,g)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(h,d,1)}},e.request_filter_indexes=function(s,f){let h,d;try{const m=t.__wbindgen_add_to_stack_pointer(-16),b=c(f,t.__wbindgen_malloc,t.__wbindgen_realloc),v=o;t.request_filter_indexes(m,s,b,v);var u=p()[m/4+0],g=p()[m/4+1];return h=u,d=g,k(u,g)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(h,d,1)}},e.request_all_filter_indexes=function(s){let f,h;try{const g=t.__wbindgen_add_to_stack_pointer(-16);t.request_all_filter_indexes(g,s);var d=p()[g/4+0],u=p()[g/4+1];return f=d,h=u,k(d,u)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(f,h,1)}},e.filters=function(s){let f,h;try{const g=t.__wbindgen_add_to_stack_pointer(-16);t.filters(g,s);var d=p()[g/4+0],u=p()[g/4+1];return f=d,h=u,k(d,u)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(f,h,1)}},e.search=function(s,f,h,d,u){let g,m;try{const x=t.__wbindgen_add_to_stack_pointer(-16),T=c(f,t.__wbindgen_malloc,t.__wbindgen_realloc),R=o,S=c(h,t.__wbindgen_malloc,t.__wbindgen_realloc),B=o,N=c(d,t.__wbindgen_malloc,t.__wbindgen_realloc),z=o;t.search(x,s,T,R,S,B,N,z,u);var b=p()[x/4+0],v=p()[x/4+1];return g=b,m=v,k(b,v)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(g,m,1)}};async function I(s,f){if(typeof Response=="function"&&s instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(s,f)}catch(d){if(s.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d);else throw d}const h=await s.arrayBuffer();return await WebAssembly.instantiate(h,f)}else{const h=await WebAssembly.instantiate(s,f);return h instanceof WebAssembly.Instance?{instance:h,module:s}:h}}function M(){const s={};return s.wbg={},s}function P(s,f){}function W(s,f){return t=s.exports,D.__wbindgen_wasm_module=f,y=null,n=null,t}function C(s){if(t!==void 0)return t;const f=M();s instanceof WebAssembly.Module||(s=new WebAssembly.Module(s));const h=new WebAssembly.Instance(s,f);return W(h,s)}async function D(s){if(t!==void 0)return t;typeof s>"u"&&typeof r<"u"&&(s=r.replace(/\.js$/,"_bg.wasm"));const f=M();(typeof s=="string"||typeof Request=="function"&&s instanceof Request||typeof URL=="function"&&s instanceof URL)&&(s=fetch(s));const{instance:h,module:d}=await I(await s,f);return W(h,d)}H=Object.assign(D,{initSync:C},e)})();var $=Uint8Array,q=Uint16Array,oe=Uint32Array,le=new $([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ce=new $([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ye=new $([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fe=function(e,r){for(var t=new q(31),n=0;n<31;++n)t[n]=r+=1<<e[n-1];for(var i=new oe(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)i[o]=o-t[n]<<5|n;return[t,i]},he=fe(le,2),de=he[0],be=he[1];de[28]=258,be[258]=28;var ue=fe(ce,0),ve=ue[0],Je=ue[1],Q=new q(32768);for(w=0;w<32768;++w)A=(w&43690)>>>1|(w&21845)<<1,A=(A&52428)>>>2|(A&13107)<<2,A=(A&61680)>>>4|(A&3855)<<4,Q[w]=((A&65280)>>>8|(A&255)<<8)>>>1;var A,w,G=function(e,r,t){for(var n=e.length,i=0,o=new q(r);i<n;++i)e[i]&&++o[e[i]-1];var _=new q(r);for(i=0;i<r;++i)_[i]=_[i-1]+o[i-1]<<1;var l;if(t){l=new q(1<<r);var a=15-r;for(i=0;i<n;++i)if(e[i])for(var c=i<<4|e[i],y=r-e[i],p=_[e[i]-1]++<<y,F=p|(1<<y)-1;p<=F;++p)l[Q[p]>>>a]=c}else for(l=new q(n),i=0;i<n;++i)e[i]&&(l[i]=Q[_[e[i]-1]++]>>>15-e[i]);return l},K=new $(288);for(w=0;w<144;++w)K[w]=8;var w;for(w=144;w<256;++w)K[w]=9;var w;for(w=256;w<280;++w)K[w]=7;var w;for(w=280;w<288;++w)K[w]=8;var w,_e=new $(32);for(w=0;w<32;++w)_e[w]=5;var w,ke=G(K,9,1),Pe=G(_e,5,1),X=function(e){for(var r=e[0],t=1;t<e.length;++t)e[t]>r&&(r=e[t]);return r},E=function(e,r,t){var n=r/8|0;return(e[n]|e[n+1]<<8)>>(r&7)&t},Z=function(e,r){var t=r/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(r&7)},xe=function(e){return(e+7)/8|0},$e=function(e,r,t){(r==null||r<0)&&(r=0),(t==null||t>e.length)&&(t=e.length);var n=new(e.BYTES_PER_ELEMENT==2?q:e.BYTES_PER_ELEMENT==4?oe:$)(t-r);return n.set(e.subarray(r,t)),n},Fe=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L=function(e,r,t){var n=new Error(r||Fe[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,L),!t)throw n;return n},Se=function(e,r,t){var n=e.length;if(!n||t&&t.f&&!t.l)return r||new $(0);var i=!r||t,o=!t||t.i;t||(t={}),r||(r=new $(n*3));var _=function(ie){var ae=r.length;if(ie>ae){var se=new $(Math.max(ae*2,ie));se.set(r),r=se}},l=t.f||0,a=t.p||0,c=t.b||0,y=t.l,p=t.d,F=t.m,k=t.n,I=n*8;do{if(!y){l=E(e,a,1);var M=E(e,a+1,3);if(a+=3,M)if(M==1)y=ke,p=Pe,F=9,k=5;else if(M==2){var D=E(e,a,31)+257,s=E(e,a+10,15)+4,f=D+E(e,a+5,31)+1;a+=14;for(var h=new $(f),d=new $(19),u=0;u<s;++u)d[ye[u]]=E(e,a+u*3,7);a+=s*3;for(var g=X(d),m=(1<<g)-1,b=G(d,g,1),u=0;u<f;){var v=b[E(e,a,m)];a+=v&15;var P=v>>>4;if(P<16)h[u++]=P;else{var x=0,T=0;for(P==16?(T=3+E(e,a,3),a+=2,x=h[u-1]):P==17?(T=3+E(e,a,7),a+=3):P==18&&(T=11+E(e,a,127),a+=7);T--;)h[u++]=x}}var R=h.subarray(0,D),S=h.subarray(D);F=X(R),k=X(S),y=G(R,F,1),p=G(S,k,1)}else L(1);else{var P=xe(a)+4,W=e[P-4]|e[P-3]<<8,C=P+W;if(C>n){o&&L(0);break}i&&_(c+W),r.set(e.subarray(P,C),c),t.b=c+=W,t.p=a=C*8,t.f=l;continue}if(a>I){o&&L(0);break}}i&&_(c+131072);for(var B=(1<<F)-1,N=(1<<k)-1,z=a;;z=a){var x=y[Z(e,a)&B],j=x>>>4;if(a+=x&15,a>I){o&&L(0);break}if(x||L(2),j<256)r[c++]=j;else if(j==256){z=a,y=null;break}else{var re=j-254;if(j>264){var u=j-257,J=le[u];re=E(e,a,(1<<J)-1)+de[u],a+=J}var V=p[Z(e,a)&N],Y=V>>>4;V||L(3),a+=V&15;var S=ve[Y];if(Y>3){var J=ce[Y];S+=Z(e,a)&(1<<J)-1,a+=J}if(a>I){o&&L(0);break}i&&_(c+131072);for(var ne=c+re;c<ne;c+=4)r[c]=r[c-S],r[c+1]=r[c+1-S],r[c+2]=r[c+2-S],r[c+3]=r[c+3-S];c=ne}}t.l=y,t.p=z,t.b=c,t.f=l,y&&(l=1,t.m=F,t.d=p,t.n=k)}while(!l);return c==r.length?r:$e(r,0,c)},Ee=new $(0),Ue=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&L(6,"invalid gzip data");var r=e[3],t=10;r&4&&(t+=e[10]|(e[11]<<8)+2);for(var n=(r>>3&1)+(r>>4&1);n>0;n-=!e[t++]);return t+(r&2)},Ie=function(e){var r=e.length;return(e[r-4]|e[r-3]<<8|e[r-2]<<16|e[r-1]<<24)>>>0};function Ae(e,r){return Se(e.subarray(Ue(e),-8),r||new $(Ie(e)))}var Le=typeof TextDecoder<"u"&&new TextDecoder,Me=0;try{Le.decode(Ee,{stream:!0}),Me=1}catch{}var We=Ae,ge=(e,r)=>{if(e.length===0)return 0;let t=[];for(const l of e)t[l.location]=t[l.location]||0,t[l.location]+=l.balanced_score;if(t.length<=r)return 0;let n=t.slice(0,r).reduce((l,a)=>l+a,0),i=n,o=[0];for(let l=0;l<t.length;l++){const a=l+r;i+=(t[a]??0)-(t[l]??0),i>n?(n=i,o=[l]):i===n&&o[o.length-1]===l-1&&o.push(l)}return o[Math.floor(o.length/2)]},pe=(e,r,t,n,i,o)=>{let _=e.includes("\u200B"),l=[];_?l=e.split("\u200B"):l=e.split(/[\r\n\s]+/g);for(let y of n)l[y]?.startsWith("<mark>")||(l[y]=`<mark>${l[y]}</mark>`);let a=o??l.length,c=i??0;return a-c<t&&(t=a-c),r+t>a&&(r=a-t),r<c&&(r=c),l.slice(r,r+t).join(_?"":" ").trim()},De=(e,r)=>{const t=e.anchors.filter(l=>/h\d/i.test(l.element)&&l.text?.length&&/\S/.test(l.text)).sort((l,a)=>l.location-a.location),n=[];let i=0,o={title:e.meta.title,url:e.url,weighted_locations:[],locations:[],excerpt:""};const _=l=>{if(o.locations.length){const a=o.weighted_locations.map(p=>({weight:p.weight,balanced_score:p.balanced_score,location:p.location-i})),c=ge(a,r)+i,y=l?Math.min(l-c,r):r;o.excerpt=pe(e.raw_content??"",c,y,o.locations,i,l),n.push(o)}};for(let l of e.weighted_locations)if(!t.length||l.location<t[0].location)o.weighted_locations.push(l),o.locations.push(l.location);else{let a=t.shift();for(_(a.location);t.length&&l.location>=t[0].location;)a=t.shift();let c=e.url;try{if(/^((https?:)?\/\/)/.test(c)){let p=new URL(c);p.hash=a.id,c=p.toString()}else{/^\//.test(c)||(c=`/${c}`);let p=new URL(`https://example.com${c}`);p.hash=a.id,c=p.toString().replace(/^https:\/\/example.com/,"")}}catch{console.error(`Pagefind: Couldn't process ${c} for a search result`)}i=a.location,o={title:a.text,url:c,anchor:a,weighted_locations:[l],locations:[l.location],excerpt:""}}return _(t[0]?.location),n},ee=async(e=100)=>new Promise(r=>setTimeout(r,e)),we=class{constructor(e={}){this.version=me,this.backend=H,this.decoder=new TextDecoder("utf-8"),this.wasm=null,this.basePath=e.basePath||"/pagefind/",this.primary=e.primary||!1,this.primary&&!e.basePath&&this.initPrimary(),/[^\/]$/.test(this.basePath)&&(this.basePath=`${this.basePath}/`),window?.location?.origin&&this.basePath.startsWith(window.location.origin)&&(this.basePath=this.basePath.replace(window.location.origin,"")),this.baseUrl=e.baseUrl||this.defaultBaseUrl(),/^(\/|https?:\/\/)/.test(this.baseUrl)||(this.baseUrl=`/${this.baseUrl}`),this.indexWeight=e.indexWeight??1,this.excerptLength=e.excerptLength??30,this.mergeFilter=e.mergeFilter??{},this.ranking=e.ranking,this.highlightParam=e.highlightParam??null,this.loaded_chunks={},this.loaded_filters={},this.loaded_fragments={},this.raw_ptr=null,this.searchMeta=null,this.languages=null}initPrimary(){let e=import.meta.url.match(/^(.*\/)pagefind.js.*$/)?.[1];e?this.basePath=e:console.warn(["Pagefind couldn't determine the base of the bundle from the import path. Falling back to the default.","Set a basePath option when initialising Pagefind to ignore this message."].join(`
`))}defaultBaseUrl(){return this.basePath.match(/^(.*\/)_?pagefind/)?.[1]||"/"}async options(e){const r=["basePath","baseUrl","indexWeight","excerptLength","mergeFilter","highlightParam","ranking"];for(const[t,n]of Object.entries(e))if(t==="mergeFilter"){let i=this.stringifyFilters(n),o=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(o,i)}else t==="ranking"?await this.set_ranking(e.ranking):r.includes(t)?(t==="basePath"&&typeof n=="string"&&(this.basePath=n),t==="baseUrl"&&typeof n=="string"&&(this.baseUrl=n),t==="indexWeight"&&typeof n=="number"&&(this.indexWeight=n),t==="excerptLength"&&typeof n=="number"&&(this.excerptLength=n),t==="mergeFilter"&&typeof n=="object"&&(this.mergeFilter=n),t==="highlightParam"&&typeof n=="string"&&(this.highlightParam=n)):console.warn(`Unknown Pagefind option ${t}. Allowed options: [${r.join(", ")}]`)}decompress(e,r="unknown file"){return this.decoder.decode(e.slice(0,12))==="pagefind_dcd"?e.slice(12):(e=We(e),this.decoder.decode(e.slice(0,12))!=="pagefind_dcd"?(console.error(`Decompressing ${r} appears to have failed: Missing signature`),e):e.slice(12))}async set_ranking(e){if(!e)return;let r={term_similarity:e.termSimilarity??null,page_length:e.pageLength??null,term_saturation:e.termSaturation??null,term_frequency:e.termFrequency??null},t=await this.getPtr();this.raw_ptr=this.backend.set_ranking_weights(t,JSON.stringify(r))}async init(e,r){await this.loadEntry();let t=this.findIndex(e),n=t.wasm?t.wasm:"unknown",i=[this.loadMeta(t.hash)];if(r.load_wasm===!0&&i.push(this.loadWasm(n)),await Promise.all(i),this.raw_ptr=this.backend.init_pagefind(new Uint8Array(this.searchMeta)),Object.keys(this.mergeFilter)?.length){let o=this.stringifyFilters(this.mergeFilter),_=await this.getPtr();this.raw_ptr=this.backend.add_synthetic_filter(_,o)}this.ranking&&await this.set_ranking(this.ranking)}async loadEntry(){try{let r=await(await fetch(`${this.basePath}pagefind-entry.json?ts=${Date.now()}`)).json();this.languages=r.languages,r.version!==this.version&&(this.primary?console.warn(["Pagefind JS version doesn't match the version in your search index.",`Pagefind JS: ${this.version}. Pagefind index: ${r.version}`,"If you upgraded Pagefind recently, you likely have a cached pagefind.js file.","If you encounter any search errors, try clearing your cache."].join(`
`)):console.warn(["Merging a Pagefind index from a different version than the main Pagefind instance.",`Main Pagefind JS: ${this.version}. Merged index (${this.basePath}): ${r.version}`,"If you encounter any search errors, make sure that both sites are running the same version of Pagefind."].join(`
`)))}catch(e){throw console.error(`Failed to load Pagefind metadata:
${e?.toString()}`),new Error("Failed to load Pagefind metadata")}}findIndex(e){if(this.languages){let r=this.languages[e];if(r||(r=this.languages[e.split("-")[0]],r))return r;let t=Object.values(this.languages).sort((n,i)=>i.page_count-n.page_count);if(t[0])return t[0]}throw new Error("Pagefind Error: No language indexes found.")}async loadMeta(e){try{let t=await(await fetch(`${this.basePath}pagefind.${e}.pf_meta`)).arrayBuffer();this.searchMeta=this.decompress(new Uint8Array(t),"Pagefind metadata")}catch(r){console.error(`Failed to load the meta index:
${r?.toString()}`)}}async loadWasm(e){try{const r=`${this.basePath}wasm.${e}.pagefind`;let n=await(await fetch(r)).arrayBuffer();const i=this.decompress(new Uint8Array(n),"Pagefind WebAssembly");if(!i)throw new Error("No WASM after decompression");this.wasm=await this.backend(i)}catch(r){throw console.error(`Failed to load the Pagefind WASM:
${r?.toString()}`),new Error(`Failed to load the Pagefind WASM:
${r?.toString()}`)}}async _loadGenericChunk(e,r){try{let n=await(await fetch(e)).arrayBuffer(),i=this.decompress(new Uint8Array(n),e),o=await this.getPtr();this.raw_ptr=this.backend[r](o,i)}catch(t){console.error(`Failed to load the index chunk ${e}:
${t?.toString()}`)}}async loadChunk(e){if(!this.loaded_chunks[e]){const r=`${this.basePath}index/${e}.pf_index`;this.loaded_chunks[e]=this._loadGenericChunk(r,"load_index_chunk")}return await this.loaded_chunks[e]}async loadFilterChunk(e){if(!this.loaded_filters[e]){const r=`${this.basePath}filter/${e}.pf_filter`;this.loaded_filters[e]=this._loadGenericChunk(r,"load_filter_chunk")}return await this.loaded_filters[e]}async _loadFragment(e){let t=await(await fetch(`${this.basePath}fragment/${e}.pf_fragment`)).arrayBuffer(),n=this.decompress(new Uint8Array(t),`Fragment ${e}`);return JSON.parse(new TextDecoder().decode(n))}async loadFragment(e,r=[],t){this.loaded_fragments[e]||(this.loaded_fragments[e]=this._loadFragment(e));let n=await this.loaded_fragments[e];n.weighted_locations=r,n.locations=r.map(o=>o.location),n.raw_content||(n.raw_content=n.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"),n.content=n.content.replace(/\u200B/g,"")),n.raw_url||(n.raw_url=n.url),n.url=this.processedUrl(n.raw_url,t);const i=ge(r,this.excerptLength);return n.excerpt=pe(n.raw_content,i,this.excerptLength,n.locations),n.sub_results=De(n,this.excerptLength),n}fullUrl(e){return/^(https?:)?\/\//.test(e)?e:`${this.baseUrl}/${e}`.replace(/\/+/g,"/").replace(/^(https?:\/)/,"$1/")}processedUrl(e,r){const t=this.fullUrl(e);if(this.highlightParam===null)return t;let n=r.split(/\s+/);try{let i=new URL(t);for(const o of n)i.searchParams.append(this.highlightParam,o);return i.toString()}catch{try{let o=new URL(`https://example.com${t}`);for(const _ of n)o.searchParams.append(this.highlightParam,_);return o.toString().replace(/^https:\/\/example\.com/,"")}catch{return t}}}async getPtr(){for(;this.raw_ptr===null;)await ee(50);if(!this.raw_ptr)throw console.error("Pagefind: WASM Error (No pointer)"),new Error("Pagefind: WASM Error (No pointer)");return this.raw_ptr}parseFilters(e){let r={};if(!e)return r;for(const t of e.split("__PF_FILTER_DELIM__")){let[n,i]=t.split(/:(.*)$/);if(r[n]={},i){for(const o of i.split("__PF_VALUE_DELIM__"))if(o){let _=o.match(/^(.*):(\d+)$/);if(_){let[,l,a]=_;r[n][l]=parseInt(a)??a}}}}return r}stringifyFilters(e={}){return JSON.stringify(e)}stringifySorts(e={}){let r=Object.entries(e);for(let[t,n]of r)return r.length>1&&console.warn(`Pagefind was provided multiple sort options in this search, but can only operate on one. Using the ${t} sort.`),n!=="asc"&&n!=="desc"&&console.warn(`Pagefind was provided a sort with unknown direction ${n}. Supported: [asc, desc]`),`${t}:${n}`;return""}async filters(){let e=await this.getPtr(),t=this.backend.request_all_filter_indexes(e).split(" ").filter(i=>i).map(i=>this.loadFilterChunk(i));await Promise.all([...t]),e=await this.getPtr();let n=this.backend.filters(e);return this.parseFilters(n)}async preload(e,r={}){await this.search(e,{...r,preload:!0})}async search(e,r={}){r={verbose:!1,filters:{},sort:{},...r};const t=g=>{r.verbose&&console.log(g)};t(`Starting search on ${this.basePath}`);let n=Date.now(),i=await this.getPtr(),o=e===null;e=e??"";let _=/^\s*".+"\s*$/.test(e);if(_&&t("Running an exact search"),e=e.toLowerCase().trim().replace(/[\.`~!@#\$%\^&\*\(\)\{\}\[\]\\\|:;'",<>\/\?\-]/g,"").replace(/\s{2,}/g," ").trim(),t(`Normalized search term to ${e}`),!e?.length&&!o)return{results:[],unfilteredResultCount:0,filters:{},totalFilters:{},timings:{preload:Date.now()-n,search:Date.now()-n,total:Date.now()-n}};let l=this.stringifySorts(r.sort);t(`Stringified sort to ${l}`);const a=this.stringifyFilters(r.filters);t(`Stringified filters to ${a}`);let c=this.backend.request_indexes(i,e),y=this.backend.request_filter_indexes(i,a),p=c.split(" ").filter(g=>g).map(g=>this.loadChunk(g)),F=y.split(" ").filter(g=>g).map(g=>this.loadFilterChunk(g));if(await Promise.all([...p,...F]),t("Loaded necessary chunks to run search"),r.preload)return t("Preload \u2014 bailing out of search operation now."),null;i=await this.getPtr();let k=Date.now(),I=this.backend.search(i,e,a,l,_);t(`Got the raw search result: ${I}`);let[M,P,W,C]=I.split(/:([^:]*):(.*)__PF_UNFILTERED_DELIM__(.*)$/),D=this.parseFilters(W),s=this.parseFilters(C);t(`Remaining filters: ${JSON.stringify(I)}`);let f=P.length?P.split(" "):[],h=f.map(g=>{let[m,b,v]=g.split("@");t(`Processing result: 
  hash:${m}
  score:${b}
  locations:${v}`);let x=v.length?v.split(",").map(R=>{let[S,B,N]=R.split(">");return{weight:parseInt(S)/24,balanced_score:parseFloat(B),location:parseInt(N)}}):[],T=x.map(R=>R.location);return{id:m,score:parseFloat(b)*this.indexWeight,words:T,data:async()=>await this.loadFragment(m,x,e)}});const d=Date.now()-k,u=Date.now()-n;return t(`Found ${f.length} result${f.length==1?"":"s"} for "${e}" in ${Date.now()-k}ms (${Date.now()-n}ms realtime)`),{results:h,unfilteredResultCount:parseInt(M),filters:D,totalFilters:s,timings:{preload:u-d,search:d,total:u}}}},Te=class{constructor(e={}){this.backend=H,this.primaryLanguage="unknown",this.searchID=0,this.primary=new we({...e,primary:!0}),this.instances=[this.primary],this.init(e?.language)}async options(e){await this.primary.options(e)}async init(e){if(document?.querySelector){const r=document.querySelector("html")?.getAttribute("lang")||"unknown";this.primaryLanguage=r.toLocaleLowerCase()}await this.primary.init(e||this.primaryLanguage,{load_wasm:!0})}async mergeIndex(e,r={}){if(this.primary.basePath.startsWith(e)){console.warn(`Skipping mergeIndex ${e} that appears to be the same as the primary index (${this.primary.basePath})`);return}let t=new we({primary:!1,basePath:e});for(this.instances.push(t);this.primary.wasm===null;)await ee(50);await t.init(r.language||this.primaryLanguage,{load_wasm:!1}),delete r.language,await t.options(r)}mergeFilters(e){const r={};for(const t of e)for(const[n,i]of Object.entries(t))if(r[n]){const o=r[n];for(const[_,l]of Object.entries(i))o[_]=(o[_]||0)+l}else{r[n]=i;continue}return r}async filters(){let e=await Promise.all(this.instances.map(r=>r.filters()));return this.mergeFilters(e)}async preload(e,r={}){await Promise.all(this.instances.map(t=>t.preload(e,r)))}async debouncedSearch(e,r,t){const n=++this.searchID;if(this.preload(e,r),await ee(t),n!==this.searchID)return null;const i=await this.search(e,r);return n!==this.searchID?null:i}async search(e,r={}){let t=await Promise.all(this.instances.map(a=>a.search(e,r)));const n=this.mergeFilters(t.map(a=>a.filters)),i=this.mergeFilters(t.map(a=>a.totalFilters)),o=t.map(a=>a.results).flat().sort((a,c)=>c.score-a.score),_=t.map(a=>a.timings),l=t.reduce((a,c)=>a+c.unfilteredResultCount,0);return{results:o,unfilteredResultCount:l,filters:n,totalFilters:i,timings:_}}},U=void 0,te=void 0,O=()=>{U||(U=new Te(te??{}))},Re=async e=>{U?await U.options(e):te=e},Ce=async()=>{O()},qe=async()=>{U=void 0,te=void 0},je=async(e,r)=>(O(),await U.mergeIndex(e,r)),Oe=async(e,r)=>(O(),await U.search(e,r)),Be=async(e,r,t=300)=>(O(),await U.debouncedSearch(e,r,t)),Ne=async(e,r)=>(O(),await U.preload(e,r)),ze=async()=>(O(),await U.filters());export{Be as debouncedSearch,qe as destroy,ze as filters,Ce as init,je as mergeIndex,Re as options,Ne as preload,Oe as search};
