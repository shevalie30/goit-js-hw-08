import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formData = {};

// fillForm();

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    const message = JSON.stringify(formData);
    localStorage.removeItem(STORAGE_KEY, message);
};

function onFormSubmit(event) {
    event.preventDefault();

    const messageJson = localStorage.getItem(STORAGE_KEY);
    const savedMessage = JSON.parse(messageJson);

    if (savedMessage) {
        console.log(savedMessage);
    }

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function restoreFormData() {
    const message = localStorage.getItem(USER_KEY);
    if (message) {
        formData = JSON.parse(message);
        formRef.email.value = formData.email || '';
        formRef.message.value = formData.message || '';
    }
};