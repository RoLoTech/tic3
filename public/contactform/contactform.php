<?php
if($_POST){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

//send email
    mail("agossweiler@correo.um.edu.uy", $subject, $message);
}
