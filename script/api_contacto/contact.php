<?php
  Header('Access-Control-Allow-Origin: *');
  
  $destinatario = 'sergio.lobo117@gmail.com';
  $data = json_decode(file_get_contents('php://input'), true);
  $nombre = $data['nombre'];
  $asunto = $data['asunto'];
  $mensaje = $data['mensaje'];
  $email = $data['email'];

  $header="Enviado desde tu portafolio por: " . $email;
  $mensajeCompleto=$mensaje . "\n\n\nAtentamente: " . $nombre;
  mail($destinatario, $asunto, $mensajeCompleto, $header);

    echo "Message sent successfully!";
?>
