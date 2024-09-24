// card-3: donate now button
document.getElementById('btn-show-modal-2').addEventListener('click', function (event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-donation-amount-2');
    const totalRemainingBalance = getTextFieldValueById('remaining-balance');

    const totalDonation = getTextFieldValueById('total-donation-2');

    if (isNaN(donationAmount) || donationAmount < 0) {
        alert('Invalid Donation amount');
        return;
    }

    if (donationAmount === 0 || donationAmount > totalRemainingBalance) {
        alert('You do not have enough money to donate.');
        return;
    }

    const newDonationBalance = totalDonation + donationAmount;
    const newRemainingBalance = totalRemainingBalance - donationAmount;

    document.getElementById('total-donation-2').innerText = newDonationBalance;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;

    showModalById('my_modal_2');

// add to donation history

const div = document.createElement('div');
div.classList.add('rounded-2xl');
div.classList.add('border-2');
div.classList.add('border-[rgba(17,17,17,0.1)]');
div.classList.add('p-8');

const date = new Date();
console.log('now time is:', date);

div.innerHTML = `
<h4 class="text-xl font-bold text-[#111111]">${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
<p class="font-light">Date: ${date}</p>
`
document.getElementById('history-section').appendChild(div);
    
});

document.getElementById('btn-close-modal-2')
    .addEventListener('click', function (event) {
        event.preventDefault();
        closeModalById('my_modal_2');
    });
