
function load() {
	if (!localStorage.checkins)
		return;
	var text = "";
	chrome.storage.local.get('savedtext', function (result) {
		text = result.savedtext;
		var mytext = document.getElementById('my_text');
		mytext.innerHTML = text;
	})
}
function save(){
	if (!localStorage.checkins) localStorage.checkins = JSON.stringify([]);
	var text =  document.getElementById('my_text').value;
	if(!text){
		 message('Error: No value specified');
		return;
	}
	chrome.storage.local.set({'savedtext': text});
}
window.onbeforeunload = function (e) {
	 save();
}
	
		
document.addEventListener('DOMContentLoaded', function () {
  load();
  document.querySelector('button').addEventListener('click', save);
  main();
});
