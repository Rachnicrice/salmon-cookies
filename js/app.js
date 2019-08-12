'use strict';

var storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var pikeStore = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSales: [],
  avgCustomer: function (){
    var randomNumber = Math.random()*((this.maxCust + 1) - this.minCust) + this.minCust;
    // var customerNumber = Math.floor(randomNumber);
    return randomNumber;
  },
  simSales: function () {
    var cookiesPurchased = 0;
    
    //15 is the number of hours the store is open
    for (var i = 0; i < 15; i++) {
      cookiesPurchased = Math.floor(this.avgCookie * this.avgCustomer());
      this.cookieSales.push(cookiesPurchased);
    }
    return [this.cookieSales];
  },
};

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookieSales: [],
  avgCustomer: function (){
    var randomNumber = Math.random()*((this.maxCust + 1) - this.minCust) + this.minCust;
    return randomNumber;
  },
  simSales: function () {
    var cookiesPurchased = 0;
    
    //15 is the number of hours the store is open
    for (var i = 0; i < 15; i++) {
      cookiesPurchased = Math.floor(this.avgCookie * this.avgCustomer());
      this.cookieSales.push(cookiesPurchased);
    }
    return [this.cookieSales];
  },
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookieSales: [],
  avgCustomer: function (){
    var randomNumber = Math.random()*((this.maxCust + 1) - this.minCust) + this.minCust;
    return randomNumber;
  },
  simSales: function () {
    var cookiesPurchased = 0;
    
    //15 is the number of hours the store is open
    for (var i = 0; i < 15; i++) {
      cookiesPurchased = Math.floor(this.avgCookie * this.avgCustomer());
      this.cookieSales.push(cookiesPurchased);
    }
    return [this.cookieSales];
  },
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookieSales: [],
  avgCustomer: function (){
    var randomNumber = Math.random()*((this.maxCust + 1) - this.minCust) + this.minCust;
    return randomNumber;
  },
  simSales: function () {
    var cookiesPurchased = 0;
    
    //15 is the number of hours the store is open
    for (var i = 0; i < 15; i++) {
      cookiesPurchased = Math.floor(this.avgCookie * this.avgCustomer());
      this.cookieSales.push(cookiesPurchased);
    }
    return [this.cookieSales];
  },
};

var alki = {
  name: 'Alki',
  minCust:2,
  maxCust:16,
  avgCookie: 4.6,
  cookieSales: [],
  avgCustomer: function () {
    var randomNumber = Math.random()*((this.maxCust + 1) - this.minCust) + this.minCust;
    return randomNumber;
  },
  simSales: function () {
    var cookiesPurchased = 0;
    
    //15 is the number of hours the store is open
    for (var i = 0; i < 15; i++) {
      cookiesPurchased = Math.floor(this.avgCookie * this.avgCustomer());
      this.cookieSales.push(cookiesPurchased);
    }
    return [this.cookieSales];
  },
};

var cookieStoreNames = [pikeStore.name, seaTac.name, seattleCenter.name, capitolHill.name, alki.name];

var storeObjects = [pikeStore, seaTac, seattleCenter, capitolHill, alki];

var elementStoreSales = document.getElementById('sales');

for (var i = 0; i < cookieStoreNames.length; i++){
  var newStoreLog = document.createElement('h4');
  newStoreLog.textContent = cookieStoreNames[i];
  elementStoreSales.appendChild(newStoreLog);
  storeObjects[i].simSales();

  for (var j = 0; j < storeHours.length; j++) {
    var whatHour = document.createElement('li');
    whatHour.textContent = storeHours[j] + storeObjects[i].cookieSales[j];
    elementStoreSales.appendChild(whatHour);
  }
}
