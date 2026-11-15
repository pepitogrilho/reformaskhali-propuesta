<?php
// Reformas Khali · Envío del formulario de presupuesto a info@reformaskhali.es.
// No guarda nada: solo manda un correo. Necesita PHP con mail() (el alojamiento de Webempresa lo tiene).

declare(strict_types=1);

const DESTINO   = 'info@reformaskhali.es';
const REMITENTE = 'info@reformaskhali.es';  // mismo dominio que la web, para que el correo no acabe en spam
const TIPOS = ['Reforma integral', 'Cocina o baño', 'Suelos o alicatados', 'Pladur', 'Fachada o cubierta',
               'Instalaciones', 'Comunidad de vecinos', 'Obra nueva', 'Otra'];

function volver(string $donde): void {
    header('Location: ' . $donde, true, 303);
    exit;
}

function campo(string $nombre, int $max): string {
    $valor = isset($_POST[$nombre]) && is_string($_POST[$nombre]) ? trim($_POST[$nombre]) : '';
    return mb_substr($valor, 0, $max, 'UTF-8');
}

function una_linea(string $texto): string {
    // Quita saltos de línea para que nadie pueda colar cabeceras en el correo.
    return trim(preg_replace('/[\r\n\t]+/', ' ', $texto) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    volver('./');
}

// Campo trampa: las personas no lo ven; si viene relleno, es un robot. Se le dice que todo fue bien.
if (campo('web', 200) !== '') {
    volver('gracias/');
}

$nombre     = una_linea(campo('nombre', 100));
$telefono   = una_linea(campo('telefono', 20));
$email      = una_linea(campo('email', 150));
$tipo       = una_linea(campo('tipo', 50));
$mensaje    = campo('mensaje', 3000);
$privacidad = campo('privacidad', 5);

$valido = $nombre !== ''
    && preg_match('/^[0-9+()\s.-]{9,20}$/', $telefono) === 1
    && ($email === '' || filter_var($email, FILTER_VALIDATE_EMAIL) !== false)
    && $privacidad === 'si';

if (!$valido) {
    volver('./?error=1#formulario');
}
if (!in_array($tipo, TIPOS, true)) {
    $tipo = 'Otra';
}

$asunto = 'Presupuesto web: ' . $tipo . ' (' . $nombre . ')';
$cuerpo = "Nueva solicitud desde la web reformaskhali.es\n\n"
        . "Nombre:   $nombre\n"
        . "Teléfono: $telefono\n"
        . "Correo:   " . ($email !== '' ? $email : '(no lo ha puesto)') . "\n"
        . "Obra:     $tipo\n\n"
        . "Mensaje:\n" . ($mensaje !== '' ? $mensaje : '(sin mensaje)') . "\n\n"
        . "Ha aceptado la política de privacidad.\n"
        . "Enviado el " . date('d/m/Y \a \l\a\s H:i') . "\n";

$cabeceras = [
    'From'                      => 'Web Reformas Khali <' . REMITENTE . '>',
    'MIME-Version'              => '1.0',
    'Content-Type'              => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
];
if ($email !== '') {
    $cabeceras['Reply-To'] = $email;  // al pulsar «Responder» se contesta al cliente
}

$asunto_codificado = '=?UTF-8?B?' . base64_encode($asunto) . '?=';
$enviado = mail(DESTINO, $asunto_codificado, $cuerpo, $cabeceras, '-f' . REMITENTE);

volver($enviado ? 'gracias/' : './?error=1#formulario');
