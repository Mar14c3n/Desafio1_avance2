document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ticketContainer = document.getElementById("ticket-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const github = document.getElementById("github").value;

    ticketContainer.innerHTML = `
      <div class="ticket-box" style="margin-top: 20px; padding: 20px; border: 2px dashed #6c63ff; border-radius: 10px; color: black ;">
       <img src="assets/images/logo-full.svg" alt="logo" style="width: 120px; margin-bottom: 15px;" />
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>GitHub:</strong> ${github}</p>
        <p style="font-style: italic;">¡Gracias por registrarte!</p>
      </div>
    `;

    ticketContainer.scrollIntoView({ behavior: "smooth" });
  });
});
