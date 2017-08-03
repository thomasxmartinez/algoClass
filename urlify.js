
'use strict';

function urlIfy(string){
  var str = string.split('');
  for(var i = 0; i < str.length; i++){
  if(str[i] === ' '){
    str[i] = '%20';
  }
  }
  return str.join('');
}

urlIfy('I have a banana');
