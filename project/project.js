const pan1 = document.getElementById("pan1");
const m = document.getElementById("pd1")
const modal = document.getElementById("myModal")
pan1.addEventListener("animationend", hfunc);

function hfunc(){
    m.href = "#myModal";
    m.onclick = function(){
       modal.style.display = "block"; 
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  window.location.href = "#"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "#"
  }
}