const locales = async ()=>{
    console.log('leerTareas');
    try{
        const uri = 'http://localhost:9000/api/locales'
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
                <th scope="col">Adreça</th>
                <th scope="col">Latitud</th>
                <th scope="col">Longitud</th>
                <th scope="col">Aforament</th>
            </tr>
        </thead>
        <tbody>
        `
        datos.forEach(element => {
            html+=`
            <tr>
              <th scope="row">1</th>
              <td>${element.ID}</td>
              <td>${element.nom}</td>
              <td>${element.adreça}</td>
              <td>${element.latitud}</td>
              <td>${element.longitud}</td>
              <td>${element.aforament}</td>
            </tr>
           
           
            `
        })
        html+=`
        </tbody>
        </table>
        `

        
        //inyectamos datos en el html
         document.querySelector('.tablalocales').innerHTML = html
    }
    catch (error){
        console.log('Error al leer en la base de datos' + error);
        
    }
}
locales()