function Addition (){
    var firstnumber,secondnumber,answer;
    firstnumber = parseInt(document.getElementById("inputx").value);
    secondnumber = parseInt(document.getElementById("inputy").value);
    answer = firstnumber + secondnumber; 
    var ans;
    ans = document.getElementById("answer")
    ans.innerHTML = answer
}
function subtraction (){
    var firstnumber,secondnumber,answer;
    firstnumber = parseInt(document.getElementById("inputx").value);
    secondnumber = parseInt(document.getElementById("inputy").value);
    answer = firstnumber - secondnumber; 
    var ans;
    ans = document.getElementById("answer")
    ans.innerHTML = answer
}
function multiplication (){
    var firstnumber,secondnumber,answer;
    firstnumber = parseInt(document.getElementById("inputx").value);
    secondnumber = parseInt(document.getElementById("inputy").value);
    answer = firstnumber * secondnumber; 
    var ans;
    ans = document.getElementById("answer")
    ans.innerHTML = answer
}
function divide (){
    var firstnumber,secondnumber,answer;
    firstnumber = parseInt(document.getElementById("inputx").value);
    secondnumber = parseInt(document.getElementById("inputy").value);
    answer = firstnumber / secondnumber; 
    var ans;
    ans = document.getElementById("answer")
    ans.innerHTML = answer
}