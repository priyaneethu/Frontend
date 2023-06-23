function checkPrime(){
    let num = document.getElementById("input").value;
    let factor;
    let sqt = Math.sqrt(num);
    let result = document.getElementById("result");
    if( num <= 1)
      result.innerHTML="No";
    else if (num ==2 || num == 3)
       result.innerHTML="Yes";
    else if( num % 2 == 0 || num % 3 == 0)
       result.innerHTML="No";
        
    for( factor = 2 ; factor <= sqt ; factor++)
    {
        if ( num % factor == 0)
        {
            result.innerHTML="No";
            break;
        }
    }
    if( factor > sqt)
    result.innerHTML="Yes";
    console.log(result)
    document.getElementById('input').value="";
}