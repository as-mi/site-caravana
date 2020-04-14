---
title: "Pune-ne o întrebare!"
heading: "Pune-ne o întrebare!"
menu: main
weight: 1000
---

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
