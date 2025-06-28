let formData = {
    email: "",
    message: ""
}
const form = document.querySelector('.feedback-form');
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in formData) {
        formData[name] = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
})




// const form = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-state';
// let formData = { email: '', message: '' };

// // Відновлення даних із localStorage при завантаженні сторінки
// const savedData = localStorage.getItem(STORAGE_KEY);
// if (savedData) {
//   formData = JSON.parse(savedData);
//   form.elements.email.value = formData.email || '';
//   form.elements.message.value = formData.message || '';
// }

// // Делегування події input на форму
// form.addEventListener('input', (event) => {
//   const { name, value } = event.target;
//   if (name in formData) {
//     formData[name] = value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }
// });