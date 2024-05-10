// Utilisation de ScrollReveal pour animer les éléments du formulaire lorsqu'ils sont révélés au défilement
ScrollReveal().reveal('.form-group', { delay: 300 });

// Écouteur d'événement pour le formulaire d'appréciation
document.getElementById('appreciationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs du formulaire
    var nom = document.getElementById('nom').value;
    var appreciation = document.getElementById('appreciation').value;

    // Formatage du message WhatsApp
    var messageWhatsApp = "Nouvelle appréciation reçue :\n";
    messageWhatsApp += "Nom : " + nom + "\n";
    messageWhatsApp += "Appréciation : " + appreciation;

    // Redirection vers WhatsApp avec le message
    window.location.href = "https://wa.me/623304674?text=" + encodeURIComponent(messageWhatsApp);
});
