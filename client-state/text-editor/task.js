const textEditor = document.getElementById('editor');
const saveText = localStorage.getItem('text');
if (saveText !== null) {
    textEditor.value = saveText;
}
textEditor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})
