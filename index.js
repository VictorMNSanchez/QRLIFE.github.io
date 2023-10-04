const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
        console.log(email, password)
    //   firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //       // Inicio de sesión exitoso, puedes redirigir a otra página o realizar otras acciones aquí
    //       console.log("Inicio de sesión exitoso:", userCredential.user);
    //     })
    //     .catch((error) => {
    //       // Manejo de errores
    //       console.error("Error al iniciar sesión:", error);
    //     });
    });