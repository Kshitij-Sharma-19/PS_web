// script.js
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Send data to the server
    fetch("/generate-qr", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        // Display the QR code
        document.getElementById("qr-code").src = data.qr_code_url;
        document.getElementById("qr-code-container").style.display = "block";
    })
    .catch((error) => console.error("Error:", error));
});
