$(document).ready(function () {
    // Getting references to our form and input
    var addContacts = $(".addContacts");
    var contactName = $("#contactName");
    var contactEmail = $("#contactEmail");
    var contactPhone = $("#contactPhone");
  
    // When the signup button is clicked, we validate the email and password are not blank
    addContacts.on("submit", function (event) {
      event.preventDefault();
      var userData = {
        contactName: contactName.val().trim(),
        contactEmail: contactEmail.val().trim(),
        contactPhone: contactPhone.val().trim()
      };
  
      if (!userData.contactName || !userData.contactEmail || !userData.contactPhone) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      createNewContact(userData);
    });
  
    // Does a post to the contacts route. If succesfull, we are redirected to the members page
    // Otherwise we log any errors
    function createNewContact(userData) {
      $.post("/contacts", userData).then(function (data) {
        console.log(data)
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  function updateContact(userData){
    $.put()
  }