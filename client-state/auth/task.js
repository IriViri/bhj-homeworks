'use strict';

const user = document.getElementById('welcome');
const userID = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const visForm = () => {
    signin.classList.add('signin_active');
};


const form = document.getElementById('signin__form');
form.addEventListener('submit',  (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    form.reset ();
    xhr.addEventListener('load',() =>  {
        
            let xhrAnswer = xhr.response;
            let id = xhrAnswer.user_id;

            if (xhrAnswer.succes === false) {
                alert('Вы ввели неправильный логин/пароль')
            } else {
                localStorage.setItem('id_user', id);
                signin.classList.remove('signin_active');
                user.classList.add('welcome_active');
                userID.innerText = localStorage.getItem('user_id');

            }
        })
    })

