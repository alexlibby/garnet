try{
(()=>{var W=Object.create;var g=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var m=(e,r)=>()=>(e&&(r=e(e=0)),r);var O=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Y=(e,r)=>{for(var t in r)g(e,t,{get:r[t],enumerable:!0})},k=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of j(r))!U.call(e,s)&&s!==t&&g(e,s,{get:()=>r[s],enumerable:!(o=H(r,s))||o.enumerable});return e};var q=(e,r,t)=>(t=e!=null?W(K(e)):{},k(r||!e||!e.__esModule?g(t,"default",{value:e,enumerable:!0}):t,e)),w=e=>k(g({},"__esModule",{value:!0}),e);var n=m(()=>{});var l=m(()=>{});var a=m(()=>{});var B={};Y(B,{Children:()=>V,Component:()=>z,Fragment:()=>X,Profiler:()=>$,PureComponent:()=>Z,StrictMode:()=>J,Suspense:()=>Q,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>ee,cloneElement:()=>re,createContext:()=>te,createElement:()=>oe,createFactory:()=>ne,createRef:()=>le,default:()=>G,forwardRef:()=>ae,isValidElement:()=>ie,lazy:()=>se,memo:()=>_,startTransition:()=>de,unstable_act:()=>ce,useCallback:()=>ue,useContext:()=>pe,useDebugValue:()=>be,useDeferredValue:()=>ge,useEffect:()=>me,useId:()=>fe,useImperativeHandle:()=>ye,useInsertionEffect:()=>Se,useLayoutEffect:()=>Ee,useMemo:()=>_e,useReducer:()=>Te,useRef:()=>Ce,useState:()=>he,useSyncExternalStore:()=>Oe,useTransition:()=>ke,version:()=>Re});var G,V,z,X,$,Z,J,Q,ee,re,te,oe,ne,le,ae,ie,se,_,de,ce,ue,pe,be,ge,me,fe,ye,Se,Ee,_e,Te,Ce,he,Oe,ke,Re,T=m(()=>{n();l();a();G=__REACT__,{Children:V,Component:z,Fragment:X,Profiler:$,PureComponent:Z,StrictMode:J,Suspense:Q,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ee,cloneElement:re,createContext:te,createElement:oe,createFactory:ne,createRef:le,forwardRef:ae,isValidElement:ie,lazy:se,memo:_,startTransition:de,unstable_act:ce,useCallback:ue,useContext:pe,useDebugValue:be,useDeferredValue:ge,useEffect:me,useId:fe,useImperativeHandle:ye,useInsertionEffect:Se,useLayoutEffect:Ee,useMemo:_e,useReducer:Te,useRef:Ce,useState:he,useSyncExternalStore:Oe,useTransition:ke,version:Re}=__REACT__});var v=O(f=>{"use strict";n();l();a();var Be=(T(),w(B)),xe=Symbol.for("react.element"),Ae=Symbol.for("react.fragment"),De=Object.prototype.hasOwnProperty,Ie=Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ve={key:!0,ref:!0,__self:!0,__source:!0};function I(e,r,t){var o,s={},y=null,h=null;t!==void 0&&(y=""+t),r.key!==void 0&&(y=""+r.key),r.ref!==void 0&&(h=r.ref);for(o in r)De.call(r,o)&&!ve.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:xe,type:e,key:y,ref:h,props:s,_owner:Ie.current}}f.Fragment=Ae;f.jsx=I;f.jsxs=I});var L=O((Lo,F)=>{"use strict";n();l();a();F.exports=v()});n();l();a();n();l();a();n();l();a();var tr=__STORYBOOK_API__,{ActiveTabs:or,Consumer:nr,ManagerContext:lr,Provider:ar,RequestResponseError:ir,addons:S,combineParameters:sr,controlOrMetaKey:dr,controlOrMetaSymbol:cr,eventMatchesShortcut:ur,eventToShortcut:pr,experimental_requestResponse:br,isMacLike:gr,isShortcutTaken:mr,keyToSymbol:fr,merge:yr,mockChannel:Sr,optionOrAltSymbol:Er,shortcutMatchesShortcut:_r,shortcutToHumanString:Tr,types:R,useAddonState:Cr,useArgTypes:hr,useArgs:Or,useChannel:kr,useGlobalTypes:Rr,useGlobals:Br,useParameter:xr,useSharedState:Ar,useStoryPrepared:Dr,useStorybookApi:E,useStorybookState:Ir}=__STORYBOOK_API__;T();n();l();a();var Hr=__STORYBOOK_COMPONENTS__,{A:jr,ActionBar:Kr,AddonPanel:Ur,Badge:Yr,Bar:qr,Blockquote:wr,Button:Gr,ClipboardCode:Vr,Code:zr,DL:Xr,Div:$r,DocumentWrapper:Zr,EmptyTabContent:Jr,ErrorFormatter:Qr,FlexBar:et,Form:rt,H1:tt,H2:ot,H3:nt,H4:lt,H5:at,H6:it,HR:st,IconButton:dt,IconButtonSkeleton:ct,Icons:ut,Img:pt,LI:bt,Link:gt,ListItem:mt,Loader:ft,Modal:yt,OL:St,P:Et,Placeholder:_t,Pre:Tt,ResetWrapper:Ct,ScrollArea:ht,Separator:x,Spaced:Ot,Span:kt,StorybookIcon:Rt,StorybookLogo:Bt,Symbols:xt,SyntaxHighlighter:At,TT:Dt,TabBar:It,TabButton:vt,TabWrapper:Ft,Table:Lt,Tabs:Pt,TabsState:Nt,TooltipLinkList:Mt,TooltipMessage:A,TooltipNote:Wt,UL:Ht,WithTooltip:D,WithTooltipPure:jt,Zoom:Kt,codeCommon:Ut,components:Yt,createCopyToClipboardFunction:qt,getStoryHref:wt,icons:Gt,interleaveSeparators:Vt,nameSpaceClassNames:zt,resetComponents:Xt,withReset:$t}=__STORYBOOK_COMPONENTS__;n();l();a();var ro=__STORYBOOK_THEMING__,{CacheProvider:to,ClassNames:oo,Global:no,ThemeProvider:lo,background:ao,color:io,convert:so,create:co,createCache:uo,createGlobal:po,createReset:bo,css:go,darken:mo,ensure:fo,ignoreSsrWarning:yo,isPropValid:So,jsx:Eo,keyframes:_o,lighten:To,styled:C,themes:Co,typography:ho,useTheme:Oo,withTheme:ko}=__STORYBOOK_THEMING__;var i=q(L(),1),P="storybook-addon-badges",Fe=P,Le="Storybook Addon Badges",Pe="badgesConfig",N="badges",c={DEFAULT:"default",BETA:"beta",STABLE:"stable",NEEDS_REVISION:"needs-revision",OBSOLETE:"obsolete",EXPERIMENTAL:"experimental",DEPRECATED:"deprecated"},d={backgroundColor:"#EDEFF5",borderColor:"#474D66",borderRadius:"3px",borderStyle:"solid",borderWidth:"1px",color:"#474D66",fontFamily:"inherit",fontSize:"0.625rem",fontWeight:"bold",lineHeight:"1",paddingBlock:"2px",paddingInline:"5px",textTransform:"uppercase"},M={badges:{[c.DEFAULT]:{title:"Badge"},[c.BETA]:{title:"Beta",styles:{backgroundColor:"#D6E0FF",borderColor:"#2952CC",color:"#2952CC"}},[c.STABLE]:{title:"Stable",styles:{backgroundColor:"#DCF2EA",borderColor:"#317159",color:"#317159"}},[c.NEEDS_REVISION]:{title:"Needs Revision",styles:{backgroundColor:"#FFEFD2",borderColor:"#66460D",color:"#66460D"}},[c.OBSOLETE]:{title:"Obsolete",styles:{backgroundColor:"#F9DADA",borderColor:"#7D2828",color:"#7D2828"}},[c.EXPERIMENTAL]:{title:"Experimental",styles:{backgroundColor:"#E7E4F9",borderColor:"#6E62B6",color:"#6E62B6"}},[c.DEPRECATED]:{title:"Deprecated",styles:{backgroundColor:"#F8E3DA",borderColor:"#85462B",color:"#85462B"}}}},Ne=M.badges[c.DEFAULT],Me=["backgroundColor","borderColor","borderRadius","borderStyle","borderWidth","color","fontFamily","fontSize","fontWeight","lineHeight","paddingBlock","paddingInline","textTransform"],We=e=>{if(typeof e=="string")return!0;if(typeof e=="object"&&e!=null){let r=Object.keys(e).length>0,t="desc"in e,o="title"in e,s="links"in e&&Array.isArray(e.links);return!r||t||o||s}return!1},He=e=>{if(typeof e=="object"&&e!=null){if(Object.keys(e).length>0)return!0;for(let r of Me)if(r in e&&(typeof e[r]=="string"||typeof e[r]=="number"))return!0}return!1},je=e=>{if(typeof e!="object"||e==null)return!1;let r=Object.keys(e).length>0,t="title"in e&&typeof e.title=="string",o="tooltip"in e&&We(e.tooltip),s="styles"in e&&He(e.styles);return!r||s||t||o},Ke=e=>e.badges!=null&&!je(e.badges),Ue=({children:e,tooltip:r})=>{let t=(0,i.jsx)(A,{...typeof r=="string"?{desc:r}:r});return(0,i.jsx)(D,{tooltip:t,children:e})},Ye=C.div(({config:{styles:e}})=>({backgroundColor:e?.backgroundColor??d.backgroundColor,borderColor:e?.borderColor??d.borderColor,borderRadius:e?.borderRadius??d.borderRadius,borderStyle:e?.borderStyle??d.borderStyle,borderWidth:e?.borderWidth??d.borderWidth,color:e?.color??d.color,display:"block",fontFamily:e?.fontFamily??d.fontFamily,fontSize:e?.fontSize??d.fontSize,fontWeight:e?.fontWeight??d.fontWeight,lineHeight:e?.lineHeight??d.lineHeight,paddingBlock:e?.paddingBlock??d.paddingBlock,paddingInline:e?.paddingInline??d.paddingInline,textTransform:e?.textTransform??d.textTransform})),qe=({badge:e})=>{let r=E().getCurrentParameter(Pe)||{},t={badges:{...M.badges,...Ke(r)?r.badges:r}}.badges[e]??Ne,o=()=>(0,i.jsx)(Ye,{config:t,children:t.title});return t.tooltip?(0,i.jsx)(Ue,{tooltip:t.tooltip,children:(0,i.jsx)(o,{})}):(0,i.jsx)(o,{})},we=C.div(({theme:e})=>({alignItems:"center",display:"flex",gap:e.layoutMargin,paddingInline:e.layoutMargin/2})),Ge=({badges:e})=>e.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(we,{children:e.map(r=>(0,i.jsx)(qe,{badge:r},r))})]}):null,Ve=()=>{let e=E().getCurrentParameter(N)??[];return(0,i.jsx)(Ge,{badges:e})},ze=_(Ve);S.register(P,e=>{S.add(Fe,{title:Le,type:R.TOOL,paramKey:N,match:()=>!0,render:()=>(0,i.jsx)(ze,{})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
