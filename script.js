//your JS code here. If required.
function submit(){

	const title=document.getElementById('title').value.trim();
	const author=document.getElementById('author').value.trim();
	const isbn=document.getElementById('isbn').value.trim();
	if(title==='' || author==='' || isbn===''){
		alert("Please fill in all fields");
		return
	}

	const booklist=document.getElementById('book-list').value
	const row=document.createElement('tr')

	row.innerHTML=`
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete">X</button></td>
	`
	booklist.appendChild(row)

	document.getElementById("title").value=""
	document.getElementById("author").value=""
	document.getElementById("isbn").value=""
}
