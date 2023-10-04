//функция 1
function isValidLength(str, number) {
  return str.length <= number;
}
isValidLength('fff',4);

//функция 2
function palindrom(stro){
  const normalString = stro.replaceAll(' ','').toUpperCase();
  let strnew ='';

  for(let i = normalString.length-1; i>0; normalString.length--){
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
