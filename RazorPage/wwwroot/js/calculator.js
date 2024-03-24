function ButtonFunc(){
  var x=document.getElementById("selam");
  if(x.style.display==="block"){
    x.style.display="none"
  }
  else{
    x.style.display="block"
  }
}
function getSum(){
   var y = parseInt(document.getElementById("snum").value);
  var z = parseInt(document.getElementById("fnum").value)
var res=y+z;
 
document.getElementById("ans").innerText = "Sum of "+ y +" and " +z +" is : " + res;
document.getElementById("ans").style.display = "block";
var t=document.getElementById("sonuc");
document.getElementById("ans").style.display = "block";
t.style.display="none"
if(t.style.display==="block"){
    t.style.display="none"
    document.getElementById("ans").style.display = "none";
  }
  else{
    t.style.display="block"
    document.getElementById("ans").style.display = "block";
  }
  }

  