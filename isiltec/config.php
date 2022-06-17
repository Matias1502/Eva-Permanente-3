<?php
     header("Access-Control-Allow-Origin: *");
     //Esto indica que a este servicio se puede acceder desde cualquier dominio
 
     $cn = new mysqli("localhost","root","","isiltec");
     //Servidor de base de datos, Usuario, contraseña, Base de datos
     //$cn representa a la conexion de datos
 
?>