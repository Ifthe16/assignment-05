// toggle
function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// modal
function showModalById(id) {
    const modalShow = document.getElementById(id);
    const showModal = modalShow.showModal();
    return showModal;
};

function closeModalById(id) {
    const modalClose = document.getElementById(id);
    const closeModal = modalClose.close();
    return closeModal;
}

// input
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// inner text
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}    