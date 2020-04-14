---
title: "Pune-ne o întrebare!"
heading: "Pune-ne o întrebare!"
menu: main
weight: 1000
---

<div id="myModal" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< section "Nu ai găsit ce căutai?" >}}

<form>
    <div class="form-group">
        <label for="question">
            Lasă-ne o întrebare, iar noi îți vom răspunde în cel mai scurt
            timp :)
        </label>
        <textarea
            placeholder="Întrebarea ta aici..."
            class="form-control"
            id="question"
            rows="4"
        ></textarea>
    </div>
    <div class="form-group">
        <label class="sr-only" for="email">Email</label>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fas fa-envelope"></i>
            </div>
            </div>
            <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Adresa ta de e-mail"
            />
        </div>
    </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="termeni">
            <label class="form-check-label" for="defaultCheck1">
             Sunt de acord cu Termenii și Condițiile
            </label>
        </div>
        <br/>
        <div class="g-recaptcha" data-sitekey="6Lea9ugUAAAAAGKTqOhL4GkOwPRoFRB_eSZ7fN0u" data-callback="captchaSuccessful"></div>
        <br/>
    <button type="button" class="btn btn-secondary" onclick="sendQuestion()" id="submitButton" disabled>Trimite!</button>
</form>
{{< /section >}}
