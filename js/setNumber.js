function setNumber(row, column) {
  for(var numberList = "123456789"; numberList.length; ) {
    var position = Math.floor(Math.random() * numberList.length);
    var number = numberList[position];
    var substr1 = numberList.substr(0, position);
    var substr2 = numberList.substr(position + 1, numberList.length);
    numberList = substr1 + substr2;//this is the list with the number removed
    document.getElementById(row +'_'+ column).value = number;
    if(!checkNumber(row +'_'+ column, number) && !noPlaceForNumber(row, column)) {
      document.getElementById(row +'_'+ column).value = number;
      return 1;
    }
 }
 document.getElementById(row +'_'+ column).value = "";
 return 0;
}
