(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{5202:function(){!function(){"use strict";function applyFocusVisiblePolyfill(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(e){return!!e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList}function addFocusVisibleClass(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function onPointerDown(e){t=!1}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(isValidFocusTarget(e.activeElement)&&addFocusVisibleClass(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),addInitialPointerMoveListeners())},!0),addInitialPointerMoveListeners(),e.addEventListener("focus",function(e){var n,r,i;isValidFocusTarget(e.target)&&(t||(r=(n=e.target).type,"INPUT"===(i=n.tagName)&&o[r]&&!n.readOnly||"TEXTAREA"===i&&!n.readOnly||n.isContentEditable))&&addFocusVisibleClass(e.target)},!0),e.addEventListener("blur",function(e){if(isValidFocusTarget(e.target)){var t;(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()},9783:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",a="restore",l="server-patch",s="prefetch",u="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},358:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(4005),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),i=n(6722),a=n(4812),l=n(7822),s=n(9938),u=n(5017),c=n(5734),d=n(8503),f=n(7549),m=n(358),v=n(1417),p=n(9783),h=new Set;function prefetch(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(h.has(i))return;h.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:l,as:h,children:g,prefetch:y=null,passHref:b,replace:x,shallow:_,scroll:E,locale:j,onClick:N,onMouseEnter:I,onTouchStart:L,legacyBehavior:C=!1,...k}=e;n=g,C&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let P=o.default.useContext(c.RouterContext),S=o.default.useContext(d.AppRouterContext),M=null!=P?P:S,A=!P,w=!1!==y,O=null===y?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:T,as:B}=o.default.useMemo(()=>{if(!P){let e=formatStringOrUrl(l);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,i.resolveHref)(P,l,!0);return{href:e,as:h?(0,i.resolveHref)(P,h):t||e}},[P,l,h]),R=o.default.useRef(T),F=o.default.useRef(B);C&&(r=o.default.Children.only(n));let G=C?r&&"object"==typeof r&&r.ref:t,[D,U,V]=(0,f.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(F.current!==B||R.current!==T)&&(V(),F.current=B,R.current=T),D(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[B,G,T,V,D]);o.default.useEffect(()=>{M&&U&&w&&prefetch(M,T,B,{locale:j},{kind:O},A)},[B,T,U,j,w,null==P?void 0:P.locale,M,A,O]);let W={ref:K,onClick(e){C||"function"!=typeof N||N(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,i,l,s,u,c,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:u,scroll:e}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,M,T,B,x,_,E,j,A,w)},onMouseEnter(e){C||"function"!=typeof I||I(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&(w||!A)&&prefetch(M,T,B,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:O},A)},onTouchStart(e){C||"function"!=typeof L||L(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&(w||!A)&&prefetch(M,T,B,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:O},A)}};if((0,s.isAbsoluteUrl)(B))W.href=B;else if(!C||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,m.getDomainLocale)(B,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);W.href=t||(0,v.addBasePath)((0,u.addLocale)(B,e,null==P?void 0:P.defaultLocale))}return C?o.default.cloneElement(r,W):o.default.createElement("a",{...k,...W},n)}),y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(517),i="function"==typeof IntersectionObserver,a=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),m=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(i){if(u||c)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,c,f.current]);let v=(0,r.useCallback)(()=>{d(!1)},[]);return[m,c,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(4605)},1664:function(e,t,n){e.exports=n(2994)},9432:function(e,t,n){"use strict";n.d(t,{q:function(){return v}});var[r,o]=(0,n(5227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),i=n(2504),a=n(5893);function initials(e){var t;let n=e.split(" "),r=null!=(t=n.at(0))?t:"",o=n.length>1?n.at(-1):"";return r&&o?`${r.charAt(0)}${o.charAt(0)}`:r.charAt(0)}function AvatarName(e){let{name:t,getInitials:n,...r}=e,l=o();return(0,a.jsx)(i.m.div,{role:"img","aria-label":t,...r,__css:l.label,children:t?null==n?void 0:n(t):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=e=>(0,a.jsxs)(i.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,a.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,a.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),l=n(5721),s=n(7294);function AvatarImage(e){let{src:t,srcSet:n,onError:r,onLoad:o,getInitials:u,name:c,borderRadius:d,loading:f,iconLabel:m,icon:v=(0,a.jsx)(GenericAvatarIcon,{}),ignoreFallback:p,referrerPolicy:h,crossOrigin:g}=e,y=(0,l.d)({src:t,onError:r,crossOrigin:g,ignoreFallback:p}),b=!t||"loaded"!==y;return b?c?(0,a.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials:u,name:c}):(0,s.cloneElement)(v,{role:"img","aria-label":m}):(0,a.jsx)(i.m.img,{src:t,srcSet:n,alt:c,onLoad:o,referrerPolicy:h,crossOrigin:null!=g?g:void 0,className:"chakra-avatar__img",loading:f,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:d}})}AvatarImage.displayName="AvatarImage";var u=n(5059),c=n(1628),d=n(3179),f=n(5432),m={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},v=(0,u.G)((e,t)=>{let n=(0,c.jC)("Avatar",e),[o,l]=(0,s.useState)(!1),{src:u,srcSet:v,name:p,showBorder:h,borderRadius:g="full",onError:y,onLoad:b,getInitials:x=initials,icon:_=(0,a.jsx)(GenericAvatarIcon,{}),iconLabel:E=" avatar",loading:j,children:N,borderColor:I,ignoreFallback:L,crossOrigin:C,...k}=(0,d.Lr)(e),P={borderRadius:g,borderWidth:h?"2px":void 0,...m,...n.container};return I&&(P.borderColor=I),(0,a.jsx)(i.m.span,{ref:t,...k,className:(0,f.cx)("chakra-avatar",e.className),"data-loaded":(0,f.PB)(o),__css:P,children:(0,a.jsxs)(r,{value:n,children:[(0,a.jsx)(AvatarImage,{src:u,srcSet:v,loading:j,onLoad:(0,f.v0)(b,()=>{l(!0)}),onError:y,getInitials:x,name:p,borderRadius:g,icon:_,iconLabel:E,ignoreFallback:L,crossOrigin:C}),N]})})});v.displayName="Avatar"},5698:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(7294),[o,i]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=n(2504),l=n(5432),s=n(5893);function ButtonIcon(e){let{children:t,className:n,...o}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,l.cx)("chakra-button__icon",n);return(0,s.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:u,children:i})}ButtonIcon.displayName="ButtonIcon";var u=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:o="0.5rem",children:i=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:d,...f}=e,m=(0,l.cx)("chakra-button__spinner",c),v="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[v]:t?o:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,v,o]);return(0,s.jsx)(a.m.div,{className:m,...f,__css:p,children:i})}ButtonSpinner.displayName="ButtonSpinner";var c=n(5059),d=n(1628),f=n(3179),m=(0,c.G)((e,t)=>{let n=i(),o=(0,d.mq)("Button",{...n,...e}),{isDisabled:u=null==n?void 0:n.isDisabled,isLoading:c,isActive:m,children:v,leftIcon:p,rightIcon:h,loadingText:g,iconSpacing:y="0.5rem",type:b,spinner:x,spinnerPlacement:_="start",className:E,as:j,...N}=(0,f.Lr)(e),I=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:L,type:C}=function(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}(j),k={rightIcon:h,leftIcon:p,iconSpacing:y,children:v};return(0,s.jsxs)(a.m.button,{ref:function(...e){return(0,r.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,L),as:j,type:null!=b?b:C,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(c),__css:I,className:(0,l.cx)("chakra-button",E),...N,disabled:u||c,children:[c&&"start"===_&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:g,placement:"start",spacing:y,children:x}),c?g||(0,s.jsx)(a.m.span,{opacity:0,children:(0,s.jsx)(ButtonContent,{...k})}):(0,s.jsx)(ButtonContent,{...k}),c&&"end"===_&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:g,placement:"end",spacing:y,children:x})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(ButtonIcon,{marginEnd:o,children:t}),r,n&&(0,s.jsx)(ButtonIcon,{marginStart:o,children:n})]})}m.displayName="Button"},5721:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage},z:function(){return shouldShowFallbackImage}});var r=n(6245),o=n(7294);function useImage(e){let{loading:t,src:n,srcSet:i,onLoad:a,onError:l,crossOrigin:s,sizes:u,ignoreFallback:c}=e,[d,f]=(0,o.useState)("pending");(0,o.useEffect)(()=>{f(n?"loading":"pending")},[n]);let m=(0,o.useRef)(),v=(0,o.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,s&&(e.crossOrigin=s),i&&(e.srcset=i),u&&(e.sizes=u),t&&(e.loading=t),e.onload=e=>{flush(),f("loaded"),null==a||a(e)},e.onerror=e=>{flush(),f("failed"),null==l||l(e)},m.current=e},[n,s,i,u,a,l,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!c)return"loading"===d&&v(),()=>{flush()}},[d,v,c]),c?"loaded":d}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},1941:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(5059),o=n(5893),i=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:i,...a}=e;return(0,o.jsx)("img",{width:n,height:r,ref:t,alt:i,...a})});i.displayName="NativeImage";var a=n(5721),l=n(2504),s=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:s,srcSet:u,align:c,fit:d,loading:f,ignoreFallback:m,crossOrigin:v,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:h,...g}=e,y=null!=f||m||!(void 0!==n||void 0!==r),b=(0,a.d)({...e,crossOrigin:v,ignoreFallback:y}),x=(0,a.z)(b,p),_={ref:t,objectFit:d,objectPosition:c,...y?g:function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(g,["onError","onLoad"])};return x?r||(0,o.jsx)(l.m.img,{as:i,className:"chakra-image__placeholder",src:n,..._}):(0,o.jsx)(l.m.img,{as:i,src:s,srcSet:u,crossOrigin:v,loading:f,referrerPolicy:h,className:"chakra-image",..._})});s.displayName="Image"},7754:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(2504),o=n(5059),i=n(5893),a=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var l={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)(function(e,t){let{axis:n="both",...o}=e;return(0,i.jsx)(r.m.div,{ref:t,__css:l[n],...o,position:"absolute"})})},3100:function(e,t,n){"use strict";n.d(t,{xu:function(){return a}});var r=n(2504),o=n(5059),i=n(5893),a=(0,r.m)("div");a.displayName="Box";var l=(0,o.G)(function(e,t){let{size:n,centerContent:r=!0,...o}=e;return(0,i.jsx)(a,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});l.displayName="Square",(0,o.G)(function(e,t){let{size:n,...r}=e;return(0,i.jsx)(l,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},5034:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=(0,n(2504).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var r=n(5059),o=n(1628),i=n(3179),a=n(2504),l=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Heading",e),{className:r,...u}=(0,i.Lr)(e);return(0,s.jsx)(a.m.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...u,__css:n})});u.displayName="Heading"},4641:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(7073),o=n(5059),i=n(5893),a=(0,o.G)((e,t)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));a.displayName="HStack"},204:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var r=n(5059),o=n(2504),i=n(5893),a=(0,r.G)(function(e,t){let{direction:n,align:r,justify:a,wrap:l,basis:s,grow:u,shrink:c,...d}=e;return(0,i.jsx)(o.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:s,flexGrow:u,flexShrink:c},...d})});a.displayName="Flex"},1669:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(7073),o=n(5059),i=n(5893),a=(0,o.G)((e,t)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},7073:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(2504),o=n(5893),StackItem=e=>(0,o.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var i=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,i.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var a="& > *:not(style) ~ *:not(style)",l=n(5059),s=n(7294),u=(0,l.G)((e,t)=>{let{isInline:n,direction:l,align:u,justify:c,spacing:d="0.5rem",wrap:f,children:m,divider:v,className:p,shouldWrapChildren:h,...g}=e,y=n?"row":null!=l?l:"column",b=(0,s.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[a]:mapResponsive(n,e=>r[e])}})({direction:y,spacing:d}),[y,d]),x=(0,s.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}})({spacing:d,direction:y}),[d,y]),_=!!v,E=!h&&!_,j=(0,s.useMemo)(()=>{let e=s.Children.toArray(m).filter(e=>(0,s.isValidElement)(e));return E?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,i=n+1===e.length,a=(0,o.jsx)(StackItem,{children:t},r),l=h?a:t;if(!_)return l;let u=(0,s.cloneElement)(v,{__css:x});return(0,o.jsxs)(s.Fragment,{children:[l,i?null:u]},r)})},[v,x,_,E,h,m]),N=(0,i.cx)("chakra-stack",p);return(0,o.jsx)(r.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:c,flexDirection:b.flexDirection,flexWrap:f,className:N,__css:_?{}:{[a]:b[a]},...g,children:j})});u.displayName="Stack"},9564:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(5059),o=n(1628),i=n(3179),a=n(2504),l=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Text",e),{className:r,align:u,decoration:c,casing:d,...f}=(0,i.Lr)(e),m=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(a.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...m,...f,__css:n})});u.displayName="Text"},3838:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(5059),o=n(1628),i=n(3179),a=n(2504),l=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,o.mq)("Link",e),{className:r,isExternal:u,...c}=(0,i.Lr)(e);return(0,s.jsx)(a.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",r),...c,__css:n})});u.displayName="Link"}}]);