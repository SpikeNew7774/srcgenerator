function getParameterByName(src, url = window.location.href) {
    src = src.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + src + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getParameterByNam1(title, url = window.location.href) {
    title = title.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + title + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getParameterByNam2(width, url = window.location.href) {
    width = width.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + width + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getParameterByNam3(height, url = window.location.href) {
    height = height.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + height + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getParameterByNam4(v, url = window.location.href) {
    v = v.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + v + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var paramSRC = getParameterByName("src")
var paramTITLE = getParameterByNam1("title")
var paramWIDTH = getParameterByNam2("width")
var paramHEIGHT = getParameterByNam3("height")
var paramV = getParameterByNam4("v")

var one = "1"
var zero = "0"
var titleND = document.getElementById("mTitle")

var iframe = document.getElementById("ifr")

if (paramV == one) {
    iframe.src = paramSRC
    iframe.width = paramWIDTH
    iframe.height = paramHEIGHT
    iframe.style.display = "block"
}
titleND.textContent = paramTITLE

document.title = paramTITLE
