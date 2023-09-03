// toogle icon navbar 

// scroll section 
window.onscroll = () => {
    // sticky header 
    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100)
}