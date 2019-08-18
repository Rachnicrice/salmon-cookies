'use strict';

var storeHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];

Store.cookieStores = [];

var form = document.getElementById('store_form');

function Store (name, minCust, maxCust, avgCookie) {
  this.storeName = name;
  this.leastCust = minCust;
  this.mostCust = maxCust;
  this.cookiePerCust = avgCookie;
  this.cookieSales = [];
  Store.cookieStores.push(this);
}

Store.prototype.randCust = function () {
  var randomNumber = Math.random()*((this.mostCust + 1) - this.leastCust) + this.leastCust;
  return randomNumber;
};

Store.prototype.simSales = function () {
  var cookiesPurchased = 0;
    
  //15 is the number of hours the store is open
  for (var i = 0; i < 15; i++) {
    cookiesPurchased = Math.floor(this.cookiePerCust * this.randCust());
    this.cookieSales.push(cookiesPurchased);
  }
  return [this.cookieSales];
};

Store.prototype.render = function () {

  var newStoreLog = document.createElement('tr');
  body.appendChild(newStoreLog);
  newStoreLog.id = this.storeName;
  this.randCust();
  this.simSales();
  
  var storeRow = document.getElementById(this.storeName);

  var rowHeader = document.createElement('td');
  rowHeader.textContent = this.storeName;
  storeRow.appendChild(rowHeader);

  for (var j = 0; j < storeHours.length; j++){
    var newCookieEst = document.createElement('td');
    newCookieEst.textContent = this.cookieSales[j];
    storeRow.appendChild(newCookieEst);
  } 
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

var elementStoreSales = document.getElementById('table-head');

var head = document.getElementById('table-head');
var body = document.getElementById('table-body');
var foot = document.getElementById('table-foot');

head.appendChild(document.createElement('th'));


var createHeader = function () {
  for (var x = 0; x < storeHours.length; x++) {
    var whatHour = document.createElement('th');
    whatHour.textContent = storeHours[x];
    head.appendChild(whatHour);
  }
};

var createFooterTotals = function (hour) {
  var sum = 0;
  for (var m = 0; m < Store.cookieStores.length; m++){
    sum += Store.cookieStores[m].cookieSales[hour];
  }
  return sum;
};

var makeFooter = function () {
  var footRow = document.createElement('tr');
  footRow.id = 'foot-totals';
  foot.appendChild(footRow);
  
  var footRowLoc = document.getElementById('foot-totals');
  
  var totalFoot = document.createElement('td');
  totalFoot.textContent = 'Hourly Total';
  footRowLoc.appendChild(totalFoot);

  var finalTotal = 0;
  
  for (var p = 0; p < storeHours.length; p++) {
    var newFoot = document.createElement('td');
    var feeties = createFooterTotals(p);
    console.log(feeties);
    newFoot.textContent = feeties;
    newFoot.id = storeHours[p];
    footRowLoc.appendChild(newFoot);

    finalTotal += feeties;
  }

  var lastCell = document.createElement ('td');
  lastCell.textContent = finalTotal;
  footRowLoc.appendChild(lastCell);
};

var removeFooter = function () {
  foot.firstChild.remove();
};

var newTotal = function () {

  for (var d = (Store.cookieStores.length - 1); d < Store.cookieStores.length; d++) {
    var storeRow = document.getElementById(Store.cookieStores[d].storeName);

    var sum = 0;

    for (var f = 0; f < storeHours.length; f++) {
      sum += Store.cookieStores[d].cookieSales[f];
    }

    var storeSum = document.createElement('td');
    storeSum.textContent = sum;
    storeRow.appendChild(storeSum);
  }

};

var createStoreTotals = function () {
  var storeTotal = document.createElement('th');
  storeTotal.textContent = 'Daily Total';
  head.appendChild(storeTotal);

  for (var d = 0; d < Store.cookieStores.length; d++) {
    var storeRow = document.getElementById(Store.cookieStores[d].storeName);

    var sum = 0;

    for (var f = 0; f < storeHours.length; f++) {
      sum += Store.cookieStores[d].cookieSales[f];
    }

    var storeSum = document.createElement('td');
    storeSum.textContent = sum;
    storeRow.appendChild(storeSum);
  }

};

for (var k = 0; k < Store.cookieStores.length; k++){
  Store.cookieStores[k].render();
}

var newRow = function (event) { 
  event.preventDefault();

  var nameStore = event.target.store_name.value;
  var custMin = event.target.min_cust.value;
  var custMax = event.target.max_cust.value;
  var cookieAvg = event.target.avg_cookie.value;

  new Store(nameStore, custMin, custMax, cookieAvg);

  Store.cookieStores[Store.cookieStores.length - 1].render();
  newTotal();
  removeFooter();
  makeFooter();
  form.reset();
};

form.addEventListener('submit', newRow);

createHeader();
makeFooter();
createStoreTotals();
