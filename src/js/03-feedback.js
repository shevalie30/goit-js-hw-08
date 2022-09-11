import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";
const formData = {};


const refs = {
    inputFormFeedback: document.querySelector('.feedback-form'),
    inputFormEmail: document.querySelector('[type="email"]'),
    inputFormMessage: document.querySelector('[name="message"]'),
    inputFormSubmitBtn: document.querySelector('[type="submit"]'),
}

fillForm();

refs.inputFormFeedback.addEventListener('input', throttle(onFormData, 500));
refs.inputFormFeedback.addEventListener('submit', onFormSubmit);

function onFormData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(event) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.preventDefault();
    event.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY);
    // formData = {};
};

function fillForm() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        refs.inputFormEmail.value = formData.email || '';
        refs.inputFormMessage.value = formData.message || '';
    }
}
