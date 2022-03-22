const alert = document.querySelector(".alert"),
  inputText = document.querySelector(".input-text"),
  formSubmit = document.querySelector(".form"),
  btnSubmit = document.querySelector(".btn-submit"),
  grocertItem = document.querySelector(".grocert-item"),
  btnClear = document.querySelector(".btn-clear");
const editBtn = document.querySelectorAll(".edit-btn"),
  deleteBtn = document.querySelectorAll(".delete-btn");

const data = [];
btnSubmit.addEventListener("click", () => {
  let valueText = inputText.value;
  if (valueText) {
    data.push(valueText);
    let text = data
      .map((item) => {
        return `
        <div class="item">
          <p class="text">${item}</p>
          <div class="btn-container">
            <button class="edit-btn" type="button">
              <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
    `;
      })
      .join("");
    grocertItem.innerHTML = text;
    inputText.value = "";
  } else {
  }
});

// editBtn.forEach((element) => {
//   element.addEventListener("click", () => {
//     console.log(element);
//   });
// });
