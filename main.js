/**************************************************************
 **************************************************************
 * Days Since Logic
 **************************************************************
 **************************************************************/



/******************
 * HTML Handling
 ******************/
function resetRow(keyVal) {
  let date = localStorage.getItem(keyVal);  // 10-20-2019

}

function getResetBtn(key) {
  return '<td><input type="button" onclick="resetRow('+key+')"></td>';
}

function daysSince(key) {

  return "<td>" + "";
}

/**
 * Gets the days since older date from newer date.
 * @param {Date} date1: older date, string to be parsed, 2020-10-01
 */
function diffDate(date) {
  // current time - time inputed
  return floor((new Date()-date) / (24 * 60 * 60 * 1000));
}

/**
 * Creates a table from the local Storage pairs
 */
function doShowAll() {
  let key = "";
  // table header
  let pairs = "<tr><th>Name</th><th>Days Since</th></tr>\n";
  // for every row in local Storage, add html row to pairs in html
  for (let i=0;i<=localStorage.length-1;i++) {
    key = localStorage.key(i);
    // add a row: key, value, reset btn
    pairs += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+'</td>'+daysSince(key) + getResetBtn(key)+'</tr>\n';
  }
  if (pairs == "<tr><th>Name</th><th>Days Since</th></tr>\n") {
    pairs += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>"+getResetBtn(key)+"</tr>\n";
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
  try {
    localStorage.setItem(pname, new Date(pdate));
  } catch (error) {
    console.error("Date Inputed to Form was not correct \n MM/DD/YYYY or MM-DD-YYYY or YYYY-MM-DD");
  }
  doShowAll();
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
  for(let i=0;i<localStorage.length;i++) {
    localStorage.removeItem(localStorage.key(i));
  }
  doShowAll();
}
// end