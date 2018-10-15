var path = require('path');
var jwt = require('./jwt');
$(document).ready(function () {
    console.log(document);
    var pokedex = {};
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', "./src/pokedex.json");
    xhttp.responseType = 'text';
    xhttp.send();
    console.log(xhttp);
    xhttp.onload = function () {
        if (this.readyState === xhttp.DONE) {
            if (this.status === 200) {
                console.log(this.responseText);
            }
            else {
                console.error('Status ' + this.status);
            }
        }
        var superHeroesText = xhttp.response; // get the string from the response
        var superHeroes = JSON.parse(superHeroesText);
        var pokemon = JSON.stringify(superHeroes.name);
        console.log(pokemon);
    };
    /*let courses: any = {};
     let xmlhttp: any = new XMLHttpRequest();
     xmlhttp.open("GET", "./pokedex.json", true);
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             courses = console.log(JSON.parse(xmlhttp.responseText));
         }
     };
     xmlhttp.send(null);
     console.log(courses);*/
    /*
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'apiKey=3f5f7d44b8544fbea0b9f390634c0920';
        var req = new Request(url);
        fetch(req)
            .then(function (response) {
                console.log(response.json());
               
            }). catch (function(error) {
                console.error('erreur');
            });*/
});
/*3f5f7d44b8544fbea0b9f390634c0920*/ 
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map