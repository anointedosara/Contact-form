const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const radio = document.querySelectorAll(".radio");
const message = document.getElementById("message");
const concent = document.getElementById("concent");
const err = document.querySelector(".err");
const quer = document.querySelector(".quer");
const invalid = document.querySelector(".invalid");
const submit = document.querySelector(".submit-btn");
const modal = document.querySelector(".modal");

const data = {
  fname: "",
  lname: "",
  email: "",
  radio: false,
  message: "",
  concent: false,
};
const sbt = {
  fName: "",
  lName: "",
  emailAdd: "",
  radioBtn: "",
  mess: "",
  concentBox: "",
};

fname.addEventListener("input", e => {
  data.fname = e.target.value;
  console.log(data);
});
lname.addEventListener("input", e => {
  data.lname = e.target.value;
  console.log(data);
});
email.addEventListener("input", e => {
  data.email = e.target.value;
  console.log(data);
});
message.addEventListener("input", e => {
  data.message = e.target.value;
  console.log(data);
});
concent.addEventListener("click", e => {
  if (concent.checked) {
    data.concent = true;
  } else {
    data.concent = false;
  }
  console.log(data);
});
radio.forEach(item => {
  item.addEventListener("click", e => {
    data.radio = true;
    console.log(data);
  });
});

const handleSubmit = () => {
  data.fname === ""
    ? fname.nextElementSibling.classList.add("show")
    : (fname.nextElementSibling.classList.remove("show"), (sbt.fName = true));
  data.lname === ""
    ? lname.nextElementSibling.classList.add("show")
    : (lname.nextElementSibling.classList.remove("show"), (sbt.lName = true));
  data.email !== "" && data.email.includes("@" && ".com")
    ? (invalid.classList.remove("show"), (sbt.emailAdd = true))
    : invalid.classList.add("show");
  data.message === ""
    ? message.nextElementSibling.classList.add("show")
    : (message.nextElementSibling.classList.remove("show"), (sbt.mess = true));
  data.concent === false
    ? err.classList.add("show")
    : (err.classList.remove("show"), (sbt.concentBox = true));
  data.radio === false
    ? quer.classList.add("show")
    : (quer.classList.remove("show"), (sbt.radioBtn = true));

  if (
    sbt.fName === true &&
    sbt.lName === true &&
    sbt.emailAdd === true &&
    sbt.mess === true &&
    sbt.concentBox === true &&
    sbt.radioBtn === true
  ) {
    modal.classList.add("showModal");
    // fname.value = ''
    // lname.value = ''
    // email.value = ''
    // concent.value = ''
    // message.value = ''
    // radio.value = ''
    // data.fname = ''
    // data.lname = ''
    // data.email = ''
    // data.message = ''
    // data.concent = false
    // data.radio = false
    // sbt.fName = ''
    // sbt.lName = ''
    // sbt.emailAdd = ''
    // sbt.mess = ''
    // sbt.concentBox = ''
    // sbt.radioBtn = ''
    // concent.checked = false
    // for (let i = 0; i < radio.length; i++) {
    //     radio[i].selected = false
    // }
  }
};

submit.addEventListener("click", handleSubmit);

modal.addEventListener("click", e => {
  e.target.classList.remove("showModal");

  window.location.reload();
});
