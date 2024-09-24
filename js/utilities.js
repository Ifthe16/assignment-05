function showSectionById(id){
document.getElementById('donation-section').classList.add('hidden');
document.getElementById('history-section').classList.add('hidden');

document.getElementById(id).classList.remove('hidden');
}

function showModalById(id){
    const  modalShow = document.getElementById(id);
    const showModal = modalShow.showModal();
    return showModal;
    };

 function closeModalById(id){
    const modalClose = document.getElementById(id);
    const closeModal = modalClose.close();
return closeModal;
 }   

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}    