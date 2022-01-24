function checkNumber (elem, value) {
  var row = 1 * elem[0];
  var column = 1 * elem[2];

  //checking the row
  for(var x = 1; x < 10; ++x) {
    if(x != column && document.getElementById(row +'_'+ x).value == value){
      document.getElementById(elem).value = "";
      return 1;
    }
  }

  //checking the column
  for(var x = 1; x < 10; ++x) {
    if(x != row && document.getElementById(x +'_'+ column).value == value){
      document.getElementById(elem).value = "";
      return 2;
    }
  }

  //checking the 3x3 matrix
  var param = document.getElementById(row +'param'+ column).value;
  for(var x = 1; x < 10; ++x) {
    for(var y = 1; y < 10; ++y) {
      if(param == document.getElementById(x +'param'+ y).value && elem != x +'_'+ y && document.getElementById(x +'_'+ y).value == value) {
        document.getElementById(elem).value = "";
        return 3;
      }
    }
  }
  return 0;
}
