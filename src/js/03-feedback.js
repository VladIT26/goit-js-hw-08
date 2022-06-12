import throttle from "lodash.throttle";

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
}

const FEEDBACK_FORM_STATE = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onSubmitForm)

getUserData()
setUserData()

function getUserData() {
  if (localStorage.getItem(FEEDBACK_FORM_STATE)) {
    const saveData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
    refs.email.value = saveData.email;
    refs.message.value = saveData.message;
  }
}

function setUserData() {
    formData.email = refs.email.value;
    formData.message = refs.message.value;
}

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));   
}


function onSubmitForm(event) { 
    event.preventDefault();
    if (formData.email !== '' && formData.message !== '') {
        console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    setUserData();
  }
}