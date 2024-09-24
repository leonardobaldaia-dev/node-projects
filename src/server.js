import http from 'node:http'

//Request utilizado para o cliente enviar requisições como por exemplo, criar um login, nome
//criar um usuario (name, email, senha)

//Response serve para devolver uma resposta para essas requisições

// METODOS: GET, POST, PUT, PATCH, DELETE

// GET => BUSCAR UMA INFORMAÇÃO DO BACK-END
// POST => CRIAR UMA INFORMAÇÃO NO BACK-END
// PUT => AUTUALIZAR UM RECURSO NO BACK-END
//PATCH => ATUALIZAR UMA INFORMAÇÃO ESPECIFICA DE UM RECURSO NO BACK END
//DELETAR => DELETAR UM RECURSO DO BACK-END

// Stateful - Stateless

const users=[]

const server = http.createServer((req, res) =>{
    const{method, url} = req

    if (method === 'GET' && url === '/users'){
        return res.end(users)
    }
    
    if (method === 'POST' && url === '/users'){
        users.push({
            id:1,
            name: 'John Doe',
            email:'johndoe@example.com'
        })
        return res.end('Criação de usuário')
    }

})

server.listen(3031)

