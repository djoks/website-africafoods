import '../css/careers.css';
import XHeader from './components/x-header';
import XFooter from './components/x-footer.js';

document.addEventListener('DOMContentLoaded', function () {
    attachOnSubmitListener();
});

const attachOnSubmitListener = () => {
    const form = document.getElementById('career-form');
    form.addEventListener('submit', submit);
}

const submit = async (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const cv = document.getElementById('cv');
    const notification = document.getElementById('notification');

    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("message", message.value);
    formData.append("cv", cv.files[0]);

    await fetch("https://us-central1-africa-foods.cloudfunctions.net/careers", {
        method: "POST",
        body: formData
    });

    notification.classList.toggle('hidden');
    name.value = null;
    email.value = null;
    message.value = null;
    cv.value = null;
}