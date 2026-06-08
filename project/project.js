//1st panel
const pan1 = document.getElementById("pan1");
const m = document.getElementById("pd1")
const modal1 = document.getElementById("myModal1")
var span1 = document.getElementsByClassName("close")[0];
pan1.addEventListener("animationend", hfunc);

function hfunc(){
    m.href = "#myModal1";
    m.onclick = function(){
       modal1.style.display = "block"; 
    }
}

span1.onclick = function() {
  modal1.style.display = "none";
  window.location.href = "#"
}



// 2nd panel
const pan2 = document.getElementById("pan2");
const n = document.getElementById("pd2")
const modal2 = document.getElementById("myModal2")
var span2 = document.getElementsByClassName("close")[1];
pan2.addEventListener("animationend", ifunc);

function ifunc(){
    n.href = "#myModal2";
    n.onclick = function(){
       modal2.style.display = "block"; 
    }
}

span2.onclick = function() {
  modal2.style.display = "none";
  window.location.href = "#"
}

//3rd panel
const pan3 = document.getElementById("pan3");
const o = document.getElementById("pd3")
const modal3 = document.getElementById("myModal3")
var span3 = document.getElementsByClassName("close")[2];
pan3.addEventListener("animationend", jfunc);

function jfunc(){
    o.href = "#myModal3";
    o.onclick = function(){
       modal3.style.display = "block"; 
    }
}

span3.onclick = function() {
  modal3.style.display = "none";
  window.location.href = "#"
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    window.location.href = "#"
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
    window.location.href = "#"
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
    window.location.href = "#"
  }
}