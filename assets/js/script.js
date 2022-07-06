const next = document.getElementById('next');
const previous = document.getElementById('previous');
const slide = document.getElementsByClassName('slide');
const page = document.getElementsByClassName('page');

let  l = 0;

previous.style.opacity = '0.5';
page[1].style.opacity = '0.5';

next.onclick = () => {
    l++;
    for (let i of slide) {
        if (l==0) {
            i.style.left = "0px";
            next.style.opacity = '1';
        }
        if (l==1) {
            i.style.left = "-1300px";
            next.style.opacity = '0.5';
            previous.style.opacity = '1';
            page[0].style.opacity = '0.5';
            page[1].style.opacity = '1';
        }
        if (l>1) {l=1;}
    }
}


previous.onclick = () => {
    l--;
    for (let i of slide) {
        if (l==0) {
            i.style.left = "0px";
            next.style.opacity = '1';
            previous.style.opacity = '0.5';
            page[0].style.opacity = '1';
            page[1].style.opacity = '0.5';
        }
        if (l==1) {
            i.style.left = "-1300px";
            next.style.opacity = '0.5';
            previous.style.opacity = '1';
        }
        if (l<0) {l=0;}
    }
}
