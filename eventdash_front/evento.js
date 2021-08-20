function gerarRelatorio(){
    var dtIni = document.getElementById("txtDataIni").value;
    var dtFim = document.getElementById("txtDataFim").value;

    var url = "http://localhost:8080/eventos?ini="+dtIni+"&fim="+dtFim;

    fetch(url).then(res => res.json()).then(listaEventos => preencheTabela(listaEventos));

    /* se eu fosse ler como uma instrução estruturada

    res = fetch(url);
    listaEventos = res.json();
    preencheTabela(listaEventos);

    */

}

function preencheTabela(listaEventos){
    console.log(listaEventos);
    var strTabela = `<br> <table class="table">
                        <thead>
                            <th class="text-center"> Número da Sequência </th>
                            <th class="text-center"> Data </th>
                            <th class="text-center"> Alarme </th>
                            <th class="text-center"> Hostname </th>
                            <th class="text-center"> IP </th>
                        </thead> 
                        
                        <tbody> `;

    // agora eu preciso percorrer a lista e preencher cada uma das linhas
    for (i=0; i<listaEventos.length; i++){
        let evento = listaEventos[i];

        strTabela = strTabela + `<tr>
                                     <td class="text-center"> ${evento.numSeq} </td>
                                     <td class="text-center"> ${evento.dataEvento} </td>
                                     <td class="text-center"> ${evento.alarme.nome} </td>
                                     <td class="text-center"> ${evento.equipamento.hostname} </td>
                                     <td class="text-center"> ${evento.equipamento.ipaddr} </td>
                                 </tr>`; 

    }

    strTabela = strTabela + `   </tbody>
                             </table>`;
    
    document.getElementById("relatorio").innerHTML = strTabela;

}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html"
}
