<?php

$destinario=$_POST['email'];

use  PHPMailer \ PHPMailer \ PHPMailer ; 
use  PHPMailer \ PHPMailer \ Exception ;

require 'componentes/PHPMailer/src/PHPMailer.php';
require 'componentes/PHPMailer/src/Exception.php';
require 'componentes/PHPMailer/src/SMTP.php';
require 'componentes/vendor/autoload.php';



$mail = new PHPMailer(true);
try{
    $mail­->SMTPDebug = 2;
    $mail->isSMTP(); 
    $mail->Host = 'mail.greenrainsystem.com'; //cambiar
    $mail­->SMTPAuth = true;
    $mail->Username = 'info@greenrainsystem.com';//cambiar
    $mail->Password = 'greenrain123'; //cambiar
    $mail­->SMTPSecure = 'tls';
    $mail­->Port = 465;


    $mail->setFrom('info@greenrainsystem.com', 'Green Rain Sytem');//cambiar
    $mail->addAddress($destinario,'Green Rain System');//cambiar
    $mail->addCC('info@greenrainsystem.com');//cambiar

    
    $mail->addAttachment('greenrain_datos.docx','greenrain_datos.docx');//cambiar
    $mail->Subject='Servicios de Green Rain';//cambiar
    $mail->isHTML(true);   
    $mail->Body    = '<b>¡Bienvenido! '.$destinario.' </b><br>';
    $mail->Body    .= 'Tu suscripcion es correcta <br>';
                        
    $mail->Body    .= 'La Familia <strong> Green Rain System </strong> te saluda!. <br>';
                        
    $mail->Body    .= 'Gracias por confiar en nosotros.<br>';
    $mail->Body    .= 'Adjuntamos algunas de nuestras promociones.<br>';
                        
    $mail->Body    .= 'Que tenga un buen dia.<br>';
                        
    $mail->AltBody = 'pdf';

    $mail->send();
   
}catch(Exception $e){
    echo 'Error: ', $mail->ErrorInfo;
}




