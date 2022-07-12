const discos = async ()=>{
    console.log('leerTareas');
    try{
        const uri = 'http://localhost:9000/api/canciones'
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
                <th scope="col">Duració</th>
                <th scope="col">En concert</th>
                <th scope="col">grup ID</th>
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
              <td>${element.duració}</td>
              <td>${element.en_concert}</td>
              <td>${element.grup_ID}</td>
            </tr>
           
           
            `
        })
        html+=`
        </tbody>
        </table>
        `

        
        //inyectamos datos en el html
         document.querySelector('.tabladiscos').innerHTML = html
    }
    catch (error){
        console.log('Error al leer en la base de datos' + error);
        
    }
}
discos()