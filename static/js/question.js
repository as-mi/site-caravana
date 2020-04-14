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
  const messageText = document.getElementById("messageText");
  const data = {
    email,
    question,
    response,
    checkbox
  };

  console.log(data);
  if(checkbox === true) {
    const resp = await fetch("/questions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
      if(res.status == 201) {
        messageText.textContent = "Întrebare trimisă cu succes!";
      }
      else if(res.status == 500) {
        console.log(res.json());
      }  

      $("#myModal").modal();
    })
  }
  else {
    messageText.textContent = "Trebuie să fii de acord cu Termenii și Condițiile!";
    $("#myModal").modal();

  }
}

