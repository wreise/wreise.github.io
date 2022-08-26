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
function switchVisibility(nameShow, nameHide){
	setElementDisplay(nameHide, "none");
	setElementDisplay(nameShow, "block");
	}

function showAbstract(name) {
	switchVisibility("hideAbstractButton"+name, "showAbstractButton"+name);
	
	var abstract = document.getElementById("abstract"+name, "block");
	abstract.classList.remove("overflow")
}

function hideAbstract(name) {
	switchVisibility("showAbstractButton"+name, "hideAbstractButton"+name);
	var abstract = document.getElementById("abstract"+name, "block");
	abstract.classList.add("overflow")
}



function showSection(name) {
	switchVisibility("hideSectionButton"+name, "showSectionButton"+name);
	setElementDisplay("section"+name, "block")
}

function hideSection(name) {
	switchVisibility("showSectionButton"+name, "hideSectionButton"+name);
	setElementDisplay("section"+name, "none")
}
