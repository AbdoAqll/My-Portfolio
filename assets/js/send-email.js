function sendMail(event)
{
    event.preventDefault(); // Prevent form submission

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Send the email via EmailJS
    emailjs.send("service_wibxkww", "template_5e4az68", parms)
        .then(function(response) {
            alert("Email Sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
}
