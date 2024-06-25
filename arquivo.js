
document.addEventListener('DOMContentLoaded', function() {
    const submitform = document.getElementById('submitform');

    function submitForm(event) {
        event.preventDefault(); 
        alert('The form has been submitted');
        clearFields();
    }

    submitform.addEventListener('click', submitForm);

    function clearFields() {
        document.getElementById('submitform').value = '';
        document.getElementById('parcelamento').value = '';
        document.getElementById('dateinput').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('newExpense').value = '';
        
    }

    // open modal
    // close modal
    // confirm submit
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })



    
});







