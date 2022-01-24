function noPlaceForNumber(initialRow, initialColumn) {// this method is built to identify if a sett of number in certain cell produces any cell that has no plase

  for(var row = 1; row < 10; ++row) {// this loop is built to identify if it exists any number from any row that has no place
    for(var number = 1; number < 10; ++number){
      var foundNumber = 0;
      var placedNumber = 0;
      for(var column = 1; column < 10 && !foundNumber; ++column) {//this loop is build to look if the number is already present
        if(document.getElementById(row +'_'+ column).value == number) {//the number has been found
          foundNumber = 1;
        }
      }
      if(!foundNumber) { // the number has not been found
        for(var column = 1; column < 10 && !placedNumber ; ++column) {//this loop is build to place a temporary number
          if(!document.getElementById(row +'_'+ column).value) {// the cell is empty
            document.getElementById(row +'_'+ column).value = number;
            if(!checkNumber(row +'_'+ column, number) && identifyMinimumOptions(row, column)) { //it is a propper number and placement does not produce no options cells
              placedNumber = 1;
            } else {// it means that the number is not a propper one for this cell or the placement produces no options cells
              document.getElementById(row +'_'+ column).value = "";
              continue;
            }
          } else {// it means that the cell is not empty
            continue;
          }
        }
        if(!placedNumber) {// has not found any place for this Number or is taking to long
          for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers if ahs not found a place for the number
            for (var j = 1; j < 10; ++j) {
              if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j)  && (i != initialRow || j != initialColumn)) {
                document.getElementById(i +'_'+ j).value = "";
              }
            }
          }
          return 1; // end of script because there is one number that cannot be placed in a row
        }
      }
    }
    if(row == 9) {// after checking all the rows
      for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers at the very end
        for (var j = 1; j < 10; ++j) {
          if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j) && (i != initialRow || j != initialColumn)) {
            document.getElementById(i +'_'+ j).value = '';
          }
        }
      }
    }
  }
  for(var column = 1; column < 10; ++column) {// this loop is built to identify if it exists any number from any column that has no plase
    for(var number = 1; number < 10; ++number){
      var foundNumber = 0;
      var placedNumber = 0;
      for(var row = 1; row < 10 && !foundNumber; ++row) {//this loop is build to look if the number is already present
        if(document.getElementById(row +'_'+ column).value == number) {//the number has been found
          foundNumber = 1;
        }
      }
      if(!foundNumber) { // the number has not been found
        for(var row = 1; row < 10 && !placedNumber ; ++row) {//this loop is build to place a temporary number
          if(!document.getElementById(row +'_'+ column).value) {// the cell is empty
            document.getElementById(row +'_'+ column).value = number;
            if(!checkNumber(row +'_'+ column, number) && identifyMinimumOptions(row, column)) { //it is a propper number and placement does not produce no options cells
              placedNumber = 1;
            } else {//it means that the number is not a propper one for this cell or the placement produces no options cells
              document.getElementById(row +'_'+ column).value = "";
              continue;
            }
          } else {// it means that the cell is not empty
            continue;
          }
        }
        if(!placedNumber) {// has not found any place for this Number
          for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers
            for (var j = 1; j < 10; ++j) {
              if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j)  && (i != initialRow || j != initialColumn)) {
                document.getElementById(i +'_'+ j).value = "";
              }
            }
          }
          return 1;// and of script because there is one number that cannot be placed in a cplumn
        }
      }
    }
    if(column == 9) {// after checking all the r
      for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers at the very end
        for (var j = 1; j < 10; ++j) {
          if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j) && (i != initialRow || j != initialColumn)) {
            document.getElementById(i +'_'+ j).value = '';
          }
        }
      }
    }
  }
  for(var param = 65; param < 74; ++param) {// this loop is built to identify if it exists any number on any 3*3 matrix that has no plase
    for(var number = 1; number < 10; ++number){
      var foundNumber = 0;
      var placedNumber = 0;
      for(var row = 1; row < 10 && !foundNumber; ++row) {//this loop is build to look if the number is already present in the 3*3 matrix
        for (var column = 1; column < 10 && !foundNumber; ++column) {
          if (param == document.getElementById(row +'param'+ column).value ) {//look only for cell in the same 3*3 matrix
            if(document.getElementById(row +'_'+ column).value == number) {//the number has been found
              foundNumber = 1;
            }
          }
        }
      }
      if(!foundNumber) { // the number has not been found
        for(var row = 1; row < 10 && !placedNumber ; ++row) {//this loop is build to place a temporary number
          for(var column = 1; column < 10  && !placedNumber; ++column) {
            if (param == document.getElementById(row +'param'+ column).value ) {//look only for cell in the same 3*3 matrix
              if(!document.getElementById(row +'_'+ column).value) {// the cell is empty
                document.getElementById(row +'_'+ column).value = number;
                if(!checkNumber(row +'_'+ column, number) && identifyMinimumOptions(row, column)) { //it is a propper number and placement does not produce no options cells
                  placedNumber = 1;
                } else {// it means that the number is not a propper one for this cell or the placement produces no options cells
                  document.getElementById(row +'_'+ column).value = "";
                  continue;
                }
              } else {// it means that the cell is not empty
                continue;
              }
            }
          }
        }
        if(!placedNumber) {// has not found any place for this Number
          for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers
            for (var j = 1; j < 10; ++j) {
              if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j)  && (i != initialRow || j != initialColumn)) {
                document.getElementById(i +'_'+ j).value = "";
              }
            }
          }
          return 1;// end of script because there is one number that cannot be placed in a row
        }
      }
    if(param == 73) {// after checking all the 3*3 matrics
      for(var i = 1; i < 10; ++i) {// this loop is built to delete all temporary placed numbers at the very end
        for (var j = 1; j < 10; ++j) {
          if(!document.getElementById("filledCellsList").value.includes(i +'_'+ j) && (i != initialRow || j != initialColumn)) {
            document.getElementById(i +'_'+ j).value = '';
          }
        }
      }
    }
  }
}
 return 0;
}
