const reasonInput = document.querySelector('#reason-input');
const amountInput = document.querySelector('#amount-input');
const btnCancel = document.querySelector('#btn-cancel');
const btnAdd = document.querySelector('#btn-add');
const expenseList = document.querySelector('#expense-list');


const clear = ()=>{
         reasonInput.value='';
         amountInput.value='';
}

btnAdd.addEventListener('click', ()=>{
    enteredReason = reasonInput.value;
    enteredAmount = amountInput.value;
    if(enteredReason.trim().length <=0 || enteredAmount <=0 ){
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ' ' + enteredAmount + ' $';
    expenseList.appendChild(newItem);
    clear();
});

btnCancel.addEventListener('click', clear);

