// Initialise EmailJS avec la bonne Public Key
emailjs.init("TirYCgvtWNwSBWTlP");

document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm("service_q3t99zr", "template_1my7lpg", this)
    .then((response) => {
        alert("Message envoyé avec succès !");
        document.getElementById("form2").reset();
    })
    .catch((error) => {
        alert("Erreur lors de l'envoi, veuillez réessayer.");
        console.error("Erreur :", error);
    });
});
