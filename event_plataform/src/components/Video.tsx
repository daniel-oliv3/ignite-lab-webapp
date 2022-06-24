import { DiscordLogo, Lightning } from "phosphor-react"


/* - */
function Video() {

    return (
      <div  className="flex-1">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>   
        </div>

        <div className="p-8 max-w-[1100] mx-auto">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">
                Aula 01 - Abertura do Ignite Lab
              </h1>
              <p className="mt-4 text-gray-200">
                Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
                <DiscordLogo size={24}/>
                Comunidade do Discord
              </a>

              <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
                <Lightning size={24}/>
                Acesse o desafio
              </a>
            </div>            
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
  

  export default Video  

   /*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas
    23/06/2022   
  */