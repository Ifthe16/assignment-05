// card-1: donate now button
document.getElementById('btn-show-modal').addEventListener('click', function (event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-donation-amount-1');
    const totalRemainingBalance = getTextFieldValueById('remaining-balance');
    const totalRemainingBalance2 = getTextFieldValueById('remaining-balance-2');
    const totalDonation = getTextFieldValueById('total-donation-1');

    if (isNaN(donationAmount) || donationAmount < 0) {
        alert('Invalid Donation amount');
        return;
    }
    
    if (donationAmount === 0 || donationAmount > totalRemainingBalance || donationAmount > totalRemainingBalance2) {
        alert('You do not have enough money to donate.');
        return;
    }

    const newDonationBalance = totalDonation + donationAmount;
    const newRemainingBalance = totalRemainingBalance - donationAmount;
    const newRemainingBalance2 = totalRemainingBalance2 - donationAmount;

    document.getElementById('total-donation-1').innerText = newDonationBalance;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;
    document.getElementById('remaining-balance-2').innerText = newRemainingBalance2;

    showModalById('my_modal_1');

    // add to donation history

    const div = document.createElement('div');
    div.classList.add('rounded-2xl');
    div.classList.add('border-2');
    div.classList.add('border-[rgba(17,17,17,0.1)]');
    div.classList.add('p-8');

    const date = new Date();
    console.log('now time is:', date);

    div.innerHTML = `
<h4 class="text-xl font-bold text-[#111111]">${donationAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
<p class="font-light">Date: ${date}</p>
`
    document.getElementById('history-section').appendChild(div);

});

document.getElementById('btn-close-modal-1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        closeModalById('my_modal_1');
    });
