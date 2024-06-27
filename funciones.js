import { getData, save, remove, getDocumento } from "./firestore.js"
document.getElementById('btnGuardar').addEventListener('click',() =>{
    document.querySelectorAll('.form-control').forEach(item => {
        verificar(item.id)
    })
    if (document.querySelectorAll('.is-invalid').length == 0) {
        if (document.getElementById('btnGuardar').value == 'Guardar') {
            const Semillas = {
                nombre: document.getElementById('nombre').value,
                sativa: document.getElementById('sativa').value,
                indica: document.getElementById('indica').value,
                floracion: document.getElementById('floracion').value,
                gene: document.getElementById('genetica').value,
                thc: document.getElementById('thc').value,
                fecha: document.getElementById('fechadecultivo').value
                
            }
            save(Semillas)
            limpiar()
        }
    }
})
window.addEventListener('DOMContentLoaded',() =>{  
    getData((datos) =>{
        let tabla = ''
        datos.forEach((doc) =>{
            const item = doc.data()
            tabla += `<tr>
            <td>${item.nombre}</td>
            <td>${item.sativa}</td>
            <td>${item.indica}</td>
            <td>${item.floracion}</td>
            <td>${item.gene}</td>
            <td>${item.thc}</td>
            <td>${item.fecha}</td>
            <td nowrap>
                <button class="btn btn-warning" id="${doc.id}">Editar</button>
                <button class="btn btn-danger" id="${doc.id}">Eliminar</button>
            </td>
        </tr>`
        })
        document.getElementById('contenido').innerHTML = tabla
        document.querySelectorAll( '.btn-danger').forEach(btn=>{
            btn.addEventListener('click',()=>{Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed)
                    remove(btn.id)
                {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
            })
        })
        document.querySelectorAll('.btn-warning').forEach(btn=>{
            btn.addEventListener('click',async()=>{
                const empleado = await getDocumento(btn.id)
                const e =empleado.data()
                document.getElementById('nombre').value=e.nom
                document.getElementById('sativa').value=e.sativa
                document.getElementById('indica').value=e.indica
                document.getElementById('floracion').value=e.floracion
                document.getElementById('genetica').value=e.gene
                document.getElementById('thc').value=e.thc
                document.getElementById('fecha de cultivo').value=e.fecha

                document.getElementById('btnGuardar').value='Editar'
                document.getElementById('run').readOnly=true
            })

        })
    })
})  
