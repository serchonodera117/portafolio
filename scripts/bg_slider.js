let banner = document.getElementById('banner');
let counter = 0

setInterval(changing, 7000)

function changing() {
    let currentClass = "head" + counter
    banner.classList.remove(currentClass)
    // console.log(currentClass)
    counter = (counter<4)? counter+1 : 0;
    currentClass = "head" + counter;
    banner.classList.add(currentClass)
}