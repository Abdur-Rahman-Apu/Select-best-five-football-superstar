const allButtons = document.getElementById('card-section').querySelectorAll('.card-body button');

for (const button of allButtons) {
    button.addEventListener('click', function (event) {

        // get how many players are selected
        const listLength = getOrderListLength('.dom-part .top ol li');

        if (listLength < 5) {

            // disable button after selecting once 
            event.target.disabled = true;
            event.target.style.backgroundColor = '#A2A9AF';

            // getting player name 
            const playerName = button.parentNode.querySelector('h5').innerText;

            // creating and setting list element dynamically 
            const listElement = document.createElement('li');
            listElement.innerText = playerName;
            listElement.style.color = 'white';
            const orderList = document.getElementById('order-list');
            orderList.appendChild(listElement);

        } else {

            // error message 
            alert("You have already selected your five favorite player. You can't added more.");
        }

    });
}