function identifyMinimumOptions(initialRow, initialColumn) {
  var filledCells = document.getElementById("filledCellsNumber").value;
  if(filledCells > 80) {
    alert("I have finished");
    return false;
  }
  var minimumOptions = 9;
  var rowForMinimum = 0;
  var columnForMinimum = 0;

  //next loop is used to identify the cell with minimum options
  for(var row = 1 ; row < 10 && minimumOptions; ++row) {
    for(var column = 1; column < 10 && minimumOptions; ++column) {
      if(!document.getElementById("filledCellsList").value.includes(row +'_'+ column)  && (row != initialRow || column != initialColumn)) {
        var posibilities = 0;
        if(document.getElementById(row +'_'+ column).value != "") {//it is a blank cell
          for(var value = 1; value < 10; ++value) {
            document.getElementById(row +'_'+ column).value = value;
            if(!checkNumber(row +'_'+ column, value)) {// a valid number
              ++posibilities;
            }
            document.getElementById(row +'_'+ column).value = "";
          }
          if(posibilities < minimumOptions) {
            minimumOptions = posibilities;
            rowForMinimum = row;
            columnForMinimum = column;
          }
        }
      }
    }
  }
  return minimumOptions;
}
