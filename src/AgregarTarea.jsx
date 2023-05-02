import React from "react";
import { useState } from "react";
import uniquid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
function AgregarTarea(){
//Hooks
const[titulo, setTitulo] = useState('')
const[fecha, setFecha] = useState('')
const[descripcion, setDescripcion] = useState('')
const[categoria, setCategoria] = useState('')

const navegar = useNavigate()

function agregarTarea(){
  var tarea = {
    titulo: titulo,
    fecha: fecha,
    descripcion: descripcion,
    categoria: categoria,
    idtarea: uniquid()
  }
  console.log(tarea)
  axios.post('/api/tareas/agregartarea', tarea)
  .then(res =>{
    //alert(res.data)
    Swal.fire('Tarea agregada con éxito!')
    navegar('/')
  })
  .catch(err=>{console.log(err)})
}

return(
<div className="container border rounded solid">
<div className="row">
    <h2 className="mt-5">Agregar una tarea</h2>
</div>
<div className="row">
 <div className="col-12">
  <div className="mb-3">
    <label htmlFor="titulo" className="form-label">Titulo</label>
    <input type="text" className="form-control" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="fecha" className="form-label">Fecha</label>
    <input type="datetime-local" className="form-control" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="descripcion" className="form-label">Descripcion</label>
    <textarea className="form-control" rows="3"  value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="categoria" className="form-label">Categoria</label>
    <input type="text" className="form-control"  value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}></input>
  </div>
  <button onClick={agregarTarea} className="btn btn-success mb-3">Crear Evento</button>
</div>
</div>

</div>
    )
}
export default AgregarTarea;