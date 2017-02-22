window.onload = function () {
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "gwdiv");
	newDiv.innerHTML = '<p>Content to go here</p>';
	document.body.insertBefore(newDiv, document.body.firstChild);
	document.body.firstChild
}