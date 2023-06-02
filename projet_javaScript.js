function verifierEmail() 
    {
      var email = document.getElementById('email').value;
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(email)) 
      {
        alert("Adresse e-mail valide !");
      } 
      else
      {
        alert("Adresse e-mail invalide !");
      }
    }


    // Récupérer le bouton par son ID
var bouton = document.getElementsByClassName("bt");


