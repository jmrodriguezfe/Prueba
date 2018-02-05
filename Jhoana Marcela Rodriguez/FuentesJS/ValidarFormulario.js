function validaformulario(){
		var verifica=true;
		if(!document.Formulario.username.value){			
			alert('[ERROR] Campo "Nombre" es requerido');
			document.Formulario.username.focus();			
			verifica=false;
		}
		else if(!document.Formulario.Email.value){
			alert('[ERROR] Campo "E-mail" es requerido');
			document.Formulario.Email.focus();
			verifica=false;
		}
		else if(!document.Formulario.Comentario.value){
			alert('[ERROR] Campo "Comentario" es requerido');
			document.Formulario.Comentario.focus();
			verifica=false;
		}
						
				
	}