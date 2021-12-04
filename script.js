function Validate(){

	var password1 = document.getElementById("password1").value;

	var password2 = document.getElementById("password2").value;

		if (password1 != password2) {

		document.getElementById("message").innerHTML = "Password do not match!";

		return false;

	}

	return true;

}