console.log('Loaded!');
var counter=0;
var button = document.getElementById("button");
button.onclick= function(req,res){
    counter=counter+1;
    var span = document.getElementById("count")
    span.innerHTML=counter.toString();
    
}