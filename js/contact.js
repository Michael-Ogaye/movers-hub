$document.ready (function (){
    $(".row").items({
        loop: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        slideToShow: 2,
        slideToScroll: 2,

    });
    $("#contact").submit(function () {
        event.preventDefault();
        let name = $("input#text").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();
        console.log(contact);
        alert(name + " " + "we have received your message. Thank you for being here")
    });
});


