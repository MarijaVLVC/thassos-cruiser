// Moj script 
window.onload = function () {

	// provera()
	document.getElementById("calcBtn").addEventListener("click", provera);

	// proveraKontakt()
	document.getElementById("contactBtn").addEventListener("click", proveraKontakt);
}



//Poziv provera()
function provera() {
	//definisanje potrebnih promenljivih
	var cruiseDestination, cruiseDestinationSelect, numAdults, numKids, chkLunch, chkLunchChoose, regCruiseDestination, regNumAdults, regNumKids, nizOk, nizGreske, rezultat, price, priceAdults, priceKids, priceLunch, passNumb, princeFinal, printPrice;
	var cruizError, adultsError, kidsError, numbLunch;

	//Preuzimanje vrednosti iz formulara
	numAdults = document.getElementById("adults").value.trim();
	numKids = document.getElementById("kids").value.trim();


	cruiseDestination = document.getElementById("cruizDest");
	cruiseDestinationSelect = cruiseDestination.options[cruiseDestination.selectedIndex].text;

	//Selektovanje elemenata u kojima se ispisuje greska
	cruizError = document.querySelector("#cruiz-error");
	adultsError = document.querySelector("#adults-error");
	kidsError = document.querySelector("#kids-error");

	//definisanje regularnih izraza
	regNumAdults = /^[1-9]([0-9]{1})*$/;
	regNumKids = /^[1-9]([0-9]{1})*$/;


	//niz za greske i pravilno napisane podatke
	nizGreske = new Array();

//Select Check
if (cruiseDestination.options[cruiseDestination.selectedIndex].value == "0") {
	nizGreske.push("You didn't choose your Destination");
	cruizError.innerHTML = "You didn't choose your Destination";
	document.getElementById("cruizDest").style.border = "2px solid #ff6961";
} else {
	cruizError.innerHTML = "";
	document.getElementById("cruizDest").style.border = "1px solid #999";
}

	//provera vrednosti iz formulara
	if (!regNumAdults.test(numAdults)) {
		nizGreske.push("Wrong number of adults");
		adultsError.innerHTML = "Wrong number of adults";
		document.getElementById("adults").style.border = "2px solid #ff6961";
	} else {

		adultsError.innerHTML = "";
		document.getElementById("adults").style.border = "1px solid #999";
	}
	
	if (!regNumKids.test(numKids)) {
		if(numKids != "") {
		kidsError.innerHTML = "Wrond number of kids";
		document.getElementById("kids").style.border = "2px solid #ff6961";
	}
	} else {
		kidsError.innerHTML = "";
		document.getElementById("kids").style.border = "1px solid #999";
	}
	
	chkLunch = document.getElementById("inlineCheckbox1");
	chkLunchChoose = false;

	if(chkLunch.checked) {
		chkLunchChoose = true;
	}
	//Ispisivanje gresaka ili pravilno napisanih podataka
	rezultat = "";
	if (nizGreske.length != 0) {
		rezultat = "";
	} else {
		/*for (var i = 0; i < nizOk.length; i++) {
			rezultat += "<li>" + nizOk[i] + "</li>";
		}*/
		
		//Calculate price
		if (cruiseDestination.options[cruiseDestination.selectedIndex].text == "Thassos Limenas") {
			
			price = 30;
			priceAdults = price * numAdults;
			priceKids = (price / 2) * numKids;
			passNumb = (Number(numAdults) + Number(numKids));
			if (chkLunchChoose == false) {
				priceLunch = 0;
			} else {
				priceLunch = passNumb * 15;
			}
			princeFinal = priceAdults + priceKids + priceLunch;
		} else if (cruiseDestination.options[cruiseDestination.selectedIndex].text == "Thassos Potos") {
			price = 50;
			priceAdults = price * numAdults;
			priceKids = (price / 2) * numKids;
			passNumb = (Number(numAdults) + Number(numKids));
			if (chkLunchChoose == false) {
				priceLunch = 0;
			} else {
				priceLunch = passNumb * 10;
			}
			princeFinal = priceAdults + priceKids + priceLunch;
		} else if ((Number(numAdults) + Number(numKids)) > 16) {
			nizGreske.push("There can only fit 16 people on the boat");
			
		}

		rezultat += ' <table><thead><tr><th>Price Description</th><th>Number of passengers</th><th>Prices</th></tr></thead><tbody><tr><td>Cruise price</td><td> </td><td>' + price + ' e</td></tr>';
		if(numAdults != ""){
			rezultat += '<tr><td>Price for the adults</td><td>' + numAdults + '</td><td>' + priceAdults + ' e</td></tr>';
		} else {
			nizOk.push("Number of adults is " + numAdults);
			document.getElementById("adults").style.border = "1px solid #999";
		}
		if(numKids != ""){
			rezultat += '<tr><td>Price for the kids</td><td>' + numKids + '</td><td>' + priceKids + ' e</td></tr>';
		}

		if (chkLunchChoose != "") {
		rezultat += '<tr><td>Lunch Price</td><td>'+ passNumb +'</td><td>' + priceLunch + ' e</td></tr>';
		}
		rezultat += '</tbody><tfoot><tr><td>Your Price:</td><td></td><td>' + princeFinal + ' e</td></tr></tfoot></table>';

	}

	document.getElementById("resultCalcForm").style.display = "block";
	document.getElementById("resultCalcForm").innerHTML = rezultat;

}


	
//Funkcija koja proverava ispravnost unetih vrednosti u elemente formulara
function proveraKontakt() {
	//definisanje potrebnih promenljivih
	var fname, flname, email, subject, message, regFname, regLname, regEmail, regSubject, regMessage, nizKontaktOk, nizKontaktGreske, ispisNaStr;
	var fnameError, lnameError, emailError, msgsubError, msgError;	

	//Preuzimanje vrednosti iz formulara
	fname = document.getElementById("fname").value.trim();
	lname = document.getElementById("lname").value.trim();
	email = document.getElementById("email").value.trim();
	subject = document.getElementById("subject").value.trim();
	message = document.getElementById("message").value.trim();

	//Ispisi greski u HTML-u
	var fnameError = document.querySelector("#fnameError");
	var lnameError = document.querySelector("#lnameError");
	var emailError = document.querySelector("#emailError");
	var msgsubError = document.querySelector("#msgsubError");
	var msgError = document.querySelector("#msgError");

	//definisanje regularnih izraza
	regFname = /^[A-Z][a-z]+([\s][A-Z][a-z]+)*$/;
	regLname = /^[A-Z][a-z]{2,9}$/;
	regEmail = /^[a-z$.-_0-9]+\@[a-z.-_]+\.[a-z.]+$/;
	regSubject = /^[A-Z]([a-z\s""'',-_.])+$/;
	regMessage = /^[A-Z]([a-z\s""'',-_.])+$/;
	
	//provera vrednosti iz formulara
	if (!regFname.test(fname)) {
		fnameError.innerHTML = "Name is not entered correctly";
		document.getElementById("fname").style.border = "2px solid #ff6961";

	} else {
		fnameError.innerHTML = "";
		document.getElementById("fname").style.border = "1px solid #999";
	}

	if (!regLname.test(lname)) {
		lnameError.innerHTML = "Lastname is not entered correctly";
		document.getElementById("lname").style.border = "2px solid #ff6961";
	} else {
		lnameError.innerHTML = "";
		document.getElementById("lname").style.border = "1px solid #999";
	}

	if (!regEmail.test(email)) {
		emailError.innerHTML = "Email is not valid";
		document.getElementById("email").style.border = "2px solid #ff6961";
	} else {
		emailError.innerHTML = "";
		document.getElementById("email").style.border = "1px solid #999";
	}
	if (!regSubject.test(subject)) {
		msgsubError.innerHTML = "Please enter subject correctly";
		document.getElementById("subject").style.border = "2px solid #ff6961";
	} else {
		msgsubError.innerHTML = "";
		document.getElementById("subject").style.border = "1px solid #999";
	}
	if (!regMessage.test(message)) {
		msgError.innerHTML = "Please write message correctly";
		document.getElementById("message").style.border = "2px solid #ff6961";
	} else {
		msgError.innerHTML = "";
		document.getElementById("message").style.border = "1px solid #999";
	}
}



// Dinamičko ispisivanje sadržaja unutar strane pomoću objekata

var imgThumb = [{
	src: 'images/gallery/imgSmall1.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig1.jpg'
}, {
	src: 'images/gallery/imgSmall2.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig2.jpg'
}, {
	src: 'images/gallery/imgSmall3.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig3.jpg'
}, {
	src: 'images/gallery/imgSmall4.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig4.jpg'
}, {
	src: 'images/gallery/imgSmall5.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig5.jpg'
}, {
	src: 'images/gallery/imgSmall6.jpg',
	alt: 'Image gallery',
	bigImgSrc: 'images/gallery/imgBig6.jpg'
}, ];

var galerijaIspis = "<div id='gal'><ul id='grouped-image-list' class='link-list'>";

for (var i = 0; i < imgThumb.length; i++) {
	galerijaIspis +=

		'<li class="slike"><a href="' + imgThumb[i].bigImgSrc + '">' +
		'<img src="' + imgThumb[i].src + '" alt="' + imgThumb[i].alt + '"/>' +
		'</a></li>';


}

galerijaIspis += "</ul></div>";

document.querySelector("#imageHolder").innerHTML = galerijaIspis;



/*----- ------ ---- JQuery ----- ------ -----*/




$(document).ready(function () {
	// Vanillabox gallery pozivanje
	$('#grouped-image-list li a').vanillabox();

	//Modal
$('#designerModal').click(function(){
	$('#aboutDesigner').css('display','block');
	
});
$('#closeModal-btn').click(function(){
	$('#aboutDesigner').css('display','none');
});


// Accordion
$('#faq li').click(function () {
	$(this).find('ul').slideToggle(500);
	$(this).toggleClass('active');
});


	// Animated Navigation Link	
	$('#nav-links a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 70
		}, 1000);
		return false;
	});
	
	//Adding active class to current nav link
	$("#nav-links a").on("click", function (e) {
		e.preventDefault();
		if (!$(this).hasClass('active')) {
			$("#nav-links a.active").removeClass("active");
			$(this).addClass("active");
		}
	});

	//Hide and show Cruise Item Description based on click on a Cruise Item link
	$("#limenasBtn").click(function () {
		$("#limenasTabCont").toggle();
		$("#potosTabCont").hide();
	});
	$("#potosBtn").click(function () {
		$("#potosTabCont").toggle();
		$("#limenasTabCont").hide();
	});


	// Scroll to top

	$('#scrollToTop').click(function () {

		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('#scrollToTop').fadeIn(duration);
			} else {
				jQuery('#scrollToTop').fadeOut(duration);
			}
		});

		$('html').animate({
			scrollTop: 0
		}, 2000);
	});
	//Dropdown menu
	$("#nav-links li ul").css({
			display: "none",
			left: "auto"
		}),
		$("#nav-links li").hover(function () {
			$(this)
				.find('ul')
				.stop(true, true)
				.slideDown('fast');
		}, function () {
			$(this)
				.find('ul')
				.stop(true, true)
				.fadeOut('fast');
		});

	//Responsive Nav - SLide from right to left
	function responsiveNav() {
		$('.nav').toggleClass('nav-view');
		$('#nav-body').toggleClass('width-nav');
		$('#menuBtn').toggleClass("active");
	}
	$('#menuBtn').click(responsiveNav);

	$("#nav-links li a").click(function () {
		var navWidth = $(document).width();
		if(navWidth <= 768) {	
			responsiveNav();

			//Removing hover
			
			$("#nav-links li").unbind('hover');
		}
		
});
	
	//Zebra
	$("table tbody tr:even").css({
		'backgroundColor': '#f6f6f6'
	});


	$(function () {
		$(document).scroll(function () {
			var $nav = $("#nav");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});

	//Animated position on scroll

	(function($) {

		/**
		 * Copyright 2012, Digital Fusion
		 * Licensed under the MIT license.
		 * http://teamdf.com/jquery-plugins/license/
		 *
		 * @author Sam Sehnert
		 * @desc A small plugin that checks whether elements are within
		 *     the user visible viewport of a web browser.
		 *     only accounts for vertical position, not horizontal.
		 */
	  
		$.fn.visible = function(partial) {
		  
			var $t            = $(this),
				$w            = $(window),
				viewTop       = $w.scrollTop(),
				viewBottom    = viewTop + $w.height(),
				_top          = $t.offset().top,
				_bottom       = _top + $t.height(),
				compareTop    = partial === true ? _bottom : _top,
				compareBottom = partial === true ? _top : _bottom;
		  
		  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	  
		};
		  
	  })(jQuery);
	  
	  var win = $(window);
	  
	  var allMods = $(".module");
	  
	  allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("already-visible"); 
		} 
	  });
	  
	  win.scroll(function(event) {
		
		allMods.each(function(i, el) {
		  var el = $(el);
		  if (el.visible(true)) {
			el.addClass("come-in"); 
		  } 
		});
		
	  });

	  //Hover, click on destination links


	$('.descLinks a').hover(
		
		function(e) {
			e.preventDefault();
			 $(this).removeAttr("href");

			if($(this).attr('class') != 'isSee'){
				$(this).attr('class', 'isSee');
				  var titleInBubble = $(this).attr('mytitle');
				  
				  $('div.descName').text(titleInBubble);
				 
				  var $atopPoz = $(this).css('top');
				  $('div.descName').css('top', $atopPoz);
				  var $arightPoz = $(this).css('right');
				  $('div.descName').css('right', $arightPoz);
				  $('div.descName').css('display', 'block');
			  }	
		}, function() {	

			$(this).removeClass('isSee');
			titleInBubble = '';
		$('div.descName').text(' ');
		$('div.descName').css('display', 'none');	
		}
	  );

	 	
			$('.descLinks a').on('click mouseover', function(){
				

				e.preventDefault();
				$(this).removeAttr("href");
   
			   if($(this).attr('class') != 'isSee'){
				   $(this).attr('class', 'isSee');
					 var titleInBubble = $(this).attr('mytitle');
					 
					 $('div.descName').text(titleInBubble);
					
					 var $atopPoz = $(this).css('top');
					 $('div.descName').css('top', $atopPoz);
					 var $arightPoz = $(this).css('right');
					 $('div.descName').css('right', $arightPoz);
					 $('div.descName').css('display', 'block');
				 }	else {
					$(this).removeClass('isSee');
					titleInBubble = '';
				$('div.descName').text(' ');
				$('div.descName').css('display', 'none');	
				 }



			});
		



			

	//End of document.ready
});
