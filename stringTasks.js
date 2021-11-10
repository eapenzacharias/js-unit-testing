const stringTasks = {
  stringLength: (string) => {
    const stringCount = string.length;
    if (stringCount > 0 && stringCount <= 10) {
      return stringCount;
    }
},
reverseString: (string) =>{
  let reversedString = "";
  for(let i = string.length - 1; i >= 0; i--){
    reversedString += string[i];
  }
  return reversedString;
}
}

module.exports = stringTasks;