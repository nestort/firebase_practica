var provider = new firebase.auth.GoogleAuthProvider();

$('#inicioSesion').click(
    
    function(result){
        //firebase.auth.signInWithPopup(provider).then(
        firebase.auth().signInWithPopup(provider).then(
        
            function(result){
                console.log(result);
            }


        );
    }
);