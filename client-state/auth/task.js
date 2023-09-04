'use strict';

const user = document.getElementById('welcome');
const userID = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const visForm = () => {
    signin.classList.add('signin_active');
};
window.onload = visForm;

const form = document.getElementById('signin__form');
form.addEventListener('submit',  (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            let request = xhr.response;

            if (request['success'] != true) {
                alert('Вы ввели неправильный логин/пароль')
            } else {
                localStorage.setItem('id_user', request['user_id']);
                signin.classList.remove('signin_active');
                user.classList.add('welcome_active');
                userID.innerText = request['user_id'];

            }
        }
    };
    e.preventDefault();
});

let saveUserId = localStorage.getItem('id_user');
console.log(saveUserId);