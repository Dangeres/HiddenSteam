// Get at the DOM controls used in the sample.

var storage = chrome.storage.local;

var submitButton = document.getElementsByClassName('save_settings')[0];
var parentPIN = document.getElementById('steam_parental_password_box');
var hideLogin = document.getElementsByName('switch1')[0];
var unlock = document.getElementsByName('switch2')[0];
var accs = document.getElementsByName('switch3')[0];
var all_accounts = document.getElementById("accounts");

loadSettings();
submitButton.addEventListener('click', saveSettings);

function saveSettings(){
	console.log("==============================");
	var pin = parentPIN.value;
	
	storage.set({'hide': hideLogin.checked}, function() { //HIDE LOGIN
		console.log('Hide login: '+hideLogin.checked);
	});
	
	storage.set({'unlock': unlock.checked}, function() { //UNLOCK PARENT
		console.log('Unlock parent: '+unlock.checked);
	});
	
	storage.set({'accounts': accs.checked}, function() { //float accounts
		console.log('Float accounts: '+accs.checked);
	});
	
	storage.set({'allaccounts': all_accounts.value}, function() { //all float accounts
		console.log('Float all accounts: '+all_accounts.value);
	});
	
	if(pin.length<4){
		parentPIN.setAttribute("style","border:3px solid red;");
		var temp = document.getElementsByClassName('passw')[0];
		if(!document.getElementsByClassName("wrong")[0]){
			var newtemp = document.createElement('a');
			newtemp.className ="wrong";
			newtemp.innerHTML = "Wrong parent pin!";
			temp.appendChild(newtemp);
		}
		console.log("Wrong pin!");
		return;
	}
	storage.set({'pin': pin}, function() {
		// Notify that we have.
		console.log('PIN set: '+pin)
	});
	
}

function loadSettings(){
	console.log("==============================");
	storage.get('pin', function(settings) {
    // To avoid checking settings.pin we could specify storage.get({pin: ''}) to
    // return a default value of '' if there is no css value yet.
    if (settings.pin) {
      parentPIN.value = settings.pin;
	  console.log("Reset value of pin : "+settings.pin);
    }
	});
	
	storage.get('hide', function(settings) {
    if (settings.hide) {
      hideLogin.checked = settings.hide;
	  console.log("Reset hide login : "+settings.hide);
    }
	});
	
	storage.get('unlock', function(settings) {
    if (settings.unlock) {
      unlock.checked = settings.unlock;
	  console.log("Reset unlock : "+settings.unlock);
    }
	});
	
	storage.get('accounts', function(settings) {
    if (settings.accounts) {
      accs.checked = settings.accounts;
	  storage.get('allaccounts', function(sett) {
		all_accounts.value = sett.allaccounts;
		console.log("Reset float all accounts : "+sett.allaccounts);
	  });
	  console.log("Reset float accounts : "+settings.accounts);
    }
	});
}