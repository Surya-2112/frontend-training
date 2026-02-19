var head = document.getElementById("top-heading")
head.style.background = "yellow";
var head1= document.getElementById("bottom-heading").addEventListener("click", changeColor());

function changeColor()
{
    head1.style.background="green";
}