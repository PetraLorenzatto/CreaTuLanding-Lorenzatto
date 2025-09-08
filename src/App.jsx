import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <div className="barra">
        <NavBar />
      </div>
      <div className="texto-principal">
      <ItemListContainer greeting="¡Bienvenidos a Brillo Salvaje!" />
      </div>
    </>
  )
}

export default App
