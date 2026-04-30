const telaSigiIn = document.getElementById("telaSignIn");
const telaLogin = document.getElementById("telaLogin");


let login = "Vasco123";
let senha = "1898";

function goSignIn() {
    window.location.href="telaRegistro.html"; //Isso muda a pagina atual
    alert("go To signIn screen");
    
}

function goLogin() {
    window.location.href="index.html";
    alert("go To login screen");
    
}

function verificarLogin() {

    const loginBox = document.getElementById("loginBox");
    const passwordBox = document.getElementById("loginPasswordBox");
    
    let loginInput = loginBox.value;
    let passwordInput = passwordBox.value;

    if (loginInput == login && passwordInput == senha) {
        alert("Welcome!!");
        window.location.href='games.html';
    }else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }

    loginInput = loginBox.value = '';
    passwordInput = passwordBox.value = '';

};

function registrar() {

    let userEmail = document.getElementById("emailBox").value;
    let userLogin = document.getElementById("SignInLoginBox").value;
    let userPassword = document.getElementById("signInpasswordBox").value;
    let verifyPassword =  document.getElementById("signInpasswordBox2").value;

}

function viewGames() {
    window.location.href="games.html"
}
