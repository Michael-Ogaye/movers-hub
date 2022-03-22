const inputs = document.querySelectorAll('.field');

inputs.forEach(inp => {
    inp.addEventListener('focus', () =>{
        inp.classList.add('active')
    });
});