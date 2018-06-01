// JavaScript Document
var myImage = document.getElementById("mainImage");
var imageArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];
var counterIndex = 0;
// ici la mecanique pour changer d'image
function changeimage() {
	myImage.setAttribute("src", imageArray[counterIndex]);
	counterIndex++;
	if (counterIndex >= imageArray.length) {
		counterIndex = 0;
	}
}
// afiche la fonction change image toutes les 3 sc
var monInterval = setInterval(changeimage, 3000);

// Stopper l'arrêt des images avec la souris 
myImage.onmouseover = function(){
	clearInterval(monInterval);
}
// Quand je retire la souris 
myImage.onmouseout = function(){
	monInterval = setInterval(changeimage, 3000);
}