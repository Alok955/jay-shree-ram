 document.getElementById('image').src="./image/of.png";
 document.getElementById('off-on').innerText="  off";
//  document.getElementById("button").style.backgroundColor="yellow";
 
 function off(){
     document.getElementById("image").src="./image/of.png"
     document.getElementById('off-on').innerText="  off";
     document.getElementById("button1").style.backgroundColor="yellow";
        document.getElementById("button2").style.backgroundColor="#fff";

     
    }
    function on(){
        document.getElementById("image").src="./image/on.png"
        document.getElementById('off-on').innerText="  On";
        document.getElementById("button1").style.backgroundColor="#fff";
        document.getElementById("button2").style.backgroundColor="yellow";

 }

