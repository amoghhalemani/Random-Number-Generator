

function randomNumber()
{
    let from= parseInt(document.getElementById("from").value);
    let to= parseInt(document.getElementById("to").value);
    let number;

    number = Math.floor((Math.random()*(to-from+1))+from);
    document.getElementById("number").innerHTML= number;
}
