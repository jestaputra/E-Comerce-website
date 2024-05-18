// ------------------------NAVBAR-----------------------------------

document.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let subtitle = document.querySelectorAll("#subtitle");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    subtitle.classList.add("scrolled-text");
  } else {
    header.classList.remove("scrolled");
    subtitle.classList.remove("scrolled-text");
  }
});

// ------------------------MENU-----------------------------------

let show = document.getElementById("show");
let hide = document.getElementById("hide");
let box = document.getElementById("box");
let constructor = document.getElementById("constructor");

show.onclick = () => {
  box.classList.add("element-show");
  constructor.classList.add("blurr");
};
hide.onclick = () => {
  box.classList.remove("element-show");
  constructor.classList.remove("blurr");
};

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#box li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("box");
      menu.classList.remove("element-show");
      constructor.classList.remove("blurr");
    });
  });
});

// ----------------------------VALIDASI CONTACT---------------------------
function send(){
  let username = document.getElementById("username")
  let email = document.getElementById("email")
  let massage = document.getElementById("massage")
  let result = document.getElementById("result")

  if(username.value.length < 4){
    username.classList.add("wrong")
    result.innerHTML = "Check again your input"
    result.classList.add("wrong-text")
    massage.classList.remove("wrong")
    email.classList.remove("wrong")
    setTimeout(() => {
      result.classList.remove("wrong-text")
      username.classList.remove("wrong")
    }, 3000)
  } 
  else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    email.classList.add("wrong")
    result.innerHTML = "Check again your input"
    result.classList.add("wrong-text")
    username.classList.remove("wrong")
    massage.classList.remove("wrong")
    setTimeout(() => {
      result.classList.remove("wrong-text")
      email.classList.remove("wrong")
    }, 3000)
  } 
  else if(massage.value.length == ""){
    massage.classList.add("wrong")
    result.innerHTML = "Check again your input"
    result.classList.add("wrong-text")
    username.classList.remove("wrong")
    email.classList.remove("wrong")
    setTimeout(() => {
      result.classList.remove("wrong-text")
      massage.classList.remove("wrong")
    }, 3000)
  }else{
    username.classList.remove("wrong")
    email.classList.remove("wrong")
    massage.classList.remove("wrong")
    result.innerText = "*Your massage has been send"
    result.classList.add("success")
    setTimeout(() => {
      result.classList.remove("success")
    }, 3000)
    username.value = ""
    email.value = ""
    massage.value = ""
  }
}

// -----------------------------------ANIMATION------------------------
let text = document.querySelector(".text")
setTimeout(() => {
  text.classList.add("flassh")
}, 850)

window.addEventListener("scroll", reveal)

function reveal(){
  var reveals = document.querySelectorAll(".reveal")

  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 150
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active")
    }else{
      reveals[i].classList.remove("active")
    }
  }
}