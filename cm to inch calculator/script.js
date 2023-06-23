function convert(){
let cm = document.getElementById('input').value
let inch  = cm/2.54
let result = document.getElementById("result")
result.innerHTML=inch.toFixed(2)+" inches"

let input = document.getElementById('input');
input.value = "";
result.value="";
}
