/*let - variável com escolpo em bloco
get= método de solicitar "pegar a informação", procurar, obter informação
post = enviar informação, que que será posta no bando de dado ! pode atualizar, mas não é exatamente correto
put = atualizar, altera, dado já existe e será modificado
delete = apaga registro
por isso colocamos get
{} tudo quee stá dentro é objeto
fetch(url,{metodo:post (ou get ou put), body:json.stringify (converte o json({coloca infomações do cod}), headers:{envia json e recebe json })
await aguarda a requisição - para ser async - função assíncrona, "não contante" 
depois faz conferimento com if, neste caso*/


/* api governo
viaCEP - */
const url = "https://go-wash-api.onrender.com/api/user"; 

async function cadastrar(){

          let name = document.getElementById("name").value;      /*método*/
          let cpf_cnpj = document.getElementById("cpf_cnpj").value;
          let email = document.getElementById("email").value;
          let password = "123456";
          let birthday = "2000-10-12";
          let terms = 1;
          let user_type_id = 1;


         let api = await fetch(url,{method:"POST", body:JSON.stringify("name": name, "email": email,"user_type_id":1, "password": "123456","cpf_cnpj": cpf_cnpj, "terms": 1,"birthday": "2000-10-12"})

          headers:{"Content-type":"application/json"}
          }   /* Observa que só agora fecha chave antes do method */


          if(api.ok){
                    let resposta = await api.json();
                    console.log(resposta);
                    alert("verificar e-mail");
                    return 
          }

          let respostaError = await api.json();
          console.log(ResponseError)
          /*alert(ResponseError.data.errors.cpf_cnpj[0])*/
          /*alert(ResponseError.data.errors.email[0])
          alert(ResponseError.data.errors.cpf_name[0])*/    /* porque [0]? nos outros erros coloquei 1 e 2 achando que seria n° de erro */
}

