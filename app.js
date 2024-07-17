//header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((a)=>{
    a.addEventListener("click",()=>{navCollapse.classList.remove(".toggler-icon");
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel
$(document).ready(function(){
    $(".client-slider-section").owlCarousel({
        item:4,
        loop:true,
        nav:false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverpause: true,
        responsiveClass: true,
        stagePadding: 50,
        responsive:{
            0: {
                items:2
            },
            600: {
                items: 3
            },
            1000:{
                items: 6
            }
        } 
    });
});



// counters

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

// Variable that track if the counters have been activated

let activated = false;

// add scroll event to the page

window.addEventListener("scroll",()=>{
    if(scrollY > container.scrollTop - container.scrollHeight-200 && activated === false){
        counters.forEach(counter =>{
            counter.innerText = 0;
            let count = 0;

            function updateCount(){
                const target = parseInt(counter.dataset.count);
                if(count < target){
                    count+=5; // to controll the speed of counting
                    counter.innerText = count;
                    setTimeout(updateCount,10);
                }else{
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    } else if(scrollY < container.scrollTop - container.scrollHeight - 500 || scrollY ===0 && activated === true){
        counters.forEach(counter =>{
            counter.innerText = 0;
        });
        activated = false;
    } 
})
// for normal scrolling
const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=> observer.observe(el))

// for cards scrolling effects
const observer2 = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }else{
            entry.target.classList.remove('show2')
        }
    })
})
const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement2.forEach((el)=> observer2.observe(el))

// FAQ section

const faqs = document.querySelectorAll(".faqsection");

faqs.forEach(faq => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      faqs.forEach(otherFaq => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


// security

document.onkeydown = e =>{
    if(e.key == "F12"){
        return false;
    }
    if(e.ctrlKey && e.key == "u"){
        return false;
    }
    if(e.ctrlKey && e.key == "U"){
        return false;
    }
}

