/* Aufgabe: Aufgabe 10
Name: Mario Sommer
Matrikel: 254785
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}
 
let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    console.log(_request.url);

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    
//    for (key in query){
//    
//        console.log(key + ":" + query[key]);
//    /*    _response.write(key + ":" + query[key]);*/
//        
//        }
    
    _response.write("Hallo " + query["Vorname"] + " danke für deine Bestellung" + "<br>" + "Deine Eisauswahl:" + "<br>");
    
    _response.write("Schoko: " + query["Schoko"] + "<br>");
    _response.write("Erdbeer: " + query["Erdbeer"] + "<br>");
    _response.write("Haselnuss: " + query["Haselnuss"] + "<br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Banane: " + query["Banane"] + "<br>");
   
//     _response.write("Deine Lieferoption:" + "<br>" + query["delivery"] + "<br>");

   
    _response.write("Deine Toppingsauswahl: " + "<br>" + query["Streusel"] + "<br>");
    _response.write(" " + query["Sahne"] + "<br>");
    _response.write(" " + query["Schokosoße"] + "<br>");
    _response.write(" " + query["Erdbeersoße"] + "<br>");
   
 //   _response.write("Deine Toppingsauswahl " + query["toppings"] + "<br>");
    
    _response.write("Deine Behälterauswahl:" + "<br>" + query["container"] + "<br>");    
    _response.write("Die Bestellung geht an:" + "<br>" + query["Vorname"] + " " + query["Name"] + " " + query["Straße"] + " " + query["Postleitzahl"] + " " + query["Ort"] + "<br>");
    _response.end();
}