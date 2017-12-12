(function (){
	var login = document.getElementById('account_pulldown');
	login.textContent = '[DELETED]';
	document.getElementsByTagName('h2')[0].innerHTML = '[name deleted]';
	document.getElementsByTagName('title')[0].innerHTML = '[name deleted]';
	var parent = document.getElementById('steam_parental_password_box');
	if(parent!= null){
		parent.setAttribute('value','1378');
		document.getElementById('submit_btn').dispatchEvent(new Event('click'));
	}
})();