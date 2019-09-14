import React, { Component } from 'react';

class PostList extends Component {

    state = {
        posts: [
          {
            id: 1,
            author: {
              name: 'Julio Alcantara',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            date: '04 Jun 2019',
            content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
            comments: [
              {
                id: 1,
                author: {
                  name: 'Diego Fernandes',
                  avatar: 'http://url-da-imagem.com/imagem.jpg'
                },
                content: "Conteúdo do comentário"
              }
            ],
          },
          {
            id: 2,
            // Restante dos dados de um novo post
          }
        ]
      };

      render (){
        return(
            <div >

                <h1>Teste</h1>

            </div>
        );
    }

}


export default PostList