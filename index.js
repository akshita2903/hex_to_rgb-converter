
var r,g,b,invalid=false,x;
function converttorgb(x1){
    x=x1.toUpperCase();
  //  if(x.length!=6 ) invalid=true;
if(x.length==2) x=x+"00"+"00";
else if(x.length==4) x+="00";
    else{
    r=x.substring(0,2);
  
    g=x.substring(2,4);
   
     b=x.substring(4,6);
     if(r.charAt(0)>'F' || r.charAt(1)>'F' || g.charAt(0)>'F' || g.charAt(1)>'F' 
     || b.charAt(0)>'F' || b.charAt(1)>'F')  invalid=true;
    r=parseInt(r,16);
    b=parseInt(b,16);
    g=parseInt(g,16);
    }
    
  
 
}
function display(){
    //if(invalid==false){
    document.getElementById('red').value=r;
    document.getElementById('blue').value=b;
    document.getElementById('green').value=g;
    var c='rgb('+r+','+g+','+b+')';
   var val= document.getElementById("color");
   val.style.backgroundColor=c;
 //   }
   //// else {alert("Must be of 6 digit and between 0-9 and A-F");
   // document.getElementById('txt').value="";

}

function reset(){
    document.getElementById('txt').value="";
    document.getElementById('red').value="";
    document.getElementById('blue').value="";
    document.getElementById('green').value="";
}