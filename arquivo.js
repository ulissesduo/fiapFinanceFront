
document.addEventListener('DOMContentLoaded', function() {
    const submitform = document.getElementById('submitform');
    const tooltip = document.getElementsByClassName('tooltips');
    function submitForm(event) {
        event.preventDefault(); 
        if(confirmSubmit() == true){
            alert('The form has been submitted');
            clearFields();
        }
        else{
            alert("submnition denied")
        }
    }
    submitform.addEventListener('click', submitForm);

    function confirmSubmit(){
        //display modal alert to confirm the submit. I'll add a confirm javascript input but latter the modal itself
        var confirmation = confirm("Are you sure that want to submit this form?");
        if(confirmation == true){
            return true;
        }
        else{
            return false;
        }
    }

    function clearFields() {
        document.getElementById('submitform').value = '';
        document.getElementById('parcelamento').value = '';
        document.getElementById('dateinput').value = '';
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('newExpense').value = '';
        document.getElementById('expenses').value = '';
        
    }
     
});







