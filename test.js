let a = null;
let b = null;

let tv = null;
let movie = null;

let tvButton = null;
let movieButton = null;

let inputLogin = null;
let inputPass = null;

let enter = null;
let exit = null;
let exitButton = null;
let hello = null;

let loginReg = null;
let passReg = null;

let inputSearch = null;


function login() {
  localStorage.setItem("login", "admin");
  localStorage.setItem("pass", "admin");

  inputLogin = document.getElementById("inputLogin");
  inputPass = document.getElementById("inputPass");

  let login = inputLogin.value;
  let pass = inputPass.value;

  loginReg = localStorage.getItem("login")
  passReg = localStorage.getItem("pass")
  

  if (login == loginReg && pass == passReg) {
    loginChange(loginReg);
  }
  else {
    alert("You must register first*");
  }
}

function loginChange(userName) {
  localStorage.setItem("islogged",userName)
  enter = document.getElementById("notLogged");
  exit = document.getElementById("onlyLogged");
  exitButton = document.getElementById("onlyLogged2");

  hello = document.getElementById("helloWorld").textContent += (userName);

  enter.style.display = "none";
  exit.style.display = "block";
  exitButton.style.display = "block";
}

function exitLog() {
  enter = document.getElementById("notLogged");
  exit = document.getElementById("onlyLogged");
  exitButton = document.getElementById("onlyLogged2");
  localStorage.setItem("islogged",null)

  enter.style.display = "block";
  exit.style.display = "none";
  exitButton.style.display = "none";

  localStorage.clear();
}

function changeButtonFocus(btn) {
  btn.style.color = "red";
  btn.style.borderBottom = "2px solid red";
}

function changeButtonUnFocused(btn) {
  btn.style.color = "black";
  btn.style.borderBottom = "0px solid red";
}

function setMovie() {
  tvButton = document.getElementById("tvButton");
  movieButton = document.getElementById("movieButton");

  changeButtonFocus(movieButton);
  changeButtonUnFocused(tvButton);

  movie = document.getElementById("movie");
  tv = document.getElementById("tv");

  movie.style.display = "block";
  tv.style.display = "none";
}

function setTv() {
  tvButton = document.getElementById("tvButton");
  movieButton = document.getElementById("movieButton");

  changeButtonFocus(tvButton);
  changeButtonUnFocused(movieButton);

  movie = document.getElementById("movie");
  tv = document.getElementById("tv");

  movie.style.display = "none";
  tv.style.display = "block";
}

function setFade(x) {

  if (x.id == "id1") {
    a = document.getElementById("blurid1");
    a.style.opacity = "0.5";

    b = document.getElementById("textid1");
    b.style.display = "block";
    b.style.background = "rgba(0, 0, 0, 0.6)";
    b.style.cursor = "pointer";
  }

  if (x.id == "id2") {
    a = document.getElementById("blurid2");
    a.style.opacity = "0.5";

    b = document.getElementById("textid2");
    b.style.display = "block";
    b.style.background = "rgba(0, 0, 0, 0.6)";
    b.style.cursor = "pointer";
  }

  if (x.id == "id3") {
    a = document.getElementById("blurid3");
    a.style.opacity = "0.5";

    b = document.getElementById("textid3");
    b.style.display = "block";
    b.style.background = "rgba(0, 0, 0, 0.6)";
    b.style.cursor = "pointer";
  }

  if (x.id == "id4") {
    a = document.getElementById("blurid4");
    a.style.opacity = "0.5";

    b = document.getElementById("textid4");
    b.style.display = "block";
    b.style.background = "rgba(0, 0, 0, 0.6)";
    b.style.cursor = "pointer";
  }
}

function delFade(x) {
  a.style.opacity = "1";
  b.style.display = "none";
}

function searchFilm(e) {
  let elems = document.getElementsByClassName("block");
  let news = document.getElementsByClassName("ultorow");
  let genres = document.getElementsByClassName("genre");
  let tabs = document.getElementsByClassName("maintab");

  let searching = e.target.value;
  var arr = [];

  for (var i = 0; i < elems.length; i++) {
    arr.push(elems[i].children[1]);
  }

  if (searching != "") {
    for (var i = 0; i < news.length; i++) {
      news[i].style.display = "none";
    }
    for (var i = 0; i < genres.length; i++) {
      genres[i].style.display = "none";
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    for (var i = 0; i < arr.length; i++) {
      if (!arr[i].textContent.toUpperCase().includes(searching.toUpperCase())) {
        elems[i].style.display = "none";
      }
      else {
        elems[i].style.display = "block";
      }
    }
  }
  else {
    for (var i = 0; i < news.length; i++) {
      news[i].style.display = "block";
    }
    for (var i = 0; i < genres.length; i++) {
      genres[i].style.display = "block";
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "block";
    }

    for (var i = 0; i < arr.length; i++) {
      elems[i].style.display = "block";
    }
  }
}

window.onload = function () {
  inputSearch = document.getElementById("searchfilm");
  inputSearch.addEventListener('input', searchFilm);

  loginReg = localStorage.getItem("login");
  loginPass = localStorage.getItem("pass");

  logeed = localStorage.getItem("islogged");
  if (logeed !== null) {
    loginChange(logeed);
  }
}
