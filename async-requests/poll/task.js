'use strict'

const url = 'https://students.netoservices.ru/nestjs-backend/poll'
const poll = document.getElementById('poll__title')
const answers = document.getElementById('poll__answers')

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    poll.innerHTML += `${data.data.title}`
    let answer = data.data.answers
    for (let i = 0; i < answer.length; i++) {
      answers.innerHTML += `<button class="poll__answer">
                 ${answer[i]}
               </button>`
    }
    const btns = Array.from(document.querySelectorAll('button'))
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let currentBtn = e.target.closest('.poll__answer')
        if (currentBtn) {
          alert('Спасибо, ваш голос засчитан!')
          window.location.reload()
        }
      })
    })
  })