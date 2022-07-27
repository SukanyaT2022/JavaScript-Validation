function validateForm() {
  let x = document.forms['vForm']['FirstName'].value;
  if (x == '') {
    alert('Please fill this form');
  } else {
    alert('Already fill the form');
  }
}
