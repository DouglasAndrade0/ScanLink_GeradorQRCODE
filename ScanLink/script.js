const input = document.getElementById("QRCODE_url");
const button = document.getElementById("QRCODE_gerar");
const image = document.getElementById("QRCODE_img");

button.addEventListener("click", () => {
    QRCode.toDataURL(input.value, {
        color: {
            dark: "#58E5B0", 
            light: "#0D1117"  
        }
    }, function(err, url) {
        image.src = url;
        image.style.display = "block";
    });
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});
