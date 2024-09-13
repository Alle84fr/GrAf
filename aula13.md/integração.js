let url https://viacep.com.br/ws/01001000/json/;

let api = await fetch(url,(method:"get", headers:{"content-type": "aplication/json"}))

let resposta = await api.json():
console.log(resposta)