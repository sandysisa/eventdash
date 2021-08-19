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
