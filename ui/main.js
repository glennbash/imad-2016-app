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

var searchButton=document.getElementById("searchButton");
searchButton.onclick = function (){
    
    var textInput=document.getElementById("textInput");
    var searchInput=textInput.value;
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function( ){
        if (req.readyState == XMLHttpRequest.DONE){
            if (req.status ==200 ){
                var listOfValues = req.responseText;
                listOfValues = JSON.parse(listOfValues);
                 var list = '';
                for ( i=0; i<listOfValues.length; i++){
                     list += '<li>' + listOfValues[i] + '</li>';
                    console.log(list);
                }
                var resultsList=document.getElementById('resultsList');
                resultsList.innerHTML=list;
                
            }
        }
    
    };
     
    req.open('GET','http://glennbash.imad.hasura-app.io/search'+ searchInput, true);
    req.send('null');
    
    
};
 
