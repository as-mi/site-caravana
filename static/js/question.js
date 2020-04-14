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

  const data = {
    email,
    question,
    response,
  };

  const resp = await fetch("/questions/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    alert("Intrebare trimisa cu succes!");
  })
}
