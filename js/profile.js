$(document).ready(function(){

let booKBtns=$('#profiles button');
booKBtns.click(function(){
    window.location.href='www.youtube.com'
})


//searching for names

$('input[type=search]')[0].addEventListener('keyup',()=>{

    let searchFieldVal=$('input[type=search]').val().toLowerCase();
    let profiles=$('section#profiles')
    profiles.each(function(profile){
        
        let searchArea= $(this).find('h5').text().toLowerCase();
    if(searchArea.indexOf(searchFieldVal)!=-1){
        $(this).show();

    
    }
    else{
        $(this).hide();
    }


    })

})









})