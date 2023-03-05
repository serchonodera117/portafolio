let navContainer = document.getElementById("navbar");
let img = document.getElementById("profile-nav");
let sentinel = document.getElementById("sentinel");
let searchbar = document.getElementById("search")

let observer = new window.IntersectionObserver(checkVisibility,{})
observer.observe(sentinel);

function checkVisibility(entries){
let entry = entries[0]
    if(!entry.isIntersecting){
        navContainer.classList.add('sticked-nav');
        img.style.visibility = 'visible';
        img.style.opacity = '1';
        searchbar.style.marginTop = '19px';

    }else{
        navContainer.classList.remove('sticked-nav');
        img.style.visibility = 'hidden';
        img.style.opacity = '0';
        searchbar.style.marginTop = '15px';
    }
}
