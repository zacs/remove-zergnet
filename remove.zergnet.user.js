// ==UserScript==
// @name           Remove ZergNet
// @namespace      us.z4c
// @description    Expunge all sites of ZergNet links.
// @include        http://*/*
// ==/UserScript==

// RegEx function taken from John K at https://stackoverflow.com/questions/1938294/select-div-using-wildcard-id
document['getElementsByRegex'] = function(pattern){
   var arrElements = [];   // to accumulate matching elements
   var re = new RegExp(pattern);   // the regex to match with

   function findRecursively(aNode) { // recursive function to traverse DOM
      if (!aNode)
          return;
      if (aNode.id !== undefined && aNode.id.search(re) != -1)
          arrElements.push(aNode);  // FOUND ONE!
      for (var idx in aNode.childNodes) // search children...
          findRecursively(aNode.childNodes[idx]);
   };

   findRecursively(document); // initiate recursive matching
   return arrElements; // return matching elements
};

setTimeout(function(){
    var matches = document.getElementsByRegex('.*zerg.*');
    var index;
    for (index = 0; index < matches.length; ++index) {
        console.log(matches[index]);
        matches[index].outerHTML='';
    }
},2000);
