//version 1

// const inputs = document.querySelectorAll("input");

// inputs[5].addEventListener("click", handleSubmit);

// function handleSubmit() {
// user.name = inputs[0].value;
// user.email = inputs[1].value;
// user.password = inputs[2].value;
// user.dob = new Date(inputs[3].value);
// user.color = inputs[4].value;
// console.log(user);
// }

//version 2
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(e) {
// e.preventDefault();
// user.name = inputs[0].value;
// user.email = inputs[1].value;
// user.password = inputs[2].value;
// user.dob = new Date(inputs[3].value);
// user.color = inputs[4].value;
// console.log(user);
// }

//version 3
// const user = {
// name: "",
// email: "",
// password: "",
// dob: "",
// color: "",
// };
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(e) {
// e.preventDefault();
// user.name = e.target.name.value;
// user.email = e.target.email.value;
// user.password = e.target.password.value;
// user.dob = e.target.birthdate.value;
// user.color = e.target.color.value;
// console.log(user);
// }

//version 4
const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn-modal");
const userData = document.getElementById("modal-list");
btnModal.addEventListener("click", closeModal);
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
e.preventDefault();
const userInfo = new FormData(form);
renderModal(userInfo);
form.reset();
}

function renderModal(data) {
for (let [key, value] of data) {
const li = document.createElement("li");
li.textContent = `${key} : ${value}`;
userData.appendChild(li);
}
modal.showModal();
}

function closeModal() {
modal.close();
}
 