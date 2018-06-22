<?php

    $postdata = file_get_contents("php://input");
	$request = json_decode($postdata);


    $nombre = $request->nombre;
    $compania = $request->compania;
    $email = $request->email;
    $pais = $request->pais;
    $mensaje = $request->mensaje;
    

    $titulo = 'Datos de la solicitud: ';
    $para = 'landing@likuid.eu';
    $asunto = 'Solicitud de información desde landing page';

    $formulario =   '<p><strong>$titulo</strong></p>
                    <hr>
                    <p><strong>Nombre:            </strong>$nombre</p>
                    <p><strong>Compania:          </strong>$compania</p>
                    <p><strong>E-mail:            </strong>$email</p>
                    <p><strong>País:              </strong>$pais</p>
                    <p><strong>Mensaje:          </strong>$mensaje</p>';

    $body = '<html><body>';
    $body .= '$formulario';
    $body .= '</body></html>';

    $headers .= 'MIME-Version: 1.0\r\n';
	$headers .= 'Content-Type: text/html; charset=utf-8\r\n';
    $headers .= 'From: $email\n';

    mail($para, $asunto, $body, $headers);
