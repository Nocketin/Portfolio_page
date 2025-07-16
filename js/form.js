const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let hasError = false;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorMessage = document.getElementById("errorMessage");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";

  if (name.value.trim() === "") {
    errorName.textContent = "Введите ваше имя";
    hasError = true;
    return;
  }

  if (email.value.trim() === "") {
    errorEmail.textContent = "Введите вашу почту";
    hasError = true;
    return;
  } else if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Почта введена неверно";
    hasError = true;
    return;
  }

  if (message.value.trim() === "") {
    errorMessage.textContent = "Введите сообщение";
    hasError = true;
    return;
  }

  if (!hasError) {
    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };

    console.log("Данные отправлены:", formData);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Ответ сервера:", data);
      alert("Сообщение отправлено!");
      form.reset();
    } catch (err) {
      console.error("Ошибка отправки:", err);
    }
  }
});
