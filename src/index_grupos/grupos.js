const grupos = async ()=>{
    console.log('leerTareas');
    try{
        const uri = 'http://localhost:9000/api/grupos'
        const peticionUsuarios = await fetch(uri,{
        method: 'GET'
        })
        const datos = await peticionUsuarios.json()
        console.log(datos);
        var html = `
        <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nom ID</th>
                <th scope="col">Email ID</th>
                <th scope="col">Any de formació</th>
            </tr>
        </thead>
        <tbody>
        `
        datos.forEach(element => {
            html+=`
            <tr data-id=${element.ID} class="datoslinea${element.ID}">
              <th scope="row">1</th>
              <td>${element.ID}</td>
              <td>${element.nom}</td>
              <td>${element.email}</td>
              <td>${element.any_formació}</td>
              <td>${element.ID}<i data-id=${element.ID} class="fa-solid fa-pencil mx-2"></i></td>
            </tr>
           
           
            `
        })
        html+=`
        </tbody>
        </table>
        `

        
        //inyectamos datos en el html
         document.querySelector('.tablagrupos').innerHTML = html
        //sacar datos
        document.querySelector('.tablagrupos').addEventListener("click", (element)=>{
            if(
                element.target.classList.contains("fa-solid")
            ){
                var datos = document.querySelector(`.datoslinea${element.target.dataset.id}`)
                console.log(datos);
                
            }
                
            
        })
    }
    catch (error){
        console.log('Error al leer en la base de datos' + error);
        
    }
}
grupos()

