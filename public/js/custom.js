



// parallax
// function scrollFooter(scrollY, heightFooter)
// {
// 	var footer = document.getElementById("footer_parallax");
//     if(scrollY >= heightFooter) { footer.style.bottom = '0px';  }
//     else { footer.style.bottom= '-' + heightFooter + 'px';  }
// }

// window.onload = function(){
// 	var scrollAnimate = document.getElementById("scroll-animate");
// 	var wrapperParallax = document.getElementsByClassName('wrapper-parallax')[0];
// 	var scrollAnimateMain = document.getElementById("scroll-animate-main");
// 	var footer = document.getElementById("footer_parallax");
// 	var content = document.getElementById("content_parallax");
// 	var header = document.getElementById("header_parallax");
	
// 	var windowHeight = window.innerHeight;
// 	var footerHeight = footer.clientHeight;
// 	var contentHeight = content.clientHeight;
	
// 	var heightDocument = windowHeight + footerHeight + contentHeight - 20;
	
// 	scrollAnimate.style.height = heightDocument + 'px';
// 	scrollAnimateMain.style.height = heightDocument + 'px';
	
// 	header.style.height = windowHeight + 'px';
//     header.style.lineHeight = windowHeight + 'px';
	
// 	wrapperParallax.style.marginTop = windowHeight + 'px';
 
	
// 	window.onscroll = function(){
//         var scroll = window.scrollY;

//         scrollAnimateMain.style.top = '-' + scroll + 'px';
        
//         header.style.backgroundPositionY = 50 - (scroll * 100 / heightDocument) + '%';

//         scrollFooter(scroll, footerHeight);
//     }
	
// 	console.log('greeting', heightDocument)
// }
/// end parallax

// .footer scripts goes here
function ready () {
	
	parallaxFooter();
 
	window.onresize = function ( ) {
		parallax();	
	}
	
	function parallaxFooter() {
	  
		var siteContent = document.getElementById('site-content');
		var siteFooter = document.getElementById('footer');
		
		var siteFooterHeight = siteFooter.clientHeight;
		
		siteContent.style.marginBottom = siteFooterHeight + 'px';
	}
	
}

document.addEventListener("DOMContentLoaded", ready)

/// end footer
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
		myIndex = 1
	}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
