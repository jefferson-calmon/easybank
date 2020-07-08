function toggleMenu(){
    const nav = document.getElementById('nav')
    const tog = document.getElementById('toggle');
    const shadow = document.getElementById('shadow');

    nav.classList.toggle('active')
    tog.classList.toggle('active')
    shadow.classList.toggle('active')
}