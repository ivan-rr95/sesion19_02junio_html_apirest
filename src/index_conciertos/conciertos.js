const conciertos = async ()=>{
    console.log('conciertos');
    try{
        const uri = 'http://localhost:9000/api/conciertos'
        const peticionUsuarios = await fetch(uri)
        const datos = await peticionUsuarios.json()
        console.log("datos.json",datos);
        var html = `
        <table class="table">
        <thead>
            <tr>
                <div>
                    <th scope="col">ID</th>
                    <th scope="col">grup ID</th>
                    <th scope="col">local ID</th>
                    <th scope="col">Data</th>
                    <th scope="col">Assistents</th>
                    <th scope="col"><i class="fa-solid fa-pencil mx-2"></i></th>
                </div>
                
                
            </tr>
        </thead>
        <tbody>
        `
        datos.forEach(element => {
            html+=`
            <tr>
              <th scope="row">1</th>
              <td>${element.ID}</td>
              <td>${element.grup_ID}</td>
              <td>${element.local_ID}</td>
              <td>${element.data}</td>
              <td>${element.assistents}</td>
              
            </tr>
           
           
            `
        })
        html+=`
        </tbody>
        </table>
        `

        
        //inyectamos datos en el html
        document.querySelector('.tablaconciertos').innerHTML = html
        
    
    }
    catch (error){
        console.log('Error al leer en la base de datos' + error);
        
    }
}
conciertos()
//export {conciertos}