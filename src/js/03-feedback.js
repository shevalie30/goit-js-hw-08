// import throttle from 'lodash.throttle';
// const STORAGE_KEY = "feedback-form-state";
// let formData = {};


// const refs = {
//     inputFormFeedback: document.querySelector('.feedback-form'),
//     inputFormEmail: document.querySelector('[type="email"]'),
//     inputFormMessage: document.querySelector('[name="message"]'),
//     inputFormSubmitBtn: document.querySelector('[type="submit"]'),
// }

// fillForm();

// refs.inputFormFeedback.addEventListener('input', throttle(onFormData, 500));
// refs.inputFormFeedback.addEventListener('submit', onFormSubmit);

// function onFormData(event) {
//     event.preventDefault();
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };


// function onFormSubmit(event) {
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     formData = {};
// };

// function fillForm() {
//     fillForm = [email.target.name] = email.target.value;
//     const formData = localStorage.getItem(STORAGE_KEY);
//     // const formData = JSON.parse(STORAGE_KEY);

//     if (formData) {
//         localStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

//         refs.inputFormEmail.value = formData.email || '';
//         refs.inputFormMessage.value = formData.message || '';
//     }
// }


// import throttle from 'lodash.throttle';
// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const filterForm = document.querySelector('.feedback-form');
// // const formEmail =  document.querySelector('input');
// // const formTextarea =  document.querySelector('textarea');



// hereinForm();






// filterForm.addEventListener('submit', evt => {
//     evt.preventDefault();
//     const formData = new FormData(filterForm);
//     localStorage.clear(LOCALSTORAGE_KEY);
//     filterForm.reset();
//     formData.forEach((value, name) => console.log(value, name));






//     //   formEmail.value = '';
//     //   formTextarea.value = '';
// });
// function onFormChange(e) {
//     filterForm.addEventListener('input', evt => {
//         let userData = localStorage.getItem(LOCALSTORAGE_KEY);
//         userData = userData ? JSON.parse(userData) : {};
//         userData[e.target.name] = e.target.value;

//         localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
//     });
// }
// filterForm.addEventListener('change', evt => {
//     let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//     goFilters = goFilters ? JSON.parse(goFilters) : {};
//     goFilters[evt.target.name] = evt.target.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(goFilters));
// });



// function hereinForm() {
//     let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//     if (goFilters) {
//         goFilters = JSON.parse(goFilters);
//         Object.entries(goFilters).forEach(([name, value]) => {
//             filterForm.elements[name].value = value;
//         });
//     }
// }
// filterForm.addEventListener('input', throttle(onFormChange, 500));



import throttle from 'lodash.throttle';


// ключ к хранилищу
const STORAGE_KEY = 'feedback-form-state';


// получаем доступ к элементам формы
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form  textarea'),
    input: document.querySelector('.feedback-form  input'),
};
// добавляемые значения
let formData = {};
// добавляем ф-нал 
onFormState();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


// Ф-ция сохранения текущих значений (1)останавливаем по умолчанию поведение; 2)получаем значение ввода; 3) сохраняем значание в хранилище)
function onTextareaInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// ф-ция проверки состояния хранилища (1) получаем значение хранилища; 2) если там есть даннные заполняем ими поля, в противном случем пустая строка
function onFormState() {
    let messageStoregeSave = localStorage.getItem(STORAGE_KEY);
    // парсим сообщение из хранилища, если в хранилище что-то есть
    if (messageStoregeSave) {
        messageStoregeSave = JSON.parse(messageStoregeSave);
        Object.entries(messageStoregeSave).forEach(([name, value]) => {
            formData[name] = value;
            refs.form.elements[name].value = value;
        })
    }
    //if (messageStoregeSave) {
    //(refs.textarea.value = messageStoregeSave.message || "");
    //(refs.input.value = messageStoregeSave.email || "");
    //}  
}
// очищает Сабмит (1) останавливаем по умолчанию поведение; 2)очищаем форму; 3) очищаем хранилище)
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    // formData = {};
    console.log(formData);
}