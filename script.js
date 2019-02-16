var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button2 = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button2);
	button2.appendChild(document.createTextNode("Delete!"));
	button2.onclick = removeParent;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done")
}

function deleteButton(){
	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("Delete!"))
	items[i].appendChild(button1)
	button1.onclick = removeParent;
}


function listLength(){
	return items.length;
}

for(i=0;i<listLength();i++){
	deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}