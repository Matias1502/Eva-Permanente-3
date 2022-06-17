var rutaProductos = "http://localhost/isiltec/productos.php";
fetch(rutaProductos)
    .then(function (response) {
        return response.json(); //Indican se leera un json
    })
    .then(function (data){  //la variable data contiene los datos leidos del servicio web
        //console.log(data);
        mostrarProductos(data);
    })

    function mostrarProductos(data){
        var tbodyProductos= document.getElementById("tbody-productos");
        var contenido="";
        //Con map examina fila a fila cada elemento del arreglo
        //la variable item(puede ser cualquier nombre) representa a cada fila en cada repeticion
        data.map(function(item){
            contenido   += "<tr>";
            contenido   += "<td>"   +   item.idProducto    +   "</td>";
            contenido   += "<td>"   +   item.nombre   +   "</td>";
            contenido   += "<td>"   +   item.marca   +   "</td>";
            contenido   += "<td>"   +   item.modelo    +   "</td>";
            contenido   += "<td>"   +   item.precio     +   "</td>";
            contenido   += "<td>"   +   item.stock +   "</td>";
            contenido   += "</tr>";
        })
        tbodyProductos.innerHTML  =   contenido;
        //innerHTML es para agregar contenido HTML dentro de un objeto
    }