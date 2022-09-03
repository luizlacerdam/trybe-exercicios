function hydrate(string) {
  myArray = string.split(/([0-9]+)/)
  
  if (myArray.length == 5) {
    return (parseInt(myArray[1]) + parseInt(myArray[3])) + ' copos de água';
  } else if (myArray.length == 7) {
    return (parseInt(myArray[1]) + parseInt(myArray[3]) + parseInt(myArray[5])) + ' copos de água';
  } else {
    if (myArray[1] > 1 && myArray.length == 3) {
      return myArray[1] + ' copos de água';
    } else {
      return myArray[1] + ' copo de água';
    }
  }
}
module.exports = hydrate;