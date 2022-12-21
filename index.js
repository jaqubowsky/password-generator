let password1 = document.getElementById("password1-el");
let password2 = document.getElementById("password2-el");
let generatePasswordBtn = document.getElementById("generate-btn-el");
let passLen = document.querySelector(".pass-len-el");

const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+}{':?><-=[];'/.,";

function getRandomNumber() {
	return Math.floor(Math.random() * characters.length);
}

function generateRandomPassword(len) {
	let password = "";
	var len = parseInt(len);
	if (len <= 15 && len > 0) {
		for (i = 0; i < len; i++) {
			password += characters[getRandomNumber()];
		}
		return password;
	} else {
		passLen.focus();
	}
}

function clearInputField() {
	passLen.value = "none";
}

generatePasswordBtn.addEventListener("click", (e) => {
	password1.textContent = generateRandomPassword(passLen.value);
	password1.style.cursor = "pointer";
});

generatePasswordBtn.addEventListener("click", (e) => {
	password2.textContent = generateRandomPassword(passLen.value);
	password2.style.cursor = "pointer";
	clearInputField();
});

function copyToClipBoard(password) {
	navigator.clipboard.writeText(password.textContent);
}

password1.addEventListener("click", (e) => {
	copyToClipBoard(password1);
});

password2.addEventListener("click", (e) => {
	copyToClipBoard(password2);
});
