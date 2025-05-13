const accordians =
    document.querySelectorAll('.accordian')
accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon')
    const answer = accordian.querySelector('.answer')
    const ac_container = accordian.querySelector('.ac_container')


    accordian.addEventListener("click", () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
            ac_container.style.maxHeight = null;
        }

        else {
            icon.classList.add('active')
            answer.style.maxHeight = answer.scrollHeight + 'px'
            ac_container.style.maxHeight = ac_container.scrollHeight + 'px'
        }

    })

})

// navbar animation 



window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
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
