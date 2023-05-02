import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
function EditarTarea(){

const params = useParams();
//Hooks
const[titulo, setTitulo] = useState('')
const[fecha, setFecha] = useState('')
const[descripcion, setDescripcion] = useState('')
const[categoria, setCategoria] = useState('')

//para volver atras al index
const navegar = useNavigate()

useEffect(() => {
   axios.post('/api/tareas/obtenerdatatareas', {idtarea: params.idtarea})
   .then(res =>{
    
    console.log(res.data[0]);
 
    const datatarea = res.data[0];

    setTitulo(datatarea.titulo);
    setFecha(datatarea.fecha);
    setDescripcion(datatarea.descripcion);
    setCategoria(datatarea.categoria);
   })
}, [])
//funcion editarTarea
function editarTarea(){
//creamos nuevo objeto para editar tarea
const actualizarTarea = {
    titulo: titulo,
    fecha: fecha,
    descripcion: descripcion,
    categoria: categoria,
    idtarea: params.idtarea
}
//hacer la petencion usando axios
axios.post('/api/tareas/actualizatarea', actualizarTarea)

  .then(res =>{
    console.log(res.data)
    Swal.fire('Su tarea fue actualizada con éxito.')
    navegar('/')
  })
  .catch(err=>{console.log(err)})
}

    return(
<div className="container border rounded solid">
<div className="row">
    <h2 className="mt-5">Editar tarea</h2>
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
  <button onClick={editarTarea} className="btn btn-success mb-3">Editar tarea</button>
</div>
</div>

</div>
    )
 }
export default EditarTarea;