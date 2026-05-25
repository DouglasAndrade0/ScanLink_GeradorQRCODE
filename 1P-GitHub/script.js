const input = document.getElementById("QRCODE_url");
const button = document.getElementById("QRCODE_gerar");
const image = document.getElementById("QRCODE_img");

button.addEventListener("click", () => {
    QRCode.toDataURL(input.value, function(err, url) {
        image.src = url;
    });
});