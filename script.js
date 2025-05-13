

// counter effect 


// navbar animation 



window.addEventListener('scroll', function () {
    const header = document.getElementById('hero_head');
    if (window.scrollY > 50) { // you can adjust the scroll position value
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// hamburger anaimation 

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Hamburger को X में बदलना
    menu.classList.toggle("active"); // Menu को Show/Hide करना


});
