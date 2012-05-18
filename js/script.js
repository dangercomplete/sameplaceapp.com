$(document).ready(function() {
  $('#email').example('email@example.com');
  $('#inviteform').submit(function(e) {
    $.ajax({
      url: this.action,
      data: $(this).serialize(),
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        mixpanel.track("Submitted email");
        if (data.Status != 200) {
          alert(data.Message);
        } else {
          $('#inviteform').fadeTo(250, 0, function() {
            $('#thanks').fadeIn();
          });
        }
      }
    });
    e.preventDefault();
  });
});