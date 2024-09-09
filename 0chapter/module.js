const prompt = require("prompt-sync")({ sigint: true });

function User(epithet)
{
	var username, password;

	function change() {
		publicAPI.login = tired;
	}

	function doLogin(user,pw) {
		user = prompt("Your name: ");
		pw = prompt("Your password: ");
		username = user;
		password = pw;

		console.log(`You are a ${epithet} ${user} with password ${pw}` ); // like linux backquote
	}

	function tired() {
		console.log("I'm kinda fed up with talking, kys");
	}

	var publicAPI = {
		login: doLogin,
		change: change,
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User("good");

fred.login();
fred.change();
fred.login(); // tired() runs
