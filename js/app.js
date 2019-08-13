'use strict';

var storeHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];


function Store (name, minCust, maxCust, avgCookie) {
  this.storeName = name;
  this.leastCust = minCust;
  this.mostCust = maxCust;
  this.cookiePerCust = avgCookie;
  this.cookieSales = [];
  Store.cookieStores.push(this);
}

Store.cookieStores = [];

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

//Creating table rows and giving them IDs
for (var i = 0; i < Store.cookieStores.length; i++){
  var newStoreLog = document.createElement('tr');
  newStoreLog.textContent = Store.cookieStores[i].storeName;
  body.appendChild(newStoreLog);
  Store.cookieStores[i].randCust();
  Store.cookieStores[i].simSales();
  newStoreLog.id = Store.cookieStores[i].storeName;
}
//Creating table columns by time
for (var x = 0; x < storeHours.length; x++) {
  var whatHour = document.createElement('th');
  whatHour.textContent = storeHours[x];
  head.appendChild(whatHour);
}
//Filling in with data from each class to corresponding row
for (var k = 0; k < Store.cookieStores.length; k++){
  var storeRow = document.getElementById(Store.cookieStores[k].storeName);

  for (var j = 0; j < storeHours.length; j++){
    var newCookieEst = document.createElement('td');
    newCookieEst.textContent = Store.cookieStores[k].cookieSales[j];
    storeRow.appendChild(newCookieEst);
  }
}

var totals = document.createElement('tr');
totals.textContent = 'Total';
foot.appendChild(totals);
