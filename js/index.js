const input = document.querySelectorAll('.field');
const toggle = document.querySelectorAll('.toggle');
const section = document.querySelectorAll('section')

input.forEach(inp => {
    inp.addEventListener('focus', () =>{
        inp.classList.add('active')
    });
    inp.addEventListener('blur', () => {
        if (inp.value != '') return;
        inp.classList.remove('active');
    });
});

toggle.forEach(btn => {
    btn.addEventListener('click', () => {
        section.classList.toggle('sign-up-form');
    });
});