

function randomNumber()
{
    let from= document.getElementById("from").value;
    let to= document.getElementById("to").value;
    let number;

    number = Math.floor((Math.random()*(from-to+1))+from);
    document.getElementById("number").innerHTML= "Result"+number;
}
