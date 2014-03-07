// ==UserScript==
// @name           Remove ZergNet
// @namespace      us.z4c
// @description    Expunge all sites of ZergNet links.
// @include        http://*/*
// ==/UserScript==

setTimeout(function(){
    // This previousSibling is _usually_ the "Related Content" text. Doesn't always work though.
    document.getElementById('zerglayout').parentNode.previousSibling.outerHTML=''
    document.getElementById('zerglayout').parentNode.outerHTML=''
},2000);
