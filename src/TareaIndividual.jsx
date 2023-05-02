import React from "react";
import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

function TareaIndividual({tarea}){

const navegar = useNavigate()
//animacion scroll al bajar
useEffect(() => {
    AOS.init()
}, [])

 //funcion borrar tarea
 function borrartarea() {
    axios.post('/api/tareas/borrartarea', { idtarea: tarea._id })
      .then(res => {
        //console.log(res.data);
        Swal.fire({
          icon: 'error',
          title: 'Tarea Eliminada',
          showConfirmButton: true,
          showCancelButton: false,
          preConfirm: () => {
            return new Promise((resolve) => {
              resolve();
            });
          }
        }).then(() => {
          navegar(0);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
    return(
        <div className="container">
            <div className="row">
                <div data-aos='flip-right'>
                <ul className="list-group">
                     <li className="list-group-item">{tarea._id}</li>
                     <li className="list-group-item">{tarea.titulo}</li>
                     <li className="list-group-item">{tarea.fecha}</li>
                     <li className="list-group-item">{tarea.descripcion}</li>
                     <li className="list-group-item">{tarea.categoria}</li>
                  <Link to={`/editartarea/${tarea._id}`}> <li className="btn btn-success mt-2">Editar</li> </Link> 
                  &nbsp;
                 <button className="btn btn-danger" onClick={()=>{borrartarea(tarea._id)}}>Borrar</button>
                </ul>
                <hr className="mt-4 border border-primary border-2 opacity-50"></hr> 
                </div>
            </div> 
        </div>
    )
}
export default TareaIndividual;