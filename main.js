// change from cache to local storage
/***********************************
 * Main function
 ************************************/
function mainPlay()
{
  let object = {
    rowName: "bait",
    lastTimeSince: "09/30/2020"
  };
  
}


/*********************************
 * Days Since Logic
 *********************************/
/**
 * Gets the days since older date from newer date.
 * @param {String} date1: older date, string to be parsed, 2020-10-01
 */
function diffdate(date1) {
  let d1 = new Date(date1)
  return floor((new Date() - d1) / (24 * 60 * 60 * 1000));
}

/**********************************
 * Local Storage Logic
 */
function setLineItem() {
  let obj = {}
  let pname = document.forms.formElement.name.value;
  let pdate = document.forms.formElement.date.value;
  localStorage.setItem(pname, pdate);
}

function getLineItem() {
  let name = document.forms.formsElement.name.value;
  document.forms.formElement.date.value = localStorage.getItem(name);
}

function removeLineItem() {
  let name = document.forms.formsElement.name.value;
  document.forms.formElement.date.value = localStorage.removeItem(name);
}



// end