let menu =document.getElementById('nav');
let bar =document.getElementById('bars');
menu.style.maxHeight='0px';
bar.addEventListener('click', function () {
    if (menu.style.maxHeight=='0px'){
        menu.style.maxHeight='400px';
        menu.style.transition='0.7s';
    }else {
        menu.style.maxHeight='0px';
    }
});