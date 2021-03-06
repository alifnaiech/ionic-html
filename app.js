const reasonInput = document.querySelector('#reason-input');
const amountInput = document.querySelector('#amount-input');
const btnCancel = document.querySelector('#btn-cancel');
const btnAdd = document.querySelector('#btn-add');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const ionAlertController = document.querySelector('ion-alert-controller');

const clear = ()=>{
         reasonInput.value='';
         amountInput.value='';
}
totalExpenses = 0;

btnAdd.addEventListener('click', ()=>{
    enteredReason = reasonInput.value;
    enteredAmount = amountInput.value;
    
    
    if(enteredReason.trim().length <=0 || enteredAmount <=0 ){
        return alert('Invalid inputs');
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ' ' + enteredAmount + ' $';
    expenseList.appendChild(newItem);
   
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses + ' $';
    clear();
});

btnCancel.addEventListener('click', clear);

