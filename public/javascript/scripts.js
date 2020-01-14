function bigImg(x) {
    x.className = "ui card bg-info zoom";
    x.style.border = "2px solid black";
  }
  
  function normalImg(x) {
    x.className = "ui card";
    x.style.border = "1px solid black";
  }


function sumbit_functions() {
  var str = document.getElementById("detail").value;
  var str1 = str.toUpperCase();
  document.getElementById("detail").value = str1;
}