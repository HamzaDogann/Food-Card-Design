const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const numberInput = document.getElementById('numberInput');

plusBtn.addEventListener('click', ()=>{
    
    let currentValue = parseInt(numberInput.value, 10);
    if (currentValue < 99) {
        currentValue++;
        numberInput.value = currentValue;
    }
});

minusBtn.addEventListener('click', ()=> {
    
    let currentValue = parseInt(numberInput.value, 10);
    if (currentValue > 0) {
        currentValue--;
        numberInput.value = currentValue;
    }
});
