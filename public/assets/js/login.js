var header = document.getElementById("menu-navbar");
var btns = header.getElementsByClassName("btn-navbar");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function showForms(form) {
    document.getElementById("user").classList.remove("active");
    document.getElementById("admin").classList.remove("active");
    if (form == "user") {
        document.getElementById("user").classList.add("active");
    } else if (form == "admin") {
        document.getElementById("admin").classList.add("active");
    }
}
