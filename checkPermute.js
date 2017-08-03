'use strict';

function checkPermutations(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  var chars1 = {};
  var chars2 = {};
  for(var i = 0; i < str1.length; i++){
    chars1.string = chars1[str1[i]];
  }
  for(var j = 0; j < str2.length; j++){
    chars2.string = chars2[str2[j]];
  }
  if(chars1.string !== chars2.string){
    return false;
  }
  return true;
}


checkPermutations('motb', 'botmx');//true
