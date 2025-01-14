(()=>{var p=Object.defineProperty,f=(e,t)=>{for(var i in t)p(e,i,{get:t[i],enumerable:!0})},a={};f(a,{FilterPills:()=>T,Input:()=>_,Instance:()=>F,ResultList:()=>v,Summary:()=>w});var r=class u{constructor(t){this.element=document.createElement(t)}id(t){return this.element.id=t,this}class(t){return this.element.classList.add(t),this}attrs(t){for(let[i,s]of Object.entries(t))this.element.setAttribute(i,s);return this}text(t){return this.element.innerText=t,this}html(t){return this.element.innerHTML=t,this}handle(t,i){return this.element.addEventListener(t,i),this}addTo(t){return t instanceof u?t.element.appendChild(this.element):t.appendChild(this.element),this.element}},m=async(e=100)=>new Promise(t=>setTimeout(t,e)),_=class{constructor(e={}){if(this.inputEl=null,this.clearEl=null,this.instance=null,this.searchID=0,this.debounceTimeoutMs=e.debounceTimeoutMs??300,e.inputElement){if(e.containerElement){console.warn("[Pagefind Input component]: inputElement and containerElement both supplied. Ignoring the container option.");return}this.initExisting(e.inputElement)}else if(e.containerElement)this.initContainer(e.containerElement);else{console.error("[Pagefind Input component]: No selector supplied for containerElement or inputElement");return}this.inputEl.addEventListener("input",async t=>{if(this.instance&&typeof t?.target?.value=="string"){this.updateState(t.target.value);let i=++this.searchID;if(await m(this.debounceTimeoutMs),i!==this.searchID)return null;this.instance?.triggerSearch(t.target.value)}}),this.inputEl.addEventListener("keydown",t=>{t.key==="Escape"&&(++this.searchID,this.inputEl.value="",this.instance?.triggerSearch(""),this.updateState("")),t.key==="Enter"&&t.preventDefault()}),this.inputEl.addEventListener("focus",()=>{this.instance?.triggerLoad()})}initContainer(e){let t=document.querySelector(e);if(!t){console.error(`[Pagefind Input component]: No container found for ${e} selector`);return}if(t.tagName==="INPUT")console.warn(`[Pagefind Input component]: Encountered input element for ${e} when a container was expected`),console.warn("[Pagefind Input component]: Treating containerElement option as inputElement and proceeding"),this.initExisting(e);else{t.innerHTML="";let i=0;for(;document.querySelector(`#pfmod-input-${i}`);)i+=1;let s=new r("form").class("pagefind-modular-input-wrapper").attrs({role:"search","aria-label":"Search this site",action:"javascript:void(0);"});new r("label").attrs({for:`pfmod-input-${i}`,"data-pfmod-sr-hidden":"true"}).text("Search this site").addTo(s),this.inputEl=new r("input").id(`pfmod-input-${i}`).class("pagefind-modular-input").attrs({autocapitalize:"none",enterkeyhint:"search"}).addTo(s),this.clearEl=new r("button").class("pagefind-modular-input-clear").attrs({"data-pfmod-suppressed":"true"}).text("Clear").handle("click",()=>{this.inputEl.value="",this.instance.triggerSearch(""),this.updateState("")}).addTo(s),s.addTo(t)}}initExisting(e){let t=document.querySelector(e);if(!t){console.error(`[Pagefind Input component]: No input element found for ${e} selector`);return}if(t.tagName!=="INPUT"){console.error(`[Pagefind Input component]: Expected ${e} to be an <input> element`);return}this.inputEl=t}updateState(e){this.clearEl&&(e&&e?.length?this.clearEl.removeAttribute("data-pfmod-suppressed"):this.clearEl.setAttribute("data-pfmod-suppressed","true"))}register(e){this.instance=e,this.instance.on("search",(t,i)=>{this.inputEl&&document.activeElement!==this.inputEl&&(this.inputEl.value=t,this.updateState(t))})}focus(){this.inputEl&&this.inputEl.focus()}},o=e=>{if(e instanceof Element)return[e];if(Array.isArray(e)&&e.every(t=>t instanceof Element))return e;if(typeof e=="string"||e instanceof String){let t=document.createElement("div");return t.innerHTML=e,[...t.childNodes]}else return console.error(`[Pagefind ResultList component]: Expected template function to return an HTML element or string, got ${typeof e}`),[]},g=()=>{let e=(t=30)=>". ".repeat(Math.floor(10+Math.random()*t));return`<li class="pagefind-modular-list-result">
    <div class="pagefind-modular-list-thumb" data-pfmod-loading></div>
    <div class="pagefind-modular-list-inner">
        <p class="pagefind-modular-list-title" data-pfmod-loading>${e(30)}</p>
        <p class="pagefind-modular-list-excerpt" data-pfmod-loading>${e(40)}</p>
    </div>
</li>`},E=e=>{let t=new r("li").class("pagefind-modular-list-result"),i=new r("div").class("pagefind-modular-list-thumb").addTo(t);e?.meta?.image&&new r("img").class("pagefind-modular-list-image").attrs({src:e.meta.image,alt:e.meta.image_alt||e.meta.title}).addTo(i);let s=new r("div").class("pagefind-modular-list-inner").addTo(t),n=new r("p").class("pagefind-modular-list-title").addTo(s);return new r("a").class("pagefind-modular-list-link").text(e.meta?.title).attrs({href:e.meta?.url||e.url}).addTo(n),new r("p").class("pagefind-modular-list-excerpt").html(e.excerpt).addTo(s),t.element},h=e=>{if(!(e instanceof HTMLElement))return null;let t=window.getComputedStyle(e).overflowY;return t!=="visible"&&t!=="hidden"?e:h(e.parentNode)},b=class{constructor(e={}){this.rawResult=e.result,this.placeholderNodes=e.placeholderNodes,this.resultFn=e.resultFn,this.intersectionEl=e.intersectionEl,this.result=null,this.waitForIntersection()}waitForIntersection(){if(!this.placeholderNodes?.length)return;let e={root:this.intersectionEl,rootMargin:"0px",threshold:.01};new IntersectionObserver((t,i)=>{this.result===null&&t?.[0]?.isIntersecting&&(this.load(),i.disconnect())},e).observe(this.placeholderNodes[0])}async load(){if(!this.placeholderNodes?.length)return;this.result=await this.rawResult.data();let e=this.resultFn(this.result),t=o(e);for(;this.placeholderNodes.length>1;)this.placeholderNodes.pop().remove();this.placeholderNodes[0].replaceWith(...t)}},v=class{constructor(e){if(this.intersectionEl=document.body,this.containerEl=null,this.results=[],this.placeholderTemplate=e.placeholderTemplate??g,this.resultTemplate=e.resultTemplate??E,e.containerElement)this.initContainer(e.containerElement);else{console.error("[Pagefind ResultList component]: No selector supplied for containerElement");return}}initContainer(e){let t=document.querySelector(e);if(!t){console.error(`[Pagefind ResultList component]: No container found for ${e} selector`);return}this.containerEl=t}append(e){for(let t of e)this.containerEl.appendChild(t)}register(e){e.on("results",t=>{this.containerEl&&(this.containerEl.innerHTML="",this.intersectionEl=h(this.containerEl),this.results=t.results.map(i=>{let s=o(this.placeholderTemplate());return this.append(s),new b({result:i,placeholderNodes:s,resultFn:this.resultTemplate,intersectionEl:this.intersectionEl})}))}),e.on("loading",()=>{this.containerEl&&(this.containerEl.innerHTML="")})}},w=class{constructor(e={}){if(this.containerEl=null,this.defaultMessage=e.defaultMessage??"",this.term="",e.containerElement)this.initContainer(e.containerElement);else{console.error("[Pagefind Summary component]: No selector supplied for containerElement");return}}initContainer(e){let t=document.querySelector(e);if(!t){console.error(`[Pagefind Summary component]: No container found for ${e} selector`);return}this.containerEl=t,this.containerEl.innerText=this.defaultMessage}register(e){e.on("search",(t,i)=>{this.term=t}),e.on("results",t=>{if(!this.containerEl||!t)return;if(!this.term){this.containerEl.innerText=this.defaultMessage;return}let i=t?.results?.length??0;this.containerEl.innerText=`${i} result${i===1?"":"s"} for ${this.term}`}),e.on("loading",()=>{this.containerEl&&(this.containerEl.innerText=`Searching for ${this.term}...`)})}},T=class{constructor(e={}){if(this.instance=null,this.wrapper=null,this.pillContainer=null,this.available={},this.selected=["All"],this.total=0,this.filterMemo="",this.filter=e.filter,this.ordering=e.ordering??null,this.alwaysShow=e.alwaysShow??!1,this.selectMultiple=e.selectMultiple??!1,!this.filter?.length){console.error("[Pagefind FilterPills component]: No filter option supplied, nothing to display");return}if(e.containerElement)this.initContainer(e.containerElement);else{console.error("[Pagefind FilterPills component]: No selector supplied for containerElement");return}}initContainer(e){let t=document.querySelector(e);if(!t){console.error(`[Pagefind FilterPills component]: No container found for ${e} selector`);return}t.innerHTML="";let i=`pagefind_modular_filter_pills_${this.filter}`,s=new r("div").class("pagefind-modular-filter-pills-wrapper").attrs({role:"group","aria-labelledby":i});this.alwaysShow||s.attrs({"data-pfmod-hidden":!0}),new r("div").id(i).class("pagefind-modular-filter-pills-label").attrs({"data-pfmod-sr-hidden":!0}).text(`Filter results by ${this.filter}`).addTo(s),this.pillContainer=new r("div").class("pagefind-modular-filter-pills").addTo(s),this.wrapper=s.addTo(t)}update(){let e=this.available.map(t=>t[0]).join("~");e==this.filterMemo?this.updateExisting():(this.renderNew(),this.filterMemo=e)}pushFilters(){let e=this.selected.filter(t=>t!=="All");this.instance.triggerFilter(this.filter,e)}pillInner(e,t){return this.total?`<span aria-label="${e}">${e} (${t})</span>`:`<span aria-label="${e}">${e}</span>`}renderNew(){this.available.forEach(([e,t])=>{new r("button").class("pagefind-modular-filter-pill").html(this.pillInner(e,t)).attrs({"aria-pressed":this.selected.includes(e),type:"button"}).handle("click",()=>{e==="All"?this.selected=["All"]:this.selected.includes(e)?this.selected=this.selected.filter(i=>i!==e):this.selectMultiple?this.selected.push(e):this.selected=[e],this.selected?.length?this.selected?.length>1&&(this.selected=this.selected.filter(i=>i!=="All")):this.selected=["All"],this.update(),this.pushFilters()}).addTo(this.pillContainer)})}updateExisting(){let e=[...this.pillContainer.childNodes];this.available.forEach(([t,i],s)=>{e[s].innerHTML=this.pillInner(t,i),e[s].setAttribute("aria-pressed",this.selected.includes(t))})}register(e){this.instance=e,this.instance.on("filters",t=>{if(!this.pillContainer)return;this.selectMultiple?t=t.available:t=t.total;let i=t[this.filter];if(!i){console.warn(`[Pagefind FilterPills component]: No possible values found for the ${this.filter} filter`);return}this.available=Object.entries(i),Array.isArray(this.ordering)?this.available.sort((s,n)=>{let c=this.ordering.indexOf(s[0]),d=this.ordering.indexOf(n[0]);return(c===-1?1/0:c)-(d===-1?1/0:d)}):this.available.sort((s,n)=>s[0].localeCompare(n[0])),this.available.unshift(["All",this.total]),this.update()}),e.on("results",t=>{this.pillContainer&&(this.total=t?.unfilteredResultCount||0,this.available?.[0]?.[0]==="All"&&(this.available[0][1]=this.total),this.total||this.alwaysShow?this.wrapper.removeAttribute("data-pfmod-hidden"):this.wrapper.setAttribute("data-pfmod-hidden","true"),this.update())})}},y=async(e=50)=>await new Promise(t=>setTimeout(t,e)),l;try{document?.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&(l=new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?modular-ui.js.*$/)[1])}catch{l="/pagefind/"}var F=class{constructor(e={}){this.__pagefind__=null,this.__initializing__=null,this.__searchID__=0,this.__hooks__={search:[],filters:[],loading:[],results:[]},this.components=[],this.searchTerm="",this.searchFilters={},this.searchResult={},this.availableFilters=null,this.totalFilters=null,this.options={bundlePath:e.bundlePath??l,mergeIndex:e.mergeIndex??[]},delete e.bundlePath,delete e.resetStyles,delete e.processResult,delete e.processTerm,delete e.debounceTimeoutMs,delete e.mergeIndex,delete e.translations,this.pagefindOptions=e}add(e){e?.register?.(this),this.components.push(e)}on(e,t){if(!this.__hooks__[e]){let i=Object.keys(this.__hooks__).join(", ");console.error(`[Pagefind Composable]: Unknown event type ${e}. Supported events: [${i}]`);return}if(typeof t!="function"){console.error(`[Pagefind Composable]: Expected callback to be a function, received ${typeof t}`);return}this.__hooks__[e].push(t)}triggerLoad(){this.__load__()}triggerSearch(e){this.searchTerm=e,this.__dispatch__("search",e,this.searchFilters),this.__search__(e,this.searchFilters)}triggerSearchWithFilters(e,t){this.searchTerm=e,this.searchFilters=t,this.__dispatch__("search",e,t),this.__search__(e,t)}triggerFilters(e){this.searchFilters=e,this.__dispatch__("search",this.searchTerm,e),this.__search__(this.searchTerm,e)}triggerFilter(e,t){this.searchFilters=this.searchFilters||{},this.searchFilters[e]=t,this.__dispatch__("search",this.searchTerm,this.searchFilters),this.__search__(this.searchTerm,this.searchFilters)}__dispatch__(e,...t){this.__hooks__[e]?.forEach(i=>i?.(...t))}async __clear__(){this.__dispatch__("results",{results:[],unfilteredTotalCount:0}),this.availableFilters=await this.__pagefind__.filters(),this.totalFilters=this.availableFilters,this.__dispatch__("filters",{available:this.availableFilters,total:this.totalFilters})}async __search__(e,t){this.__dispatch__("loading"),await this.__load__();let i=++this.__searchID__;if(!e||!e.length)return this.__clear__();let s=await this.__pagefind__.search(e,{filters:t});s&&this.__searchID__===i&&(s.filters&&Object.keys(s.filters)?.length&&(this.availableFilters=s.filters,this.totalFilters=s.totalFilters,this.__dispatch__("filters",{available:this.availableFilters,total:this.totalFilters})),this.searchResult=s,this.__dispatch__("results",this.searchResult))}async __load__(){if(this.__initializing__){for(;!this.__pagefind__;)await y(50);return}if(this.__initializing__=!0,!this.__pagefind__){let e;try{e=await import(`${this.options.bundlePath}pagefind.js`)}catch(t){console.error(t),console.error([`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,"You can configure this by passing a bundlePath option to PagefindComposable Instance"].join(`
`)),document?.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"?console.error(`[DEBUG: Loaded from ${document.currentScript?.src??"bad script location"}]`):console.error("no known script location")}await e.options(this.pagefindOptions||{});for(let t of this.options.mergeIndex){if(!t.bundlePath)throw new Error("mergeIndex requires a bundlePath parameter");let i=t.bundlePath;delete t.bundlePath,await e.mergeIndex(i,t)}this.__pagefind__=e}this.availableFilters=await this.__pagefind__.filters(),this.totalFilters=this.availableFilters,this.__dispatch__("filters",{available:this.availableFilters,total:this.totalFilters})}};window.PagefindModularUI=a})();
