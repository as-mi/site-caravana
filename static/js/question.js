let response;

function captchaSuccessful(gToken) {
  let button = $("#submitButton");
  button.prop("disabled", false);
  button.removeClass("btn-secondary");
  button.addClass("btn-primary");

  response = gToken;
}

async function sendQuestion() {
  const email = document.getElementById("email").value;
  const question = document.getElementById("question").value;
  const checkbox = document.getElementById("termeni").checked;
  const messageText = document.getElementById("messageTitle");
  const messageExp = document.getElementById("messageExp");
  const data = {
    email,
    question,
    response,
    checkbox,
  };

  console.log(data);
  if (checkbox === true) {
    const resp = await fetch("/questions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
      if (res.status == 201) {
        messageText.textContent = "Întrebare trimisă cu succes!";
        messageExp.textContent = "Ne vom întoarce cu un răspuns în curând!";
      } else if (res.status == 500) {
        messageText.textContent = "Eroare la trimiterea întrebării";
        messageExp.textContent =
          "Te rugăm să verifici dacă adresa de e-mail este una validă.";
      }

      $("#myModal").modal();
    });
  } else {
    messageText.textContent =
      "Trebuie să fii de acord cu Termenii și Condițiile!";
    messageExp.textContent =
      "Te rugăm să consulți Termenii și Condițiile și să bifezi căsuța înainte de trimitere.";
    $("#myModal").modal();
  }
}

function showTC() {
  $("#modalTC").modal();
}
