$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: [ "Software Developer", "Blogger",  "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Software Developer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.getElementById("downloadButton").addEventListener("click", function () {
    var pdfUrl = "cv.pdf";
    downloadPDF(pdfUrl);
});

function downloadPDF(pdfUrl) {
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendEmail(){
    Email.send({
        Host:'smtp.elasticemail.com',
        Username: 'akshatsinghal0213@gmail.com',
        Password: '03C75EF7C08D3BE5641B03192FDF1AE0D613',
        To: 'akshatsinghal0213@gmail.com',
        From: 'akshatsinghal0213@gmail.com',
        Subject: "New Contact Form Enquiry",
        Body: "Name :" + document.getElementById('name').value + " <br> From : " + document.getElementById("from").value + "<br> Subject : " + document.getElementById("subject").value + "<br> Message : " + document.getElementById("msgBody").value
    }).then(
        message => alert("Message sent successfully")
    )
}
