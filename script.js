const WHATSAPP = "5521997971659";

function abrirWhatsApp(modelo, armazenamento, preco) {
  const msg = `Olá! Vim pelo site da Miami iPhones e tenho interesse no ${modelo} ${armazenamento} por ${preco}. Gostaria de mais informações.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => abrirWhatsApp(
    btn.dataset.model,
    btn.dataset.storage,
    btn.dataset.price
  ));
});

document.querySelectorAll(".wa-general").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const msg = "Olá! Vim pelo site da Miami iPhones e gostaria de mais informações sobre os iPhones disponíveis.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  });
});

const header = document.querySelector(".header");
document.querySelector(".menu-btn").addEventListener("click", () => header.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => header.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
