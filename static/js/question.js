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

  const data = {
    email,
    question,
    response,
    checkbox
  };

  console.log(data);
  if(checkbox === true) {
    const resp = await fetch("http://localhost:3000/questions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode:"no-cors",
      body: JSON.stringify(data),
    })
    console.log(await resp.status);
  }
  else {
    alert("Trebuie să fii de acord cu Termenii și Condițiile!");
  }

}
