const allButtons = document.getElementById('card-section').querySelectorAll('.card-body button');

for (const button of allButtons) {
    button.addEventListener('click', function (event) {

        const orderedList = document.querySelectorAll('.dom-part .top ol li');
        const listLength = Object.keys(orderedList).length;


        if (listLength < 5) {
            event.target.disabled = true;
            event.target.style.backgroundColor = '#A2A9AF';
            const playerName = button.parentNode.querySelector('h5').innerText;


            const listElement = document.createElement('li');
            listElement.innerText = playerName;
            listElement.style.color = 'white';
            const orderList = document.getElementById('order-list');
            orderList.appendChild(listElement);
        } else {
            alert("You have already selected your five favorite player. You can't added more.");
        }

    });
}