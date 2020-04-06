---
title: "Pune-ne o întrebare!"
heading: "Pune-ne o întrebare!"
menu: main
weight: 1000
---

{{< section "Nu ai găsit ce căutai?" >}}
<form>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">
            Lasă-ne o întrebare, iar noi îți vom răspunde în cel mai scurt
            timp :)
        </label>
        <textarea
            placeholder="Întrebarea ta aici..."
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
        ></textarea>
    </div>
    <div class="form-group">
        <label class="sr-only" for="inlineFormInputGroup">Email</label>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fas fa-envelope"></i>
            </div>
            </div>
            <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Adresa ta de e-mail"
            />
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Trimite!</button>
</form>
{{< /section >}}
