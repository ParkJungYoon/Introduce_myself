function 야간모드() {
    let target = document.querySelector('article');
    let c = document.querySelector('h2');
    let b = document.querySelector('#hi');
    let a = document.querySelector('#article');
    target.style.backgroundColor='#062C4B';
    a.style.color = 'white';
    b.style.color = 'white';
    c.style.color = 'white';

}
function 주간모드() {
    let target = document.querySelector('article');
    let c = document.querySelector('h2');
    let b = document.querySelector('#hi');
    let a = document.querySelector('#article');
    target.style.backgroundColor='#ECF8FE';
    a.style.color = 'black';
    b.style.color = 'black';
    c.style.color = 'black';
    }


function 주간야간토글(self) {
    // 만약 this.value 가 dark라면 
    if(self.value === 'dark') {
        self.value = 'day';
        야간모드();

    } else  { // 아니라면 
        self.value = 'dark';
        주간모드();
    }
}