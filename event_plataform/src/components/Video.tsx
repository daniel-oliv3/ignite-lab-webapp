import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"


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
              <p className="mt-4 text-gray-200 leading-relaxed">
                Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src="https://github.com/daniel-oliv3.png" 
                  alt="" 
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">Daniel Oliveira</strong>
                  <span className="text-gray-200 text-sm block">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24}/>
                Comunidade do Discord
              </a>

              <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24}/>
                Acesse o desafio
              </a>
            </div>            
          </div>

          <div className="gap-8 mt-20 grid grid-cols-2">
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material complementar</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o material complementar para acelerar o seu desenvolimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>

            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Wallpapers exclusivos</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>

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