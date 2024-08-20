const prompt = require("prompt-sync")({ sigint: true });

function User()
{
	var username, password;

	function doLogin(user,pw) {
		user = prompt("Your name: ");
		pw = prompt("Your password: ");
		username = user;
		password = pw;

		console.log(`You are ${user} with password ${pw}` ); // like linux backquite
	}
	var publicAPI = { login: doLogin };

	return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login();
