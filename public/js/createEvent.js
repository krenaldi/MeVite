$(document).ready(function () {
  // Getting references to our form and input
  var createEvents = $(".createEvents");
  var title = $("#title");
  var date = $("#date");
  var time = $("#time");
  var address = $("#address");
  var city = $("#city");
  var state = $("#state");
  var zipcode = $("#zipcode");
  var country = $("#country");

  // When the signup button is clicked, we validate the email and password are not blank
  createEvents.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      title: title.val().trim(),
      date: date.val().trim(),
      time: time.val().trim(),
      address: address.val().trim(),
      city: city.val().trim(),
      state: state.val().trim(),
      zipcode: zipcode.val().trim(),
      country: country.val().trim()
    };

    if (!userData.title || !userData.date || !userData.time || !userData.address ||
      !userData.city || !userData.state || !userData.zipcode || !userData.country) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    createNewEvent(userData);
  });

  // Does a post to the createEvent route. If succesfull, we are redirected to the members page
  // Otherwise we log any errors
  function createNewEvent(userData) {
    $.post("/createEvent", userData).then(function (data) {
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
