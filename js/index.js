$(document).ready(function(){
    // Start Home

    // Start Scroll => appear
    $(window).scroll(function(){
        if (  this.scrollY < $("#experiences").offset().top && this.scrollY > $("#about").offset().top ){
            $(".sec1-img").addClass("animate__animated animate__rubberBand");
            $(".sec2-txt").addClass("animate__animated animate__headShake");
            $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").removeClass("animate__animated animate__bounceInDown");
            $(".offer").removeClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").removeClass("animate__animated animate__pulse");
            $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
            $(".contacts1").removeClass("animate__animated animate__rubberBand");
            $(".contacts2").removeClass("animate__animated animate__flash");
            $(".name").removeClass("animate__animated animate__jackInTheBox");
            $(".up").removeClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").removeClass("animate__animated animate__slideInDown");
            $(".copy").removeClass("animate__animated animate__slideInUp");
        }
        if (  this.scrollY < $("#services").offset().top && this.scrollY > $("#experiences").offset().top ){
            $(".sec1-img").removeClass("animate__animated animate__rubberBand");
            $(".sec2-txt").removeClass("animate__animated animate__headShake");
            $(".experience-child").addClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").removeClass("animate__animated animate__bounceInDown");
            $(".offer").removeClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").removeClass("animate__animated animate__pulse");
            $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
            $(".contacts1").removeClass("animate__animated animate__rubberBand");
            $(".contacts2").removeClass("animate__animated animate__flash");
            $(".name").removeClass("animate__animated animate__jackInTheBox");
            $(".up").removeClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").removeClass("animate__animated animate__slideInDown");
            $(".copy").removeClass("animate__animated animate__slideInUp");
        }
        if (  this.scrollY < $("#portfolio").offset().top && this.scrollY > $("#services").offset().top ){
            $(".sec1-img").removeClass("animate__animated animate__rubberBand");
            $(".sec2-txt").removeClass("animate__animated animate__headShake");
            $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").addClass("animate__animated animate__bounceInDown");
            $(".offer").addClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").removeClass("animate__animated animate__pulse");
            $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
            $(".contacts1").removeClass("animate__animated animate__rubberBand");
            $(".contacts2").removeClass("animate__animated animate__flash");
            $(".name").removeClass("animate__animated animate__jackInTheBox");
            $(".up").removeClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").removeClass("animate__animated animate__slideInDown");
            $(".copy").removeClass("animate__animated animate__slideInUp");
        }
        if (  this.scrollY < $("#review").offset().top && this.scrollY > $("#portfolio").offset().top ){
            $(".sec1-img").removeClass("animate__animated animate__rubberBand");
            $(".sec2-txt").removeClass("animate__animated animate__headShake");
            $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").removeClass("animate__animated animate__bounceInDown");
            $(".offer").removeClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").addClass("animate__animated animate__pulse");
            $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
            $(".contacts1").removeClass("animate__animated animate__rubberBand");
            $(".contacts2").removeClass("animate__animated animate__flash");
            $(".name").removeClass("animate__animated animate__jackInTheBox");
            $(".up").removeClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").removeClass("animate__animated animate__slideInDown");
            $(".copy").removeClass("animate__animated animate__slideInUp");
        }
        if (  this.scrollY < $("#person").offset().top && this.scrollY > $("#review").offset().top ){
            $(".sec1-img").removeClass("animate__animated animate__rubberBand");
            $(".sec2-txt").removeClass("animate__animated animate__headShake");
            $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").removeClass("animate__animated animate__bounceInDown");
            $(".offer").removeClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").removeClass("animate__animated animate__wobble");
            $(".review-parent .child1").addClass("animate__animated animate__fadeInDown");
            $(".contacts1").removeClass("animate__animated animate__rubberBand");
            $(".contacts2").removeClass("animate__animated animate__flash");
            $(".name").removeClass("animate__animated animate__jackInTheBox");
            $(".up").removeClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").removeClass("animate__animated animate__slideInDown");
            $(".copy").removeClass("animate__animated animate__slideInUp");
        }
        if (  this.scrollY < $("footer").offset().top && this.scrollY > $("#person").offset().top ){
            $(".sec1-img").removeClass("animate__animated animate__rubberBand");
            $(".sec2-txt").removeClass("animate__animated animate__headShake");
            $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
            $(".service-part").removeClass("animate__animated animate__bounceInDown");
            $(".offer").removeClass("animate__animated animate__bounceInUp");
            $(".portfolio-child").removeClass("animate__animated animate__wobble");
            $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
            $(".contacts1").addClass("animate__animated animate__rubberBand");
            $(".contacts2").addClass("animate__animated animate__flash");
            $(".name").addClass("animate__animated animate__jackInTheBox");
            $(".up").addClass("animate__animated animate__fadeInDownBig");
            $(".social-footer").addClass("animate__animated animate__slideInDown");
            $(".copy").addClass("animate__animated animate__slideInUp");
        }
        // if (  this.scrollY < $("footer").offset().top && this.scrollY > $("#person").offset().top ){
        //     $(".sec1-img").removeClass("animate__animated animate__rubberBand");
        //     $(".sec2-txt").removeClass("animate__animated animate__headShake");
        //     $(".experience-child").removeClass("animate__animated animate__bounce animate__repeat-1");
        //     $(".service-part").removeClass("animate__animated animate__bounceInDown");
        //     $(".offer").removeClass("animate__animated animate__bounceInUp");
        //     $(".portfolio-child").removeClass("animate__animated animate__wobble");
        //     $(".review-parent .child1").removeClass("animate__animated animate__fadeInDown");
        //     $(".contacts1").removeClass("animate__animated animate__rubberBand");
        //     $(".contacts2").removeClass("animate__animated animate__flash");
        //     $(".name").addClass("animate__animated animate__jackInTheBox");
        //     $(".up").addClass("animate__animated animate__fadeInDownBig");
        //     $(".social-footer").addClass("animate__animated animate__slideInDown");
        //     $(".copy").addClass("animate__animated animate__slideInUp");
        // }
    });
    // End Scroll => appear

    // Start cursor offset
    
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mouseover",function(e){
        let x = e.pageX;
        let y = e.pageY;
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display="block";
    });

    document.addEventListener("mouseout",function(){
        cursor.style.display="none";
    });

    // End cursor offset

    // start My Name
    var typed = new Typed(".myName",{
        strings: ["Gad Reda"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });
    // End My Name

    // Start Navbar
    $(".navbar").children().click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });
    // End Navbar

    // Start About
    $(".about-parent .sec1-img img").hover(function(){
        $(this).parent().css("transform","rotate(0deg)");
    },function(){
        $(this).parent().css("transform","rotate(5deg)");
    });

    $(".about h1").hover(function(){
        $(".about p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".about p").css({
            "transform" : "translateY(0px)"
        });
    });
    // End About

    // start experience
    $(".experience h1").hover(function(){
        $(".experience p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".experience p").css({
            "transform" : "translateY(0px)"
        });
    });

    // 1
    $(".experience-parent .experience-child .html-css").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 2
    $(".experience-parent .experience-child .js-jq").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 3
    $(".experience-parent .experience-child .bootstrap").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 4
    $(".experience-parent .experience-child .xd").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 5
    $(".experience-parent .experience-child .figma").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 6
    $(".experience-parent .experience-child .ps").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // 7
    $(".experience-parent .experience-child .ai").children().hover(function(){
        $(this).css("transform","translateX(20px)");
    },function(){
        $(this).css("transform","translateX(0px)");
    });
    // End experience

    // Start Services
    $(".Services h1").hover(function(){
        $(".Services p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".Services p").css({
            "transform" : "translateY(0px)"
        });
    });
    // End Services

    // Start Services
    $(".portfolio h1").hover(function(){
        $(".portfolio p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".portfolio p").css({
            "transform" : "translateY(0px)"
        });
    });
    // End Services

    // Start POrtfolio
    $(".portfolio-parent .child1 a").click(function(e){
        e.preventDefault();
        $(".model-frontend").slideDown();
    });

    $(".model-frontend .Xmark i").click(function(){
        $(".model-frontend").slideUp();
    });

    $(".portfolio-parent .child2 a").click(function(e){
        e.preventDefault();
        $(".model-Ui-Ux").slideDown();
    });

    $(".model-Ui-Ux .Xmark i").click(function(){
        $(".model-Ui-Ux").slideUp();
    });

    $(".portfolio-parent .child3 a").click(function(e){
        e.preventDefault();
        $(".model-design").slideDown();
    });

    $(".model-design .Xmark i").click(function(){
        $(".model-design").slideUp();
    });
    // End POrtfolio

    // Start Review
    $(".Review h1").hover(function(){
        $(".Review p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".Review p").css({
            "transform" : "translateY(0px)"
        });
    });

    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
    });
    // End Review

    // Start Contact
    $(".Contact h1").hover(function(){
        $(".Contact p").css({
            "transform" : "translateY(20px)"
        });
    },function(){
        $(".Contact p").css({
            "transform" : "translateY(0px)"
        });
    });
    // End Contact

    // End home
});