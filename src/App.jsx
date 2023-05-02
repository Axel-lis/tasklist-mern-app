import './App.css'
import './index.css';
import ListaTareas from './ListaTareas'
import AgregarTarea from './AgregarTarea'
import EditarTarea from './EditarTarea'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div className="container">
  <a className="navbar-brand" href="/">TaskList App✔️</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="AgregarTarea">Agregar Tarea</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Calendario</a>
      </li>
    </ul>
  </div>
</div>
</nav>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<ListaTareas />}></Route>
        <Route path='/agregartarea' element={<AgregarTarea />}></Route>
        <Route path='/editartarea/:idtarea' element={<EditarTarea />}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
