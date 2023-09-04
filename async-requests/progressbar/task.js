'use strict'

const progress = document.getElementById('progress')
const url = 'https://students.netoservices.ru/nestjs-backend/upload'
const sendBtn = document.getElementById('send')
const file = document.getElementById('file')

const uploadFile = (file) => {
  let xhr = new XMLHttpRequest()
  xhr.upload.onprogress = function (e) {
    progress.value = e.loaded / e.total
  }
  xhr.open('POST', url)
  xhr.send(file)
}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault()
  uploadFile(file.files[0])
})