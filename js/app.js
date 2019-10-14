var hours = [["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",], [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",]];
let Seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averagePerCustomer: 6.3,
    arrSeattle: [],
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        return hours;
    }

}
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Seattle";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);
var paragraph = document.createElement('p');
var contentArea = document.getElementById('list');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
paragraph.appendChild(ul);
var li = document.createElement('li');
li.textContent = Seattle.cookiesPurchased();
paragraph.appendChild(li);
let Tokyo = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averagePerCustomer: 1.2,
    arrTokyo: [],
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        return hours;
    }
}
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for tokyo";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);
var paragraph = document.createElement('p');
var contentArea = document.getElementById('list');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
paragraph.appendChild(ul);
var li = document.createElement('li');
li.textContent = Tokyo.cookiesPurchased();
paragraph.appendChild(li);
let Dubai = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    averagePerCustomer: 3.7,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        return hours;
    }
}
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Dubai";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);
var paragraph = document.createElement('p');
var contentArea = document.getElementById('list');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
paragraph.appendChild(ul);
var li = document.createElement('li');
li.textContent = Dubai.cookiesPurchased();
paragraph.appendChild(li);
let Paris = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    averagePerCustomer: 2.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        return hours;
    }
}
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Paris";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);
var paragraph = document.createElement('p');
var contentArea = document.getElementById('list');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
paragraph.appendChild(ul);
var li = document.createElement('li');
li.textContent = Paris.cookiesPurchased();
paragraph.appendChild(li);
let Lima = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averagePerCustomer: 4.6,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        return hours;
    }
}
var header1 = document.createElement("h2");
header1.textContent = "Salmon Cookies for Lima";
var contentArea = document.getElementById('list');
contentArea.appendChild(header1);
var paragraph = document.createElement('p');
var contentArea = document.getElementById('list');
contentArea.appendChild(paragraph);
var ul = document.createElement('ul');
paragraph.appendChild(ul);
var li = document.createElement('li');
li.textContent = Lima.cookiesPurchased();
paragraph.appendChild(li);