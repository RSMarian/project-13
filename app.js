// target the button
// check whether the show-links class is on our unordered list; if yes, remove it; if not add it

// classList - shows/gets all classes
// contains - checks classList for specific class
// add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList.contains('show-links'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add('show-links')
    // }
    links.classList.toggle("show-links");
});