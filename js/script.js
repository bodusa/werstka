const buttonMenu=document.querySelector(".header__button");
const menu=document.querySelector(".menu");

let menuActive=false;

function changeStyleElement(element){
	for(let i=0;i<5;i++){
		if(window.innerWidth>992){
			menu.children[i].style.color="#292F36";
		}else{
			menu.children[i].style.color="#ffffff";
		}
	}

	element.style.color="#CDA274";
}

buttonMenu.addEventListener("click",function(e){
	if(!menuActive){
		menu.classList.add("menu-active");
		buttonMenu.classList.add("header__button-active")
	}else{
		menu.classList.remove("menu-active");
		buttonMenu.classList.remove("header__button-active")
	}

	menuActive=!menuActive;
});



menu.addEventListener("click",function(e){
	changeStyleElement(e.target);
});