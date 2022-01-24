function createGame () {
  var prefilledCellsNumber = document.getElementById("prefilledCellsNumber").value;
  document.getElementById("selectionCard").remove();
  document.getElementById("startButtonCard").remove();
  document.getElementById("prefilledCellsNumberCard").remove();
  if(prefilledCellsNumber < 17 || prefilledCellsNumber > 40) {
    alert("Choose a number between 17 and 40");
    location.reload();
  }

  mainCard.innerHTML += '\
      <div class="card-header" id="replayButtonCard">\
        <div class="form-floating">\
        </div>\
      </div>\
      <div class="card-header" id="gameCard">\
      <param id="filledCellsNumber" value=0>\
      <param id="filledCellsList" value="">\
      </div>';

  // next loop is creating 9 rows
  for(var i = 1; i <= 9; ++i) {
    gameCard.innerHTML += '\
      <div class="row" id="Row">\
        <div class="column" id="'+ i +'Row" >\
        </div>\
      </div>';
  }

  //next loop is creating 9 cels in each row
  for(var i = 1; i <= 9; ++i) {
    var name = i +"Row";
    var iRow = document.getElementById(name);
    for(var j = 1; j <= 9; ++j) {
      iRow.innerHTML +='\
        <input type = "Number" id="'+ i +'_'+ j +'" class="number" min="1" value="" max="9" oninput="return checkNumber(id, value);" style="background: #d1d1d1; height: 40px; width: 40px;"/>\
        <param id="'+ i +'param'+ j +'" value="0">';
    }
  }

  //next loop is changing background colors and is setting 9 boxes matrics Name (A, B, C,...)
  for(var i = 1; i <= 9; ++i) {
    for(var j = 1; j <= 9; ++j) {
      document.getElementById(i +'_'+ j).style.color = "#0066ff";
      if(i < 4 && j < 4) {
        document.getElementById(i +'param'+ j).value = 65;
      }
      if(i < 4 && j > 3 && j < 7) {
        document.getElementById(i +'_'+ j).style.background = "#F0F3EC";
        document.getElementById(i +'param'+ j).value = 66;
      }
      if(i < 4 && j > 6 && j < 10) {
        document.getElementById(i +'param'+ j).value = 67;
      }
      if(i > 3 && i < 7 && j < 4) {
        document.getElementById(i +'_'+ j).style.background = "#F0F3EC";
        document.getElementById(i +'param'+ j).value = 68
      }
      if(i > 3 && i < 7 && j > 3 && j < 7) {
        document.getElementById(i +'param'+ j).value = 69;
      }
      if(i > 3 && i < 7 && j > 6 && j < 10) {
        document.getElementById(i +'_'+ j).style.background = "#F0F3EC";
        document.getElementById(i +'param'+ j).value = 70;
      }
      if(i > 6 && j < 4) {
        document.getElementById(i +'param'+ j).value = 71;
      }
      if(i > 6 && j > 3 && j < 7) {
        document.getElementById(i +'_'+ j).style.background = "#F0F3EC";
        document.getElementById(i +'param'+ j).value = 72;
      }
      if(i > 6 && j > 6 && j < 10) {
        document.getElementById(i +'param'+ j).value = 73;
      }
    }
  }

  // next loop is prefilling cells
  for(var prefilledCells = 0; prefilledCells < prefilledCellsNumber;) {
    var row = Math.floor(Math.random() * 9) + 1;
    var column = Math.floor(Math.random() * 9) + 1;
    if(!document.getElementById("filledCellsList").value.includes(row +'_'+ column) && setNumber(row, column)) {
      document.getElementById(row +'_'+ column).style.color = "#FF5733";
      document.getElementById(row +'_'+ column).disabled = "disabled";
      document.getElementById("filledCellsList").value += row +'_'+ column+';';
      ++prefilledCells;
      document.getElementById("filledCellsNumber").value = prefilledCells;
    } else if(!setNumber(row, column)) { // if cell does not produce a solution. it means that previous is worng. It wil be deleted
      var filledCellsList = document.getElementById("filledCellsList").value;
      var rowToDelete = filledCellsList[filledCellsList.length - 4];
      var columnToDelete = filledCellsList[filledCellsList.length - 2];
      filledCellsList = filledCellsList.substr(0, filledCellsList.length - 4);
      document.getElementById(rowToDelete +'_'+ columnToDelete).value = "";
      document.getElementById(rowToDelete +'_'+ columnToDelete).style.color = "#0066ff";
      document.getElementById(rowToDelete +'_'+ columnToDelete).disabled = "";
      document.getElementById("filledCellsList").value = filledCellsList;
      --prefilledCells;
    }
  }
  return false;
}
