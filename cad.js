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

const url = 'https://go-wash-api.onrender.com/api/user';

async function cadastrar(){

          let name = document getElementByld("name").value;
          let cpf_cnpj = document getElementByld("cpf_cnpj").value;
          let email = document getElementByld("email").value;
          let password = document getElementByld("password").value;
          let birthday = document getElementByld("birthday").value;
          

          let api = await fetch(URL, {method:"post", body:JSON.stringify(
                    {
                    "name": name,
                    "cpf_cnpj": cpf_cnpj,
                    "email": email,
                    "password": password
                    "birthday": birthday,
                    "terms": 1,
                    "user_type_id": 1
                    }
          ),
          headers:{
                    "Content-type":"application/json"
          }
          })   /* Observa que só agora fecha chave antes do method */
}