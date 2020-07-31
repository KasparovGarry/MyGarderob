var modal = document.getElementById('mymodal');
var images = document.getElementsByClassName('trend-images');
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < images.length; i++) {
  	var img = images[i];
  	img.onclick = function(evt) {
    	modal.style.display = "block";
    	modalImg.src = this.src;
  	}
}

span.onclick = function() {
  	modal.style.display = "none";
}

modal.onclick = function() {
  	modal.style.display = "none";
}  