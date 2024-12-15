document
  .getElementById("donationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = document.getElementById("amount").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // const phone = document.getElementById('phone') ? document.getElementById('phone').value : ''; // Check if phone exists
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    // const state = document.getElementById('state').value;
    const zip = document.getElementById("zip").value;
    const card = document.getElementById("card").value;
    const expDate = document.getElementById("expDate").value;
    const cvv = document.getElementById("cvv").value;
    const terms = document.getElementById("terms").checked;

    const requiredFields = [
      { value: amount, name: "Amount" },
      { value: name, name: "Full Name" },
      { value: email, name: "Email" },

      { value: address, name: "Address" },
      { value: city, name: "City" },

      { value: zip, name: "Zip Code" },
      { value: card, name: "Card Number" },
      { value: expDate, name: "Expiration Date" },
      { value: cvv, name: "CVV" },
      { value: terms, name: "Terms & Conditions", isCheckbox: true },
    ];

    let validationError = false;

    requiredFields.forEach((field) => {
      if (!field.value || (field.isCheckbox && !field.value)) {
        alert(`Please fill in the required field: ${field.name}`);
        validationError = true;
      }
    });

    if (validationError) return;

    setTimeout(() => {
      document.getElementById("donationForm").style.display = "none";
      document.getElementById("successMessage").classList.remove("hidden");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 15000);
    }, 1500);
  });
