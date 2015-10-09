function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var himg=document.createElement("img");
	himg.setAttribute("src","images/5.jpg");
	himg.setAttribute("alt","my image gallery");
	himg.setAttribute("id","placeholder");
	var lp=document.createElement("p");
	lp.setAttribute("id","description");
	lp.appendChild(document.createTextNode("Choose a image."))
	var gallery=document.getElementById("imagegallery");
	insertAfter(himg,gallery);
	insertAfter(lp,himg);
}
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			showPic(this);
			return false;
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
			var source=whichpic.getAttribute("href");
			var placeholder=document.getElementById("placeholder");
			placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
			var txt=whichpic.getAttribute("title");
			var description=document.getElementById("description");
			if(description.firstChild.nodeType==3){
				description.lastChild.nodeValue=txt;
			}
		}
		return true;
		}
function countBodyChildren(){
		var body_element=document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
