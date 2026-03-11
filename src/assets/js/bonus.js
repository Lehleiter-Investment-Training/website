    (function () {
        const password = "Grundlagen";
        const overlay = document.getElementById("password-overlay");
        const input = document.getElementById("passwordInput");
        const submit = document.getElementById("passwordSubmit");
        const error = document.getElementById("password-error");
        const body = document.body;
        const pageContent = document.getElementById("page-content");

        body.classList.add("locked");

        function unlock() {
            if ((input.value || "").trim() === password) {
                body.classList.remove("locked");
                body.classList.add("unlocked");
                overlay.style.display = "none";
                error.textContent = "";
                if (pageContent && typeof pageContent.focus === "function") {
                    pageContent.focus({ preventScroll: true });
                }
            } else {
                error.textContent = "Das eingegebene Passwort ist nicht korrekt.";
                input.value = "";
                input.focus();
            }
        }

        submit.addEventListener("click", unlock);
        input.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                unlock();
            }
        });

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                input.focus();
            }
        });

        input.focus();
    })();
