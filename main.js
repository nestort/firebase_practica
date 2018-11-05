var provider = new firebase.auth.GoogleAuthProvider();
var usuario
$('#inicioSesion').click(    
    function(result){
        //firebase.auth.signInWithPopup(provider).then(    <=faltaba ()
        firebase.auth().signInWithPopup(provider).then(        
            function(result){
                usuario = {
                    nombre: result.user.displayName,
                    uid: result.user.uid,
                    email: result.user.email,
                    foto: result.user.photoURL,
                    termino:true,
                    puntos:0
                };   
                $('#seccionSesion').hide();
                firebase.database().ref('Usuarios/' + usuario.uid).set(usuario);
                           
            }

        );
    }
);

