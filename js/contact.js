
$("#contact").submit(function (event) {
    event.preventDefault()
    let name = $("input#text").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
    alert(name + " " + "we have received your message. Thank you for being here.");
});

$(".card").mouseover(function () {
    $(".comment").show();
});


