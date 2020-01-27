let topPAnim = document.getElementById('topPChange');
let topNav = document.getElementById('topNav');
let topNavUl = document.getElementById('topNavUl');
let topNavli = document.querySelector('.topNavli');

let projectPoints1 = document.querySelector('.projectPoints1');
let projectPoints2 = document.querySelector('.projectPoints2');
let projectPoints3 = document.querySelector('.projectPoints3');

let scrollPos = window.pageYOffset;

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    topPAnim.style.animation = '2500ms linear infinite orangeTopFade1';
    window.setInterval(() => {
        if(count == 0){
            topPAnim.innerText = 'Designer';
            count += 1;
        } else if(count == 1){
            topPAnim.innerText = 'Cooperator';
            count += 1;
        } else if(count == 2){
            topPAnim.innerText = 'Student';
            count += 1;
        } else if(count == 3) {
            topPAnim.innerText = 'Nerd'
            count += 1;
        } else{
            topPAnim.innerText = 'Developer';
            count = 0;
        }
    }, 2500);
});

const navMove = () => {
    topNav.style.position = 'fixed';
    topNav.style.top = '0';
    topNav.style.width = '100%';
    topNav.style.border = 'none';
    topNav.style.borderBottom = '6px solid rgb(46, 46, 46)';
    topNav.style.height = '45px';
    topNav.style.backgroundColor = 'white';

    topNavUl.style.flexDirection = 'row';
    topNavUl.style.alignItems = 'center';
    topNavUl.style.width = '40%';
    topNavUl.style.minWidth = '325px';
    topNavUl.style.position = 'relative';
    topNavUl.style.top = '-5px';
}

const navUnMove = () => {
    topNav.style.position = 'relative';
    topNav.style.top = '13px';
    topNav.style.width = '';
    topNav.style.border = '6px solid rgb(46, 46, 46)';
    topNav.style.height = '250px';
    topNav.style.backgroundColor = 'rgb(244, 254, 255)';

    topNavUl.style.flexDirection = 'column';
    topNavUl.style.alignItems = 'center';
    topNavUl.style.width = '100%';
    topNavUl.style.minWidth = '';
    topNavUl.style.position = 'relative';
    topNavUl.style.top = '-5px';
}

const projectPointMove = () => {
    projectPoints1.style.left = '-50%';
    projectPoints2.style.left = '-45%'; 
    projectPoints3.style.left = '-50%'; 
}

window.onscroll = () => {
    if((window.pageYOffset) >= 150) {
        navMove();
        projectPointMove();
    } else {
        navUnMove();
    }
};