/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var K=Object.create;var T=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty;var _=l=>T(l,"__esModule",{value:!0});var te=(l,a)=>{_(l);for(var s in a)T(l,s,{get:a[s],enumerable:!0})},ne=(l,a,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of Z(a))!ee.call(l,e)&&e!=="default"&&T(l,e,{get:()=>a[e],enumerable:!(s=Y(a,e))||s.enumerable});return l},re=l=>ne(_(T(l!=null?K(M(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);te(exports,{default:()=>A});var $=!1,G=[{id:"smarter-asterisk-bold",name:"Smarter Bold",before:"**",after:"**"},{id:"smarter-underscore-bold",name:"Smarter Underscore Bold",before:"__",after:"__"},{id:"smarter-asterisk-italics",name:"Smarter Italics",before:"*",after:"*"},{id:"smarter-underscore-italics",name:"Smarter Underscore Italics",before:"_",after:"_"},{id:"smarter-comments",name:"Smarter Comments",before:"%%",after:"%%"},{id:"smarter-html-comments",name:"Smarter HTML Comments",before:"<!--",after:"-->"},{id:"smarter-inline-code",name:"Smarter Code (Inline/Fenced)",before:"`",after:"`"},{id:"smarter-highlight",name:"Smarter Highlight",before:"==",after:"=="},{id:"smarter-strikethrough",name:"Smarter Strikethrough",before:"~~",after:"~~"},{id:"smarter-wikilink",name:"Smarter Wikilink (Internal Link)",before:"[[",after:"]]"},{id:"smarter-wikilink-heading",name:"Smarter Wikilink to Heading",before:"[[##",after:"]]"},{id:"smarter-md-link",name:"Smarter Markdown Link/Image",before:"[",after:"]()"},{id:"smarter-math",name:"Smarter Mathjax",before:"$",after:"$"},{id:"smarter-callout-label",name:"Smarter Callout Label",before:"> [!",after:`]
> `},{id:"smarter-quotation-marks",name:"Smarter Quotation Mark",before:'"',after:'"'},{id:"smarter-round-brackets",name:"Smarter Round Brackets",before:"(",after:")"},{id:"smarter-square-brackets",name:"Smarter Square Brackets",before:"[",after:"]"},{id:"smarter-curly-brackets",name:"Smarter Curly Brackets",before:"{",after:"}"},{id:"smarter-delete",name:"Smarter Delete Text",before:"delete",after:""},{id:"smarter-upper-lower",name:"Smarter Upper/Lower Case",before:"upper-lower",after:""},{id:"smarter-insert-new-line",name:"Smarter Insert New Line",before:"new-line",after:""}],H=[{id:"smarter-delete-current-file",name:"Smarter Delete Current Note"},{id:"smarter-copy-path",name:"Smarter Copy Relative/Absolute Path"},{id:"smarter-copy-file-name",name:"Smarter Copy File Name"}],F=/^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))$/,X=['"',"(","[","###### ","##### ","#### ","### ","## ","# ","- [ ] ","- [x] ","- ",">"," ",`
`,"	"],k=['"',")","](","]",":",`
`,"	"," "],j=[["#",""],["[[","]]"],["","]]"],["[[",""],['"','"'],["'","'"],["(",")"],["[","] "],["$",""],["","\u20AC"]],z=["png","jpg","jpeg","gif","tiff"];var E=re(require("obsidian")),A=class extends E.Plugin{async onload(){G.forEach(a=>{let{id:s,name:e,before:f,after:b}=a;this.addCommand({id:s,name:e,editorCallback:S=>this.expandAndWrap(f,b,S)})}),H.forEach(a=>{let{id:s,name:e}=a;this.addCommand({id:s,name:e,callback:()=>this.otherCommands(s)})}),console.log("Smarter MD Hotkeys loaded.")}async onunload(){console.log("Smarter MD Hotkeys unloaded.")}async otherCommands(a){let s=this.app.workspace.getActiveFile();if(!!s){if(a==="smarter-delete-current-file"){let e=f=>this.app.commands.executeCommandById(f);e("app:delete-file"),e("app:go-back"),e("app:go-back"),new E.Notice('"'+s.name+'" deleted.')}else if(a==="smarter-copy-path"){let e,f=s.path;if(await navigator.clipboard.readText()===f){let S=this.app.vault.adapter.basePath+"/"+f;await navigator.clipboard.writeText(S),e=`Absolute path copied: 
`+S}else await navigator.clipboard.writeText(f),e=`Relative path copied: 
`+f;new E.Notice(e,7e3)}else if(a==="smarter-copy-file-name"){let e=await navigator.clipboard.readText(),f=s.basename;e===f&&(f+="."+s.extension),await navigator.clipboard.writeText(f),new E.Notice(`File Name copied: 
`+f)}}}async expandAndWrap(a,s,e){function f(t,n){let r=x(),i=y();if(r-t.length<0||i-n.length>C())return!1;let m=e.getRange(c(r-t.length),c(r)),o=e.getRange(c(i),c(i+n.length));return m===t&&o===n}let b=()=>["`","%%","<!--","$"].includes(a),S=()=>f(a,s);function P(t,n){if(t.line===0||n.line===e.lastLine())return!1;let r=e.getLine(t.line-1),i=e.getLine(n.line+1);return r.startsWith(a)&&i.startsWith(s)}let D=()=>!e.somethingSelected(),L=()=>e.getSelection().includes(`
`),C=()=>e.getValue().length,x=()=>e.posToOffset(e.getCursor("from")),y=()=>e.posToOffset(e.getCursor("to")),c=t=>(t<0&&(t=0),t>C()&&(t=C()),e.offsetToPos(t));function I(t){if(t<e.lastLine()){let n={line:t,ch:0},r={line:t+1,ch:0};e.replaceRange("",n,r)}else{let n={line:t-1,ch:e.getLine(t).length},r={line:t,ch:e.getLine(t).length};e.replaceRange("",n,r)}}function d(t,n){if(!$)return;let r="";n&&(r=': "'+e.getSelection()+'"'),t.startsWith(`
`)||(t="- "+t),console.log(t+r)}function W(t){if(S()&&D())return{anchor:t,head:t};let n,r;if(a!=="`"){if(e.cm instanceof window.CodeMirror)return e.cm.findWordAt(t);let i=e.cm.state.wordAt(e.posToOffset(t));if(!i)return{anchor:t,head:t};r=c(i.from),n=c(i.to)}if(a==="`"||a==="$"){d("Getting Code under Cursor");let i=e.posToOffset(t),m,o,[u,g,B,N]=[0,0,!1,!1];for(;!/\s/.test(o)&&!N;)o=e.getRange(c(i-(u+1)),c(i-u)),u++,i-(u-1)==0&&(N=!0);for(;!/\s/.test(m)&&!B;)m=e.getRange(c(i+g),c(i+g+1)),g++,i+(g-1)===C()&&(B=!0);r=c(i-(u-1)),n=c(i+(g-1))}return{anchor:r,head:n}}function R(){let t=k,n=X;b()?(n=[a],t=[s]):s&&(n.push(a),t.push(s));let r=e.getSelection(),i=x();d("before trim",!0);let m=!1;for(;!m;){let u=0;n.forEach(g=>{r.startsWith(g)?(r=r.slice(g.length),i+=g.length):u++}),(u===n.length||!r.length)&&(m=!0)}for(m=!1;!m;){let u=0;t.forEach(g=>{r.endsWith(g)?r=r.slice(0,-g.length):u++}),(u===t.length||!r.length)&&(m=!0)}let o=r.match(/ \^\w+$/);o&&(r=r.slice(0,-o[0].length)),e.setSelection(c(i),c(i+r.length)),d("after trim",!0)}function w(){R(),d("before expandSelection",!0);let t=e.getCursor("from"),n=e.getCursor("to"),r=W(t),i=W(n);return e.setSelection(r.anchor,i.head),d("after expandSelection",!0),R(),j.forEach(o=>{o[0]===a||o[1]===s||f(o[0],o[1])&&(r.anchor.ch-=o[0].length,i.head.ch+=o[1].length,e.setSelection(r.anchor,i.head))}),{anchor:t,head:n}}function U(t){return O.forEach(n=>{t.line===n.line&&(t.ch+=n.shift)}),t}function v(t,n,r){let i=e.getSelection(),m=x(),o=y();D()&&r==="multi"||(S()||(["%%","<!--"].includes(a)&&(i=" "+i+" ",o=o+2,h++,p++),e.replaceSelection(a+i+s),O.push({line:t.line,shift:h},{line:n.line,shift:p}),t.ch+=h,n.ch+=h),S()&&(e.setSelection(c(m-h),c(o+p)),e.replaceSelection(i),O.push({line:t.line,shift:-h},{line:n.line,shift:-p}),t.ch-=h,n.ch-=h),r==="single"&&e.setSelection(t,n))}function q(){let t=e.getCursor("from");t.ch=0;let n=e.getCursor("to");if(n.ch=e.getLine(n.line).length,a==="`"?(a="```",s="```",p=3,h=3):a==="$"&&(a="$$",s="$$",p=2,h=2),!P(t,n)&&(e.setSelection(t),e.replaceSelection(a+`
`),n.line++,e.setSelection(n),e.replaceSelection(`
`+s),a==="```")){let r=t;r.ch=3,e.setSelection(r)}P(t,n)&&(I(t.line-1),I(n.line))}async function Q(){let t=F,n=(await navigator.clipboard.readText()).trim(),r=a,i=s;if(t.test(n)){i="]("+n+")";let m=n.split(".").pop();z.includes(m)&&(r="![")}return[r,i]}function V(){if(f(" ","")){let t=e.getCursor("from"),n=e.getCursor("to");t.ch&&t.ch--,e.setSelection(t,n)}e.replaceSelection("")}function J(t,n){let r=e.getSelection();r.toUpperCase()===r?r=r.toLowerCase():r=r.toUpperCase(),e.replaceSelection(r),e.setSelection(t,n)}if(d(`
SmarterMD Hotkeys triggered
---------------------------`),a==="new-line"){e.newlineOnly();return}s==="]()"&&([a,s]=await Q());let[h,p]=[a.length,s.length],O=[];e.listSelections().forEach(t=>{if(t.anchor=U(t.anchor),t.head=U(t.head),e.setSelection(t.anchor,t.head),R(),a==="delete")d("Smart Delete"),w(),V();else if(a==="upper-lower"){d("Smart Upper/Lower Case");let{anchor:n,head:r}=w();J(n,r)}else if(L()){if(L()&&b())d("Multiline Wrap"),q();else if(L()&&!b()){let n=x(),r=e.getSelection().split(`
`);d("lines: "+r.length.toString()),r.forEach(i=>{console.log(""),e.setSelection(c(n),c(n+i.length));let{anchor:m,head:o}=w();n+=i.length+1,S()?n-=h+p:n+=h+p,v(m,o,"multi")})}}else{d("single line");let{anchor:n,head:r}=w();v(n,r,"single")}})}};