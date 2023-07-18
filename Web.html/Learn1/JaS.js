function $(id) {
  return document.getElementById(id);
}

window.onload = function () {
  function validateForm() {
    var email = $('email').value;
    var reEmail = $('re-email').value;
    var firstName = $('first-name').value;
    var isValid = false;

    if (!email) {
      $('email-err').innerText = "email is required"
    } else {
      $('email-err').innerText = ""
      isValid = true;
    }

    if (!reEmail) {
      $('re-email-err').innerText = "replace email is required"
    } else if(reEmail !== email) {
      $('re-email-err').innerText = "replace email not compare with email"
    } else {
      $('re-email-err').innerText = ""
      isValid = true;
    }

    if (!firstName) {
      $('first-name-err').innerText = "firstName is required"
    } else {
      $('first-name-err').innerText = ""
      isValid = true;
    }

    if(isValid) {
      alert('Login success')
    }
  }

  $('submit').onclick = validateForm
}