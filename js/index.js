
const inputs = document.querySelectorAll('.field');
const toggle_btn = document.querySelectorAll('.toggle');
const section = document.querySelectorAll('section')

inputs.forEach(inp => {
    inp.addEventListener('focus', () =>{
        inp.classList.add('active')
    });
    inp.addEventListener('blur', () => {
        if (inp.value != '') return;
        inp.classList.remove('active');
    });
});

toggle_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        section.classList.toggle('.logIn');
    });
});























/*$document.ready(function (){
    $('a').click(function(){
        $('#move').toggle();
    })
})
*/








