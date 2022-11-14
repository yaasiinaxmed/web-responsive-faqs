const icon = document.querySelector("i");
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const faqs = document.querySelectorAll('.faq');


toggle.addEventListener("click", () => {
   if (icon.classList.contains('bi-list')){
     nav.classList.toggle('show');
     icon.classList.replace('bi-list','bi-x');
     icon.style.fontSize = '25px'
   } 
   else {
     nav.classList.remove('show');
     icon.classList.replace('bi-x', 'bi-list');
   }
})

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');
    })
})


