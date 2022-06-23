import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Video from "../components/Video"

/* - */
function Event() {

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          <Video />
          <Sidebar />
        </main>
      </div>
    )
  }
  
export default Event;


 /*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas
    23/06/2022   
  */
  