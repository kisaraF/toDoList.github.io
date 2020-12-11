let addButton = document.getElementById('addBtn');
addButton.addEventListener('click' , add);

function add(){
	let input = document.getElementById('addThis').value;
	let newLi = document.createElement('li');
	newLi.id = "listNewItem";
	newLi.style.listStyleType = "none";
	newLi.style.backgroundColor = "#f4f4f4";
	newLi.style.padding = "10px";
	newLi.style.marginBottom = "10px";
 	newLi.appendChild(document.createTextNode(input));
 	let deleteBtn = document.createElement('button')
 	console.log(newLi);
 	let list = document.querySelector('.list');
 	list.insertBefore(newLi, list.childNodes[2]);

 	let delBtn = document.createElement('button');
 	delBtn.id = "doneButn";
 	delBtn.className = "delete";
 	delBtn.setAttribute("onclick" , "done(this)");
 	delBtn.appendChild(document.createTextNode("Remove"));
 	newLi.appendChild(delBtn);

 	let doneSubBtn = document.createElement('button');
 	doneSubBtn.id = "alreadyDone";
 	doneSubBtn.className = "done"; 	
 	doneSubBtn.setAttribute("onclick" , "finished(this)");
 	doneSubBtn.appendChild(document.createTextNode("Done"));
 	newLi.appendChild(doneSubBtn);
}

function done(el){
		//let del = document.getElementById('doneButn');
		let li = el.parentNode;
		li.remove();
}

function finished(el){
	//let liText = document.getElementById('alreadyDone');
	let liT = el.parentNode;
	liT.style.textDecoration = "line-through";
}