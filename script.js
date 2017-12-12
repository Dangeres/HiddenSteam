(function (){
	var storage = chrome.storage.local;
	
	storage.get('hide', function(settings) {
    if (settings.hide) {
		var login = document.getElementById('account_pulldown');
		login.textContent = '[DELETED]';
		login.setAttribute("style","color:red;font-size: 15px;");
    }
	});
	
	storage.get('unlock', function(settings) {
    if (settings.unlock) {
		var parent = document.getElementById('steam_parental_password_box');
		if(parent!= null){
			storage.get('pin', function(setpin) {
				
			parent.setAttribute('value',setpin.pin);
			console.log(setpin.pin);
			document.getElementById('submit_btn').dispatchEvent(new Event('click'));
			
			});
		}
	}
	});
	
	storage.get('accounts', function(settings) {
    if (settings.accounts) {
	var bar = document.getElementById('global_actions');
	var mainblock = document.createElement('div');
	mainblock.className = 'accs';
	//mainblock.textContent = "Here will be text.";
	bar.appendChild(mainblock);
	
	storage.get('allaccounts', function(sett) {
		var temparray = sett.allaccounts.split("\n");
		for(var i=0;i<temparray.length;i++){
			var temp = document.createElement("a");
			temp.className = "anaccount";
			temp.setAttribute("href",temparray[i].split(";")[0]);
			temp.innerHTML = temparray[i].split(";")[1];
			mainblock.appendChild(temp);
		}
		//mainblock.innerHTML = sett.allaccounts;
	});
	
	}
	});
})();