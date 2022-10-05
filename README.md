OBS: Iniciar o servidor antes de testar a api com o comando: "YARN DEV"

**ROTAS QUE NAO PRECISAM DE AUTENTICACAO**

CRIAR USUARIO:
Para criar o usuario, utilizaremos o metodo POST com o end point "http://localhost:3000/users"
````
Corpo da requisicao:
{
   "email": "exemplo@mail.com.br",
   "name": "Nome do Usuario",
   "password": "123456789"
}
````

````
Resposta em caso de sucesso:
{
   "email": "exemplo@mail.com.br",
   "name": "Nome do Usuario",
   "password": "has de senha exemplo "$2a$10$xfrvTLLc9Au2jIOlMZCtnOsERxy3n3VTdesVHHpCIhnTB.7wUfY4S"",
   "id": "id do usuario"
}

OBS: nao e possivel criar 2 usuarios com o mesmo EMAIL.
````
***********************************************************************************************
LISTAR USUARIOS:
Para listar os usuarios, utilizaremos o metodo GET com o end point "http://localhost:3000/users"
````
Resposta da requisicao:

[
  {
	"email": "exemplo@mail.com.br",
	"name": "Nome do Usuario",
	"password": "has de senha exemplo "$2a$10$xfrvTLLc9Au2jIOlMZCtnOsERxy3n3VTdesVHHpCIhnTB.7wUfY4S"",
	"id": "id do usuario"
  },
  {
	"email": "exemplo@mail.com.br",
	"name": "Nome do Usuario",
	"password": "has de senha exemplo "$2a$10$xfrvTLLc9Au2jIOlMZCtnOsERxy3n3VTdesVHHpCIhnTB.7wUfY4S"",
	"id": "id do usuario"
  },
  {
	"email": "exemplo@mail.com.br",
	"name": "Nome do Usuario",
	"password": "has de senha exemplo "$2a$10$xfrvTLLc9Au2jIOlMZCtnOsERxy3n3VTdesVHHpCIhnTB.7wUfY4S"",
	"id": "id do usuario"
  }
]
````
***********************************************************************************************
FAZER LOGIN:
Para fazer login, utilizaremos o metodo POST com o end point "http://localhost:3000/users/login"
````
Corpo da requisicao:
{
   "email": "exemplo@mail.com.br",
   "password": "123456789"
}
````
````
Resposta em caso de sucesso:
"TOKEN DE USUARIO EXEMPLO ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXMucmljYXJkb0Bob3RtYWlsLmNvbSIsImlhdCI6MTY2Mzg5MjAxOSwiZXhwIjoxNjYzOTc4NDE5fQ.A1mnenZFRE8Qg6bd9Cw83MHRTw5zXds2ia1hb1B3gkA")"
````
_______________________________________________________________________________________________________________________________________________________________________

**ROTAS QUE PRECISAM DE AUTENTICACAO**

ATUALIZAR O USUARIO:
Para atualizar o usuario, utilizaremos o metodo PUT com o end point "http://localhost:3000/users/${id}"
````
Corpo da requisicao:
{
   "email": "alteraEmail@mail.com",
   "name": "Altera Nome"
}
````
````
Resposta em caso de sucesso:
{
   "email": "exemplo@mail.com.br",
   "name": "Nome do Usuario",
   "password": "has de senha exemplo "$2a$10$xfrvTLLc9Au2jIOlMZCtnOsERxy3n3VTdesVHHpCIhnTB.7wUfY4S"",
   "id": "id do usuario"
}
````
***********************************************************************************************
DELETAR USUARIO:
Para deletar o usuario, utilizaremos o metodo DELTE com o end point "http://localhost:3000/users/${id}"
````
Resposta da requisicao:
{
  "Deleted User"
}
````
Enjoy
