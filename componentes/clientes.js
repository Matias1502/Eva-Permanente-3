var rutaClientes = "http://localhost/isiltec/clientes.php";
fetch(rutaClientes)
    .then(function (response) {
        return response.json(); //Indican se leera un json
    })
    .then(function (data){  //la variable data contiene los datos leidos del servicio web
        //console.log(data);
        mostrarClientes(data);
    })

    function mostrarClientes(data){
        var cardsClientes= document.getElementById("cards-clientes");
        var contenido="";
        //Con map examina fila a fila cada elemento del arreglo
        //la variable item(puede ser cualquier nombre) representa a cada fila en cada repeticion
        data.map(function(item){
            contenido += " <div class='col'>"; 
            contenido += "<div class='card'>";
            contenido += "<img src='http://localhost/isiltec/images/"+ item.logo + "' class='card-img-top' alt='...'>"; 
            contenido += "<div class='card-body'>";
            contenido += "<h5 class='card-title'>" + item.nombreempresa + "</h5>";
            contenido += "<p class='card-text'>"+ item.ciudad+ "," + item.distrito  + "</p>"; 
            contenido += "<p class='card-text'>"+ "Telefono: " + item.telefono + "</p>"; 

            contenido += "";
            contenido += "</div>";
            contenido += "</div>"; 
            contenido += "</div>"; 
            
           
        })
        cardsClientes.innerHTML  =   contenido; 
        //innerHTML es para agregar contenido HTML dentro de un objeto
    }