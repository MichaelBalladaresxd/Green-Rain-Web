<?php

$carta= "De: " .$_POST['nombre']. " \n";
$carta.="Telefono: " .$_POST['telefono']. " \n";
$carta.="Email: " .$_POST['email']. " \n";
$carta.="Asunto: " .$_POST['asunto']. " \n";
$carta.="Mensaje: ".$_POST['mensaje'];

mail("info@greenrain.com","CONTACTO DESDE LA WEB",$carta);