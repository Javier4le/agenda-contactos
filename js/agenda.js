
const cargarTabla = (contactos)=>{
   //1. Ir a buscar el tbody
   const tbody = document.querySelector("#tbody-contactos");
   //Vaciar el contenido del cuerpo de la tabla
   tbody.innerHTML = '';
   //2. Recorrer la lista de contactos
   contactos.forEach( c =>{
      //3. Por cada contacto generar una fila de la tabla
      let tr = document.createElement('tr');

      let tdNombre = document.createElement("td");
      tdNombre.innerText = c.nombre;
      
      let tdCorreo = document.createElement("td");
      tdCorreo.innerText = c.correo;

      let tdTelefono = document.createElement("td");
      tdTelefono.innerText = c.telefono;

      tr.appendChild(tdNombre);
      tr.appendChild(tdCorreo);
      tr.appendChild(tdTelefono);

      tbody.appendChild(tr);
   });
};

window.addEventListener("DOMContentLoaded", ()=>{
   let contactos = obtenerContacto();
   cargarTabla(contactos);
});

document.querySelector("#filtro-txt").addEventListener('input', ()=>{
   let filtro = document.querySelector("#filtro-txt").value.trim();
   let contactos = obtenerContacto(filtro);
   cargarTabla(contactos);
});