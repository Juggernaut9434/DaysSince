// Main.js
// Author: Michael Mathews 2020
// logic for index.html


/**************************************************************
 **************************************************************
 * Days Since Logic
 **************************************************************
 **************************************************************/



/******************
 * HTML Handling
 ******************/

// wrapper function for html parsed resetRow()
function getResetBtn() {
  return '<td><input type="button" onclick="resetRow(this)" value="Reset">\
          <input type="button" onclick="removeFromTable(this)" value="Remove"</td>';
}

// wrapper function for html parsed daysDiff(Date)
function daysSince(key) {
  // the localStorage stores everything as a string, must parse into Date
  let date = Date.parse(localStorage.getItem(key));  // 10-20-2019
  if(date == "Invalid Date")
  {
    return "<td>-1</td>";
  }
  return "<td>" + diffDate(date) +  "</td>";
}

function resetRow(element) {
  //          input   > td        > tr       > tbody    > table
  let table = element.parentNode.parentNode.parentNode.parentNode
  // using x.rowIndex, to get current row then
  let keyVal = table.rows[1].cells[0].innerHTML;
  localStorage.setItem(keyVal, new Date());  // 10-20-2019
  doShowAll(); // update table
}

function removeFromTable(element) {
  //          input   > td        > tr       > tbody    > table
  let table = element.parentNode.parentNode.parentNode.parentNode
  let keyVal = table.rows[1].cells[0].innerHTML;
  localStorage.removeItem(keyVal);
  doShowAll(); // update table
}


/**
 * Gets the days since older date from newer date.
 * @param {Date} date1: older date, string to be parsed, 2020-10-01
 */
function diffDate(date) {
  // current time - time inputed
  return Math.floor((new Date()-date) / (24 * 60 * 60 * 1000));
}

/**
 * Creates a table from the local Storage pairs
 * if local storage is empty then display empty
 * Display reset button that resets the date to present
 */
function doShowAll() {
    // table header
  let tHead = "<tr><th>Name</th><th>Days Since</th><th></th></tr>\n"
  let key = "";
  let pairs = tHead;
  // for every row in local Storage, add html row to pairs in html
  for (let i=0;i<=localStorage.length-1;i++) {
    key = localStorage.key(i);
    // add a row: key, value, reset btn
    pairs += "<tr><td>"+key+"</td>\n"+daysSince(key)+ getResetBtn()+'</tr>\n';
  }
  // if table is empty, display empty
  if (pairs == tHead) {
    pairs += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>"+getResetBtn()+"</tr>\n";
    console.log("empty table printed");
  }
  document.getElementById('pairs').innerHTML = pairs;
}

/**************************************************************
 **************************************************************
 * Local Storage Logic
 **************************************************************
 **************************************************************/

function setLineItem() {
  let pname = document.forms.formElement.name.value;
  let pdate = document.forms.formElement.date.value;
  console.log(pdate);
  // if invalid date, don't affect table.
  if(new Date(pdate) == "Invalid Date")
  {
    return;
  }
  localStorage.setItem(pname, new Date(pdate));
  doShowAll();  // update table
}

function getLineItem() {
  let name = document.forms.formsElement.name.value;
  document.forms.formElement.date.value = localStorage.getItem(name);
}

function removeLineItem() {
  let name = document.forms.formsElement.name.value;
  document.forms.formElement.date.value = localStorage.removeItem(name);
  doShowAll();
}

function clearStorage() {
  // ask to confirm to clear the table. returns boolean
  if (!confirm('Are you sure you want to clear this table?'))
    return;
  for(let i=0;i<localStorage.length;i++) {
    localStorage.removeItem(localStorage.key(i));
  }
  doShowAll();
}
// end