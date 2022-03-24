$(document).ready(function(){

// let booKBtns=$('#profiles button');
// booKBtns.click(function(){
//     window.location.href=''
// })


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


//creating the profiles object


let allServiceProviders=[];

function Provider (name,location,rates,contact,capacity){
    this.name=name
    this.location=location
    this.rates=rates
    this.contact=contact
    this.capacity=capacity

}

// Data from existing users
function users (){
    $('section#profiles').each(function(){
        let namep=$(this).find('h5').text()
        let loc=$(this).find('.loc p').text()
        let rates=$(this).find('.rate p').text()
        let contacts=$(this).find('.qul ul li p small').text()
        let capacity=$(this).find('.det p').text()
    
        let aProvider= new Provider(namep,loc,rates,contacts,capacity);
    
        allServiceProviders.push(aProvider);
        return allServiceProviders;
        
    })
    
}

users()
console.log(allServiceProviders[3])










})