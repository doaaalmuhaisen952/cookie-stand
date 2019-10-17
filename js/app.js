 'use strict';
 var Time = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 function shop (name, Min, MaX, AVg) {
  this.name = name;
  this.Min = Min;
  this.MaX = MaX;
  this.AVg = AVg;
  this.hourlySales = [];
  this.totalCookies = 0;
  this.geeratHourlySales();

  }
 
  shop.prototype.gitRandomCustamerCount = function(){
 var range = this.MaX -this.Min;
 var randomCount = Math.random() * range + this.Min;

 };
 shop.prototype.geeratHourlySales =function(){
   for (var i = 0; i< Time.length ; i++ ){
    var cookiesSoldThisTime = Math.ceil(this.gitRandomCustamerCount) * this.AVg
   this.hourlySales.push(cookiesSoldThisTime);
   this.totalCookies += cookiesSoldThisTime;

  }
 }
shop.prototype.random = function(){
  
    var container = document.getElement('h2');
    
    var h2 = document.createElement(h2);
    container.appendChild(h2);
    h2.textContent =  this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
  
    for (var i = 0; i < Time.length; i++) {
       var li = document.createElement('li') ;
      ul.appendChild(li);

      var sales = Time[i] + ' : ' + this.hourlySales[i] + ' cookies ';
      li.textContent = sales;

    }
    var li = document.createElement('li')
    li.textContent = 'Total ' + this.totalSale + ' cookies ';
    ul.appendChild(li);
  
  
  };
   
  var Seattle = new shop('Seattle', 2, 16, 4.6);
  // var Tokyo = new Store('Tokyo', 3, 24, 1.2);
  var Dubai = new shop('Dubai' , 11, 38, 3.7);
  // var Paris = new Store('Paris', 20, 38, 2.3);
  // var Lima = new Store('Lima', 23, 65, 6.3);
  var Cities = [Seattle ,Dubai ] ;
  for (var i= 0 ; i< Cities.length ;i++ ){
    var Cities = Cities[i];
   // Cities.geeratHourlySales(); 
    Cities.render();
     
  }




 // var storeLocations = [];//eslint-disable-line
// var salesTable = document.getElementById('salmonTable');
// function HeaderRow() { //eslint-disable-line
// var tableRow = document.createElement('tr');
// for (var i = 0; i <= Time.length; i++) {
// var thElement = document.createElement('th');
// thElement.textContent = Time[i];
// tableRow.appendChild(thElement);
// }
// thElement = document.createElement('th');
// thElement.textContent = '          Total';
// tableRow.appendChild(thElement);
// //  console.log(salesTable);
// salesTable.appendChild(tableRow);
// };
// function Store(name, Min, MaX, AVg) {
// this.name = name;
// this.Min = Min;
// this.MaX = MaX;
// this.avgCookie = AVg;
// this.avgCustArray = [];
// this.cookiesEachHourArray = [];
// this.totalCookies = 0;
// storeLocations.push(this);
// }
// Store.prototype.numCustHourly = function() {
// for (var i = 0; i <= Time.length; i++) {
// var singleHourCust = Math.floor(Math.random() * (this.MaX - this.Min)) + this.Min;
// this.avgCustArray.push(singleHourCust);
// }
// };
// Store.prototype.cookiesPerCustomer = function() {
// this.numCustHourly();
// for (var i = 0; i < Time.length; i++) {
// var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
// this.cookiesEachHourArray.push(singleHourCookies);
// this.totalCookies += singleHourCookies;
// }
// };
// Store.prototype.render = function() {
// this.cookiesPerCustomer();
// var trRowName = document.createElement('tr');
// var tdStore = document.createElement('td');
// tdStore.textContent = this.name;
// trRowName.appendChild(tdStore);
// for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
// var tdCell = document.createElement('td');
// tdCell.textContent = this.cookiesEachHourArray[i];
// trRowName.appendChild(tdCell);
// };
// var tdTotal = document.createElement('td');
// tdTotal.textContent = this.totalCookies;
// trRowName.appendChild(tdTotal);
// salesTable.appendChild(trRowName);
// };
// var Seattle = new Store('Seattle', 2, 16, 4.6);
// var Tokyo = new Store('Tokyo', 3, 24, 1.2);
// var Dubai = new Store('Dubai' , 11, 38, 3.7);
// var Paris = new Store('Paris', 20, 38, 2.3);
// var Lima = new Store('Lima', 23, 65, 6.3);
// function renderAllStores() {
// for (var i = 0; i < storeLocations.length; i++) {
// storeLocations[i].render();
// }
// };
// function makeFooterRow() { //eslint-disable-line
// var tableRow = document.createElement('tr');
// tableRow.textContent = 'Totals';
// salesTable.appendChild(tableRow);
// var bigStupidTotal = 0;
// for (var i = 0; i < Time.length; i++) {
// var hourlyTotal = 0;
// for (var j = 0; j < storeLocations.length; j++) {
//   hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
//   bigStupidTotal += storeLocations[j].cookiesEachHourArray[i];
//   console.log(bigStupidTotal);
// }
// var tdElement = document.createElement('td');
// tdElement.textContent = hourlyTotal;
// tableRow.appendChild(tdElement);
// }
// tdElement = document.createElement('td');
// tdElement.textContent = bigStupidTotal;
// tableRow.appendChild(tdElement);
// };
// HeaderRow();
// renderAllStores();
// makeFooterRow();

// // function submitHandler(event) {
// //   event.preventDefault();
// //   var location = event.target.location.value;
// //   var Max = event.target.Max.value;
// //   var Min =event.target.Min.value;
// //   var Avg = event.target.Avg.value;

// //   var newShop = renderAllStores( location,Max , Min ,Avg);

// //   Shop.push(newShop);

// //   newShop.renderRow(table)
// // }
// // var form = document.getElementById('addsalmonForm');
// // form.addEventListener('submit' , submitHandler);