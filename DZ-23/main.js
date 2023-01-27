const fieldDictionary = {
  name: "Ім'я",
  surname: "Прізвище",
  bDate: "Дата народження",
  sexRadio: "Стать",
  city: "Місто",
  adress: "Адреса",
  checkLang: "Мови, якими володіє",
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    formDataObj.checkLang = formData.getAll("checkLang");
    let tablePart = "";

    for (i in formDataObj) {
      let value = "";
      if (i == "sexRadio") {
        const sexDictionary = {
          M: "Чоловіча",
          W: "Жіноча",
        };
        value = sexDictionary[formDataObj[i]];
      } else if (i == "checkLang") {
        const langDictionary = {
          en: "English",
          ua: "Українська",
          ru: "Русский",
        };
        value = formDataObj[i].map(langConvert).join(", ");
        function langConvert(elem) {
          return langDictionary[elem];
        }
      } else {
        value = formDataObj[i];
      }
      tablePart += `<tr><td>${fieldDictionary[i]}</td><td>${value}</td></tr>`;
    }

    document.getElementById("container").innerHTML = `
      <div class="tableContainer">
          <table>
              <tr>
                  <th colspan="2">Введені користувачем значення</th>
              </tr>
              ${tablePart}
          </table>
      </div>`;
  });
