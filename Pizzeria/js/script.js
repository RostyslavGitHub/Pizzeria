"use strict"
const menu = document.querySelector('.header__nav__menu-burer');
const burgerMenu = document.querySelector('.header__nav__burger-menu-icon');
const closeArea = document.querySelector('.to-close');

const closeMenu = () => {
		menu.classList.remove('_active-menu');
		burgerMenu.classList.remove('_close-burger-menu-icon');
		closeArea.classList.remove('_close_area');
};


if (burgerMenu){
	burgerMenu.addEventListener("click", function (e) {
		menu.classList.toggle('_active-menu');
		burgerMenu.classList.toggle('_close-burger-menu-icon');
		closeArea.classList.toggle('_close_area');
	});
};


const menuItemLink = document.getElementsByClassName('header__nav__link');

if(menuItemLink){
	for(let i = 0; i < menuItemLink.length; i++){
		menuItemLink[i].addEventListener("click", function () {
			closeMenu();
		});
	}};


function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};
window.onscroll = function() {
	showScrollButton();
};
function showScrollButton() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector('.scroll-to-top').style.display = 'block';
	} else {
		document.querySelector('.scroll-to-top').style.display = 'none';
	}
};


const inputElement = document.getElementsByClassName("input");

if (inputElement) {
  for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function() {
      if (inputElement[i].value === "Adress" || inputElement[i].value === "Your number for the SMS"){
        inputElement[i].value = "";
      } 
    });
    inputElement[i].addEventListener("blur", function() {
      if (inputElement[i].value === ""){ 
        if(i === 0 ){
          inputElement[i].value = "Adress";
        } else if (i === 1 ){
          inputElement[i].value = "Your number for the SMS";
        } else if(i === 2 ){
          inputElement[i].value = "Adress";
        } else if (i === 3 ){
          inputElement[i].value = "Your number for the SMS";
        }
      }
    });
  }
}


const body = document.querySelector('body');
const popUp = document.getElementsByClassName('popup');
const menuItemButton = document.getElementsByClassName('menu__item__button');

if (popUp) {
  for (let i = 0; i < menuItemButton.length; i++) {
    menuItemButton[i].addEventListener("click", function() {
      popUp[i].style.opacity = "1";
      popUp[i].style.visibility = "visible";
      burgerMenu.style.display="none";
      closeArea.classList.add('_close_area');
      document.querySelector('.scroll-to-top').style.display = 'none';
      body.classList.add('_stop-scroll');
    });

    const toClosePopUp = document.getElementsByClassName('popup-closer');
    if (toClosePopUp) {
      for (let j = 0; j < toClosePopUp.length; j++) {
        toClosePopUp[j].addEventListener("click", function() {
          popUp[i].style.opacity = "0";
          popUp[i].style.visibility = "hidden";
          burgerMenu.style.display="block";
          closeArea.classList.remove('_close_area');
          body.classList.remove('_stop-scroll');
        });
      }
    }
  }
}

const successPopUpButton = document.getElementsByClassName("success-popup-button");
const successPopUp = document.querySelector(".success-popup")
let removeSuccessPopUp = () => successPopUp.classList.remove("_active-popup");
if(successPopUpButton){
  for (let i = 0; i < successPopUpButton.length; i++){
    successPopUpButton[i].addEventListener("click", function(){
      popUp[i].style.opacity = "0";
      popUp[i].style.visibility = "hidden";
      successPopUp.classList.add("_active-popup");
      closeArea.classList.remove('_close_area');
      burgerMenu.style.display="block";
      body.classList.remove('_stop-scroll');
      setTimeout(removeSuccessPopUp, 3000);
      
  })
}
};


if(closeArea){
	closeArea.addEventListener("click", function (e) {
		closeMenu();
		for (let i = 0; i < popUp.length; i++) {
		popUp[i].style.opacity = "0";
    popUp[i].style.visibility = "hidden";}
		body.classList.remove('_stop-scroll');
    burgerMenu.style.display="block";
	});
};