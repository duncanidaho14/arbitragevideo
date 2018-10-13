import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
   console.log(document);
    let courses: any = {};
    let xmlhttp: any = new XMLHttpRequest();
    xmlhttp.open("GET", "./pokedex.json", true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            courses = console.log(JSON.parse(xmlhttp.responseText));
        }
    };
    xmlhttp.send(null);
 
})
