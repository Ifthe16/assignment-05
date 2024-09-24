document.getElementById('btn-show-modal').addEventListener('click', function (event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById('input-donation-amount-1');
    const totalRemainingBalance = getTextFieldValueById('remaining-balance');

    const totalDonation = getTextFieldValueById('total-donation-1');

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

    document.getElementById('total-donation-1').innerText = newDonationBalance;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;

    showModalById('my_modal_1');
});

document.getElementById('btn-close-modal-1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        closeModalById('my_modal_1');
    });
