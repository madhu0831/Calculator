function number(num){
 document.getElementById("space").value+=num;
}
function clears(){
 document.getElementById("space").value="";
}
function res(){
 var a=document.getElementById("space").value;
 var b=eval(a); // this function execute a expression
 document.getElementById("space").value=b;
}
