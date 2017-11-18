var slideIndex = 1;

showSlides(slideIndex);

function changeSlide(n) {
	showSlides(slideIndex += n);
}

function showSlides (n)  {
	let slides = document.getElementsByClassName("slides");

	if( n > slides.length) slideIndex = 1;
	if(n < slides.length) slideIndex = slides.length;

	for(var i=0; i<slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[slideIndex-1].style.display = 'block';
} 
