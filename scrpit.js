
// Nav bar scroll function

// let navBar = document.getElementById("nav-bar");

// window.scroll = function() { scrollNavBar()};

// function scrollNavBar(){
//     if(document.body.scrollTop > 20){
//         document.getElementById('nar-bar').style.top = "0";
//     }
// };


let counterRun = false; // to validate the counter doen't run more then one times on single page load

function startCounterAnimation() {
    if (!counterRun) {
        let counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            let target = +counter.getAttribute('data-count');
            let current = 0;
            let increment = target / 100;

            var timer = setInterval(function () {
                current += increment;
                counter.textContent = Math.floor(current);
                if (current >= target) {
                    clearInterval(timer);
                    counter.textContent = target;
                }
            }, 10);
        });
    }
}

function checkScrollPosition() {
    var counterarea = document.getElementById('counter-area-id');
    var counterTop = counterarea.offsetTop;
    var counterBtm = counterarea.offsetTop + counterarea.clientHeight;
    var topScreen = window.scrollY;
    var btmScreen = window.scrollY + window.innerHeight;

    if (btmScreen > counterTop && topScreen < counterBtm) {
        startCounterAnimation();
        counterRun = true;
    }
}
window.addEventListener('scroll', checkScrollPosition);


document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementById('testimonialContent');
    const ImageElement = document.getElementById('authorImage');
    const authorElement = document.getElementById('author');
    const titleElement = document.getElementById('title');

    let currentTestimonialIndex = 0
    function updateTestimonial(testimonials){
        const currentTestimonial = testimonials[currentTestimonialIndex];
        contentElement.textContent = currentTestimonial.content;
        ImageElement.setAttribute('src', currentTestimonial.image);
        authorElement.textContent = currentTestimonial.author;
        titleElement.textContent = currentTestimonial.title;
    }
    fetch('testmonial.json')
    .then((promise) => {return promise.json()})
        .then(testimonials => {
            updateTestimonial(testimonials);

            document.querySelector('.left-arrow-btn').addEventListener('click', function () {
                currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial(testimonials);
        })
        
        document.querySelector('.right-arrow-btn').addEventListener('click',function(){
            currentTestimonialIndex = (currentTestimonialIndex + 1)%testimonials.length;
            updateTestimonial(testimonials);
        })
    });
});










// document.addEventListener("DOMContentLoaded", function () {
//     const contentElement = document.getElementById('testimonialContent');
//     const ImageElement = document.getElementById('authorImage');
//     const authorElement = document.getElementById('author');
//     const titleElement = document.getElementById('title');

//     let currentTestimonialIndex = 0;

//     function updateTestimonial(testimonials) {
//         const currentTestimonial = testimonials[currentTestimonialIndex];
//         contentElement.textContent = currentTestimonial.content;
//         ImageElement.setAttribute('src', currentTestimonial.image);
//         authorElement.textContent = currentTestimonial.author;
//         titleElement.textContent = currentTestimonial.title;
//     }

//     fetch('testmonial.json')
//         .then(response => response.json())
//         .then(testimonials => {
//             updateTestimonial(testimonials);

//             document.querySelector('.left-arrow-btn').addEventListener('click', function () {
//                 currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
//                 updateTestimonial(testimonials);
//             });
//             document.querySelector('.right-arrow-btn').addEventListener('click', function () {
//                 currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
//                 updateTestimonial(testimonials);
//             });
//         })
//         .catch(error => console.error('Error fetching testimonials:', error));
// });

