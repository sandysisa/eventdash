function gerarAlarme(){

    var url = "http://localhost:8080/alarme";

    fetch(url).then(res => res.json()).then(listaAlarmes => preencheTabela(listaAlarmes));

    /* se eu fosse ler como uma instrução estruturada

    res = fetch(url);
    listaEventos = res.json();
    preencheTabela(listaEventos);

    */

}

function preencheTabela(listaAlarmes){
    console.log(listaAlarmes);
    var strTabela = `<table class="table">
                        <thead>
                            <th> nome </th>
                            <th> descricao </th>
                        </thead> 
                        
                        <tbody> `;

    // agora eu preciso percorrer a lista e preencher cada uma das linhas
    for (i=0; i<listaAlarmes.length; i++){
        let alarme = listaAlarmes[i];

        strTabela = strTabela + `<tr>
                                     <td> ${alarme.nome} </td>
                                     <td> ${alarme.descricao} </td>
                                 </tr>`; 

    }

    strTabela = strTabela + `   </tbody>
                             </table>`;
    
    document.getElementById("relatorio").innerHTML = strTabela;

}