<?php

	$nombre=$_REQUEST['username'];
	$email=$_REQUEST['Email'];
	$Comentario=$_REQUEST['Comentario'];
	
	$ar = fopen("../Otros/texto.txt", "a");
	fputs($ar, " $nombre, $email, $Comentario " );
	fclose($ar);
?>