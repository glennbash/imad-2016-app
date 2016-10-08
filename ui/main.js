console.log('Loaded!');


var button = document.getElementById("click-me");
button.onclick= function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function( ){
        if (req.readyState == XMLHttpRequest.DONE){
            if (req.status ==200 ){
                var counter = req.responseText;
                 var span = document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    
    };
    
    req.open('GET','http://glennbash.imad.hasura-app.io/counter', true);
    req.send('null');

};

var textInput=document.getElementById("textInput");
var searchText=textInput.value();

var searchButton=document.getElementById("searchButton");
searchButton.onclick = function (){
    
    listOfValues = ["Element1","Element2","Element3"];
    var list = '';
    for ( i=0; i<listOfValues.length; i++){
        list += '<li>' + listOfValues[i] + '</li>';
    }
    
    var resultsList=document.getElementById('resultsList');
    resultsList.innerHTML=resultsList;
}
 
