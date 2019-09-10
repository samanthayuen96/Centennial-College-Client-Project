// Modal Image Gallery
function onClick(element) {
	var fullsize = $(element).attr("data-image");
	
	if ($(element).attr("class") == "portrait") {
		document.getElementById("myImage").style.width = "50%";
	}

	else {
		document.getElementById("myImage").style.width = "100%";
	}
	document.getElementById("myImage").src = fullsize
	document.getElementById("lightbox").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
}

