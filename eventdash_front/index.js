function enviarDados(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("valores digitados = "+txtLogin+" / " + txtSenha);

    var dados = {
        racf:txtLogin,
        email:txtLogin,
        senha:txtSenha,
    }
    var cabecalho = {
        method: "POST",
        body  : JSON.stringify(dados),
        headers : {
            "content-type": "application/json"
        }
    };

    fetch("http://localhost:8080/login",cabecalho).then(res => trataResultado(res));
}

function trataResultado(res){
    if (res.status == 200){
        res.json().then(user => {
            
            localStorage.setItem("userDASH",JSON.stringify(user));
            
            window.location = "relatorios.html";
        })
    }
    else if (res.status == 403){
        document.getElementById("msgErro").innerHTML = "Acesso Negado - Verifique Usuario/Senha";
    }
    else{
        document.getElementById("msgErro").innerHTML = "Erro Desconhecido";
    }
}

var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})
