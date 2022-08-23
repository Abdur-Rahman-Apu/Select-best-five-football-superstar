
document.getElementById('calculate').addEventListener('click', function () {

    // get how many players are selected
    const numberOfPlayers = getOrderListLength('.dom-part .top ol li');

    // get player expense 
    const playerCost = getValueById('player-field');

    if (isNaN(playerCost) || playerCost < 0) {
        alert("Enter player expense cost correctly");
    } else {

        // set to player expense place 
        const totalPlayerCost = playerCost * numberOfPlayers;
        setTextById('player-expense', totalPlayerCost);
    }

});


//calculate total cost

document.getElementById('calculate-total-cost').addEventListener('click', function () {

    // player expense cost 
    const playerExpenseField = document.getElementById('player-expense');
    const playerExpenseString = playerExpenseField.innerText;
    const playerExpense = parseInt(playerExpenseString);

    //manager pay cost
    const managerCost = getValueById('manager-pay-field');
    // coach cost 
    const coachCost = getValueById('coach-pay-field');

    if (isNaN(managerCost) || isNaN(coachCost) || managerCost < 0 || coachCost < 0) {
        alert("Please enter cost amount correctly");
    } else {

        // calculate and set total expense amount 
        const totalExpense = playerExpense + managerCost + coachCost;
        setTextById('total-cost-calculation', totalExpense);
    }

});