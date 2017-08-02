'use strict';

function isUnique(string){
  var chars = {};
  for (var i = 0; i < string.length; i++){
    if(chars[string[i]]){
      return false;
    }
    chars[string[i]] = true;
  }
  return true;
}

isUnique('abcdefgh');///true
isUnique('ijkklmnopqrs');//false
