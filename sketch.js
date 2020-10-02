// change from cache to local storage

/******************************
 * P5 Methods
 ******************************/

// called once
function setup() {
  let date1 = new Date("2020, 01, 01");
  console.log(diffdate(date1, new Date()));
  mainPlay();
}

// called every tick, one second
// function draw() {
//   //background(220);
// }

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
 * @param {Date} date1: older date 
 * @param {Date} date2: newer date, usually current date
 */
function diffdate(date1, date2) {
  return floor((date2 - date1) / (24 * 60 * 60 * 1000));
}

/*********************
 * Local Storage
  //addStorage("test", date1);
  //var testGet = window.localStorage.getItem('test');
  //console.log(testGet);
  //var testRemove = window.localStorage.removeItem('test');
  // remove all storage
  // window.localStorage.clear();
*********************/
function addStorage(pName, date) {

  let lineItem = {
    name: pName,
    setDate: date
  };
  window.localStorage.setItem(pName, JSON.stringify(lineItem));
}

/*********************
 * Cookie Functions
  //setCookie('Hello', 2, 3);
  //console.log(getCookie('Hello'));
  //eraseCookie('Hello');
 *********************/

function setCookie(name, value, days) {
  // setup expiration
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
// end