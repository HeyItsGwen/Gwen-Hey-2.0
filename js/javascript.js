let topPAnim = document.getElementById('topPChange');

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
