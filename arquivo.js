document.addEventListener('DOMContentLoaded', function() {
    const submitButtons = document.querySelectorAll('.submitButton');
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));

    function submitForm(event) {
        event.preventDefault(); 
        if(confirmSubmit() == true){
            alert('The form has been submitted');
            

            clearFields();
        } else {
            alert("Submission denied");
        }
    }
    
    submitButtons.forEach(button => {
        button.addEventListener('click', submitForm);
    });

    function confirmSubmit(){
        var confirmation = confirm("Are you sure that want to submit this form?");
        return confirmation;
    }

    function clearFields() {
        document.getElementById('newExpense').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').selectedIndex = 0;
        document.getElementById('expenses').value = '';
        document.getElementById('dateinput').value = '';
        document.getElementById('parcelamento').value = '';
    }
});
