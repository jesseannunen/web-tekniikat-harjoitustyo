const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const importantCheckbox = document.getElementById("important-checkbox");
const submitButton = document.getElementById("submit-button");
const noteList = document.getElementById("note-list");

submitButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (name && message) {
    const note = document.createElement("div");
    note.classList.add("note");
    if (importantCheckbox.checked) {
      note.classList.add("important");
    }
    const nameElem = document.createElement("span");
    nameElem.classList.add("name");
    nameElem.textContent = name;
    note.appendChild(nameElem);
    const messageElem = document.createElement("span");
    messageElem.classList.add("message");
    messageElem.textContent = message;
    note.appendChild(messageElem);
    const dateElem = document.createElement("span");
    dateElem.classList.add("date");
    const now = new Date();
    const dateString = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    dateElem.textContent = dateString;
    note.appendChild(dateElem);
    noteList.appendChild(note);
    nameInput.value = "";
    messageInput.value = "";
    importantCheckbox.checked = false;
  }
});
