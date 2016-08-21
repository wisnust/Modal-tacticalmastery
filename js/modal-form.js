
$(document).ready(function() {

  $('input[type=number]').on('keydown', function (e) {
    e = (e) ? e : window.event;
    var charCode = (e.which) ? e.which : e.keyCode;
    var availableChar = [8, 18, 33, 34, 35, 36, 37, 38, 39, 40, 46];
    if (availableChar.indexOf(charCode) != -1) {
      return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });

  $('input[type=tel]').on('keydown', function (e) {
    e = (e) ? e : window.event;
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 189)  {
      return false;
    }
    return true;
  });
  $('#checkoutForm')
      .on('init.field.fv', function (e, data) {
        var field = data.field,        // Get the field name
            $field = data.element,      // Get the field element
            bv = data.fv;           // FormValidation instance

        // Create a span element to show valid message
        // and place it right before the field
        var $span = $('<small/>')
            .addClass('help-block validMessage text-success')
            .attr('data-field', field)
            .insertAfter($field)
            .hide();

        // Retrieve the valid message via getOptions()
        var message = bv.getOptions(field).validMessage;
        if (message) {
          $span.html(message);
        }
      })
      .formValidation({
        framework: 'bootstrap4',
        icon: {
          valid: 'fa fa-check',
          invalid: 'fa fa-remove',
          validating: 'fa fa-refresh'
        },
        autoFocus: true,
        fields: {
          // Name field
          name: {
            validMessage: 'Nice to meet you!',
            validators: {
              notEmpty: {
                message: 'The name is required'
              },
              stringLength: {
                max: 100,
                message: 'The name must be less than 100 characters long. '
              },
              // regexp: {
              //     regexp: /^[a-zA-Z' \.]+$/,
              //     message: 'The name can only consist of alphabetical'
              // }
            }
          }, 
          // Email field
          email: {
            validMessage: 'We will email you a confirmation',
            validators: {
              notEmpty: {
                message: 'The email address is required'
              },
              stringLength: {
                min: 1,
                max: 100,
                message: 'The email address must be more than 6 and less than 30 characters long. '
              },
              regexp: {
                regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                message: 'The value is not a valid email address'
              }
            }
          },
          // phone number field
          phonenumber: {
            validMessage: 'We will only contact you about your order',
            validators: {
              notEmpty: {
                message: 'Please supply a phone number so we can call if there are any problems using this address.'
              },
              stringLength: {
                min: 10,
                message: 'Not a valid 10-digit US phone number.'
              }
            }
          }
        }
      })
      .on('err.field.fv', function(e, data) {
      })
      .on('success.validator.fv', function(e, data) {
      })
      .on('err.form.fv', function (e, data) {
      })
      .on('success.form.fv', function (e, data) {
      })
      .on('success.field.fv', function (e, data) {
        var field = data.field,        // Get the field name
            $field = data.element;      // Get the field element

        // Show the valid message element
        $field.next('.validMessage[data-field="' + field + '"]').show();
 
      })
      .on('err.field.fv', function (e, data) {
        var field = data.field,        // Get the field name
            $field = data.element;      // Get the field element

        // Show the valid message element
        $field.next('.validMessage[data-field="' + field + '"]').hide();
      });

});

jQuery(function ($) {
  $('input[name=phonenumber]').mask('000-000-0000', {'translation': {0: {pattern: /[0-9*-]/}}}); 

  $('#buyModal').on('shown.bs.modal', function(event) {
    
      window.scrollTo(0,1)
      setTimeout(function(){
        $('#name').focus();
      },1000);
   
      $('#name').focus()
  });
});