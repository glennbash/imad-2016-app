console.log('Loaded!');


var button = document.getElementById("click-me");
button.onclick= function(req,res){
    
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

