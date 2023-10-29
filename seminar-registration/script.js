// script.js
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Send data to the server
    fetch( {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        // Display the QR code
        document.getElementById("qr-code").src =qr_img.png;
        document.getElementById("qr-code-container").style.display = "block";
    })
    .catch((error) => console.error("Error:", error));
});
