function switchElementDisplay(name) {
  var x = document.getElementById(name);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function setElementDisplay(name, value) {
	var x = document.getElementById(name);
	x.style.display = value;
}

function removeClass(name, class_name) {
	var element = document.getElementById(name);
	element.classList.remove(class_name)
	}

function switchAbstract(name) {
  switchElementDisplay("showAbstractButton"+name)
  switchElementDisplay("hideAbstractButton"+name)
  switchElementDisplay("abstract"+name)
}

function showAbstract(name) {
	setElementDisplay("showAbstractButton"+name, "none");
	setElementDisplay("hideAbstractButton"+name, "block");
	
	var abstract = document.getElementById("abstract"+name, "block");
	abstract.classList.remove("overflow")
}

function hideAbstract(name) {
	setElementDisplay("showAbstractButton"+name, "block");
	setElementDisplay("hideAbstractButton"+name, "none");
	var abstract = document.getElementById("abstract"+name, "block");
	abstract.classList.add("overflow")
}
