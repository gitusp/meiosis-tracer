var meiosisTracer=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.rowsId="tracerRows",t.colsId="tracerCols",t.streamContainerId="tracerStreamContainer",t.settingsContainerId="tracerSettingsContainer",t.hideTracerId="tracerHide",t.showTracerId="tracerShow",t.autoId="traceAutoSend",t.streamId=function(e){return"tracerStreamBox_ "+e},t.hiddenStreamId=function(e){return"tracerStreamBoxHidden_"+e},t.hideStreamId=function(e){return"tracerStreamHide_"+e},t.showStreamId=function(e){return"tracerStreamShow_"+e},t.modelId=function(e){return"tracerModel_"+e},t.sliderId=function(e){return"tracerSlider_"+e},t.stepBackId=function(e){return"tracerStepBack_"+e},t.stepForwardId=function(e){return"tracerStepForward_"+e},t.sliderValueId=function(e){return"tracerSliderValue_"+e},t.sendId=function(e){return"tracerSend_"+e},t.resetId=function(e){return"tracerReset_"+e},t.histId=function(e){return"tracerAccumulateHistory_"+e}},function(e,t,n){"use strict";var r=n(2);e.exports=r.meiosisTracer},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.meiosisTracer=void 0;var r=n(3),i=n(4);t.meiosisTracer=function(e){if(null!=e.streams&&(0,r.trace)(e),null!=e.selector)return(0,i.tracer)(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.trace=function(e){var t=e.streams,n=void 0===t?[]:t,r=e.stringify,i=void 0===r?function(e){return JSON.stringify(e,null,4)}:r,o=e.parse,d=void 0===o?function(e){return JSON.parse(e)}:o;if(window&&window.__MEIOSIS_TRACER_GLOBAL_HOOK__){for(var a=[],u=!1,l=[],c=0,s=n.length;c<s;c++){var m="Stream "+c;n[c].stream?(n[c].label=n[c].label||m,l.push(n[c])):l.push({stream:n[c],label:m})}l.forEach(function(e,t){e.stream.map(function(e){var n={type:"MEIOSIS_STREAM_VALUE",index:t,value:i(e)};u?window.postMessage(n,"*"):a.push(n)})}),window.addEventListener("message",function(e){if("MEIOSIS_TRACER_INIT"===e.data.type){var t=[];l.forEach(function(e){var n={};Object.keys(e).forEach(function(t){"stream"!==t&&(n[t]=e[t])}),t.push(n)}),window.postMessage({type:"MEIOSIS_STREAM_OPTIONS",value:t},"*"),u=!0,a.forEach(function(e){return window.postMessage(e,"*")}),a.length=0}else if("MEIOSIS_TRIGGER_STREAM_VALUE"===e.data.type){var n=e.data,r=n.index,i=n.value;l[r].stream(d(i))}}),window.postMessage({type:"MEIOSIS_PING"},"*")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tracer=void 0;var r=n(5),i=n(6),o=n(7),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));window.__MEIOSIS_TRACER_GLOBAL_HOOK__=!0;t.tracer=function(e){var t=e.selector,n=e.sendTracerInit,a=e.triggerStreamValue,u=e.direction,l=void 0===u?"column":u,c=e.rows,s=void 0===c?15:c,m=e.cols,v=void 0===m?50:m,I=e.autoSend,f=void 0===I||I,p=document.querySelector(t);if(p){var y=[],g=[],h=null;null==n&&(n=function(){window.postMessage({type:"MEIOSIS_TRACER_INIT"},"*")}),null==a&&(a=function(e,t){window.postMessage({type:"MEIOSIS_TRIGGER_STREAM_VALUE",index:e,value:t},"*")});var w=function(e){var t={onHideTracer:function(){var e=document.getElementById(d.streamContainerId);h=e.style,e.style="display:none",document.getElementById(d.settingsContainerId).style="display:none",document.getElementById(d.showTracerId).style=""},onShowTracer:function(){document.getElementById(d.streamContainerId).style=h,document.getElementById(d.settingsContainerId).style="",document.getElementById(d.showTracerId).style="display:none"},onRowsColsChange:function(t,n){for(var r=0;r<e.length;r++){var i=document.getElementById(d.modelId(r));i.rows=t,i.cols=n}},onDirectionChange:function(e){document.getElementById(d.streamContainerId).style="display:flex;flex-direction:"+e},onAutoChange:function(e){f=e}},n=document.createElement("div");p.append(n),(0,o.settingsView)({element:n,listeners:t,direction:l,rows:s,cols:v,autoSend:f});var u=document.createElement("div");u.id=d.streamContainerId,u.style="display:flex;flex-direction:column",p.append(u);for(var c=function(e,t){f&&(g[e]=!1,document.getElementById(d.histId(e)).checked=!1,a(e,t))},m=function(t){var n=e[t],o=n.label,d=n.hist,l=n.hide;y.push({history:[],value:-1}),g.push(!1!==d);var m={onSliderChange:function(e){var n=y[t],r=n.history[e];n.value=e,(0,i.updateView)({index:t,model:r,value:e}),c(t,r)},onStepBack:function(){var e=y[t];e.value=e.value-1;var n=e.history[e.value];(0,i.updateView)({index:t,model:n,value:e.value}),c(t,n)},onStepForward:function(){var e=y[t];e.value=e.value+1;var n=e.history[e.value];(0,i.updateView)({index:t,model:n,value:e.value}),c(t,n)},onSend:function(e){a(t,e)},onReset:function(){var e=y[t];e.history.length=0,e.value=-1,(0,i.updateView)({index:t,model:"",value:e.value,max:e.value})},onHistChange:function(e,t){g[e]=t}},I=document.createElement("div");I.style="flex-grow:1",u.append(I),(0,r.streamView)({element:I,index:t,listeners:m,label:o,rows:s,cols:v,hist:d,hide:l})},I=0;I<e.length;I++)m(I);(0,o.initializeResizeChangeDirection)(t,l)},E=function(e,t){if(g[e]){var n=y[e];n.history.length>0&&(n.history.length=n.value+1),n.history.push(t),n.value=n.history.length-1,(0,i.updateView)({index:e,model:t,value:n.value,max:n.history.length-1})}};return window.addEventListener("message",function(e){"MEIOSIS_STREAM_OPTIONS"===e.data.type?w(e.data.value):"MEIOSIS_STREAM_VALUE"===e.data.type&&E(e.data.index,e.data.value)}),n(),{receiveStreamOptions:w,receiveStreamValue:E,reset:function(){return null}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.streamView=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));t.streamView=function(e){var t=e.element,n=e.index,i=e.listeners,o=e.label,d=void 0===o?"":o,a=e.rows,u=e.cols,l=e.hist,c=void 0===l||l,s=e.hide,m=void 0!==s&&s,v="padding:8px;border:1px solid gray";t.innerHTML="<div id='"+r.streamId(n)+"' style='"+v+"'><div><span>"+d+" </span><label title='Toggle accumulate history'><input id='"+r.histId(n)+"' type='checkbox' "+(c?"checked":"")+" /> Hist </label><button id='"+r.hideStreamId(n)+"'>Hide</button></div><textarea id='"+r.modelId(n)+"' rows='"+a+"' cols='"+u+"'></textarea><div><input id='"+r.sliderId(n)+"' type='range' min='0' max='0' value='0' style='width: 100%' /><button id='"+r.stepBackId(n)+"'>&lt</button> <button id='"+r.stepForwardId(n)+"'>&gt</button> <span id='"+r.sliderValueId(n)+"'>-1</span> <button id='"+r.sendId(n)+"'>Send</button> <button id='"+r.resetId(n)+"'>Reset</button> </div></div><div id='"+r.hiddenStreamId(n)+"' style='display:none'><span>"+d+" </span><button id='"+r.showStreamId(n)+"'>Show</button></div>",document.getElementById(r.sliderId(n)).addEventListener("input",function(e){i.onSliderChange(parseInt(e.target.value,10))});var I=document.getElementById(r.stepBackId(n));I.addEventListener("click",function(e){i.onStepBack()}),I.disabled=!0;var f=document.getElementById(r.stepForwardId(n));f.addEventListener("click",function(e){i.onStepForward()}),f.disabled=!0,document.getElementById(r.sendId(n)).addEventListener("click",function(e){i.onSend(document.getElementById(r.modelId(n)).value)}),document.getElementById(r.resetId(n)).addEventListener("click",function(e){i.onReset()});var p=function(e){document.getElementById(r.streamId(e)).style="display:none",document.getElementById(r.hiddenStreamId(e)).style=v};document.getElementById(r.hideStreamId(n)).addEventListener("click",function(e){return p(n)}),document.getElementById(r.showStreamId(n)).addEventListener("click",function(e){document.getElementById(r.hiddenStreamId(n)).style="display:none",document.getElementById(r.streamId(n)).style=v}),document.getElementById(r.histId(n)).addEventListener("change",function(e){i.onHistChange(n,e.target.checked)}),m&&p(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateView=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));t.updateView=function(e){var t=e.index,n=e.model,i=e.value,o=e.max;document.getElementById(r.modelId(t)).value=n,null!=o&&(document.getElementById(r.sliderId(t)).max=o),document.getElementById(r.sliderId(t)).value=i,document.getElementById(r.sliderValueId(t)).innerHTML=i,document.getElementById(r.stepBackId(t)).disabled=i<=0,document.getElementById(r.stepForwardId(t)).disabled=i==document.getElementById(r.sliderId(t)).max}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeResizeChangeDirection=t.settingsView=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));t.settingsView=function(e){var t=e.element,n=e.listeners,i=e.direction,o=e.rows,d=e.cols,a=e.autoSend;t.innerHTML="<div id='"+r.settingsContainerId+"'><label title='Align in a row'><input type='radio' name='direction' value='row' "+("row"===i?"checked":"")+" />Row </label><label title='Align in a column'><input type='radio' name='direction' value='column' "+("column"===i?"checked":"")+" />Col </label><label title='Toggle auto-send'><input id='"+r.autoId+"' type='checkbox' "+(a?"checked":"")+" />Auto </label> <input title='Number of rows' id='"+r.rowsId+"' type='text' size='2' value='"+o+"'/><span> &times; </span> <input title='Number of columns' id='"+r.colsId+"' type='text' size='2' value='"+d+"'/><button id='"+r.hideTracerId+"'>Hide</button></div><button id='"+r.showTracerId+"' style='display:none'>Show</button>",document.getElementById(r.hideTracerId).addEventListener("click",function(e){n.onHideTracer()}),document.getElementById(r.showTracerId).addEventListener("click",function(e){n.onShowTracer()}),document.getElementById(r.rowsId).addEventListener("input",function(e){n.onRowsColsChange(parseInt(e.target.value,10),parseInt(document.getElementById(r.colsId).value,10))}),document.getElementById(r.colsId).addEventListener("input",function(e){n.onRowsColsChange(parseInt(document.getElementById(r.rowsId).value,10),parseInt(e.target.value,10))});for(var u=document.querySelectorAll("input[name='direction']"),l=0,c=u.length;l<c;l++)u[l].addEventListener("change",function(e){e.target.checked&&n.onDirectionChange(e.target.value)});document.getElementById(r.autoId).addEventListener("change",function(e){n.onAutoChange(e.target.checked)})},t.initializeResizeChangeDirection=function(e,t){var n=function(){for(var t=window.innerWidth>window.innerHeight?"row":"column",n=document.querySelectorAll("input[name='direction']"),r=0,i=n.length;r<i;r++)n[r].checked=n[r].value===t;e.onDirectionChange(t)};"auto"===t&&window.addEventListener("resize",n),"row"===t||"column"===t?e.onDirectionChange(t):n()}}]);
//# sourceMappingURL=meiosis-tracer.js.map