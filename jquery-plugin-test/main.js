$(document).ready(function () {
  $('form').each(function() {
    $(this).validate({
      rules: {
        name: {
          required: true
        },
        lastName: {
          required: true
        },
        first: {
          required: true
        },
        second: {
          required: true
        },
      }
    });
  });

  $('#validateForms').click(function() {
    let formsValidated;
    $('form').each(function() {
      $(this).valid();
      formsValidated = $(this).valid();
    });
    console.log('formsValidated: ', formsValidated);
    if (formsValidated) {
      $('#firstForm').submit();
      $('#secondForm').submit();
      console.log('yay!')
    }
  });
});
