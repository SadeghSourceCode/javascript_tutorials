
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let input = document.getElementById('input');

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        if (emailRegex.test(event.target.value)) {
            alert('Valid Email')
        }
        else {
            alert('invalid Email')
        }
    }
})