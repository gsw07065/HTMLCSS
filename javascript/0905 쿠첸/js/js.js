let menuBtn = document.querySelectorAll(".top ul.menu > li");
let subTxt = document.querySelectorAll(".sub");
let subTxtLi = document.querySelectorAll(".sub ul li");

document.querySelector("header .head").onmouseenter=function(){
  this.style.backgroundColor="#fff";
  menuBtn.forEach(function(v,k){
    v.querySelector("a").classList.add("on");
  });
  this.querySelector(".logo").innerHTML = '<img src="images/logo-d.svg" alt="logo" />';
};
document.querySelector("header .head").onmouseleave=function(){
  this.style.backgroundColor="transparent";
  menuBtn.forEach(function(v,k){
    v.querySelector("a").classList.remove("on");
  });
  this.querySelector(".logo").innerHTML = '<img src="images/logo.svg" alt="logo" />';
};

let subHeight = subTxtLi.offsetheight;
menuBtn.forEach(function(v,k){
  v.onmouseenter=function(){
    subTxt.forEach(function(v,k){
      v.classList.add("on");
    });
    subTxtLi[k].style.height = subHeight + "px";
  };
});