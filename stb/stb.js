    	//Hide HeaderDiv
		window.onscroll = function() {
		  if (window.pageYOffset > 120) {
		  	document.getElementById("topnav").style.top = 0;
		  	document.getElementById("topnav").style.position = 'fixed'
		  } else if(window.pageYOffset <120) {
		  		document.getElementById("topnav").style.top = document.getElementById("headDiv").style.top
		  		document.getElementById("topnav").style.position = 'absolute'
		  		document.getElementById("headDiv").style.opacity = 1
		  }
		}

		//Responsive Hamburger Menu
		function myFunction() {
		  var x = document.getElementById("topnav");
		  if (x.className === "topnav") {
		    x.className += " responsive";
		  } else {
		    x.className = "topnav";
		  }
		}

		// arrow animation
		var arrow_clicked = false;
		var arrow = document.getElementById("arrow") 

		arrow.onclick = function () {
	      this.classList.toggle ("checked");

	      if(arrow_clicked==false){
	      	window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
	      	arrow_clicked = true;
	      }
	      else if(arrow_clicked==true){
	      	window.scrollTo(0, 0)
	      	arrow_clicked = false;
	      }
	    } 