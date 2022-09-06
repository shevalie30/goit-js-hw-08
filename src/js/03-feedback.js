import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    const message = JSON.stringify(formData);
    localStorage.removeItem(STORAGE_KEY, message);
};

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;

    console.log({ Email: email.value, Message: message.value });
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};