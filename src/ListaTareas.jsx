import React, { useEffect, useState } from "react";
import TareaIndividual from "./TareaIndividual";
import axios from "axios";

function ListaTareas() {
  const [datatareas, setdatatareas] = useState([]);

  useEffect(() => {
    axios.get('api/tareas/obtenertareas')
      .then(res => {
        setdatatareas(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="mt-5">Lista de tareas</h2>
      {datatareas.map(tarea => (  
        <div key={tarea._id}>
          <TareaIndividual tarea={tarea} />
        </div>
      ))}
    </div>
  );
}

export default ListaTareas;
