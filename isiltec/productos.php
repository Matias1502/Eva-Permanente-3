<?php

require_once("config.php");    

    header("Access-Control-Allow-Origin: *");
     $cn = new mysqli("localhost","root","","isiltec");
     $rs = $cn->query("SELECT idProducto,nombre,marca,modelo,precio,stock 
                        FROM productos");
     while($row = $rs->fetch_assoc()){
        $res[] = $row;
  }

    echo json_encode($res, JSON_UNESCAPED_UNICODE);
    
    $cn->close();


?>