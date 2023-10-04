//функция 1
function strLenght(str, number) {
  return str.length <= number;
}
strLenght('fff',4);

//функция 2
function palindrom(stro){
  const normalString = stro.replaceAll(' ','').toUpperCase();
  let strnew ='';

  for(normalString.length-1; normalString.length>0; normalString.length--){
    strnew += normalString[normalString.length];
  }
  if (strnew === normalString){
    return true;
  }
  else{
    return false;
  }
}
palindrom('топот');


// функция 2

function isPalindrom(string){
  const normalString = string.replaceAll(' ','').toLowerCase();
  const reversedString = [...normalString].reverse().join('');
  return normalString === reversedString;
}
isPalindrom('Лёша на полке клопа нашёл');
