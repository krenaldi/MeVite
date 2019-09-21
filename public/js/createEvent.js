$(document).ready(function () {
  // Getting references to our form and input
  appendEventHistory();
  var createEvents = $(".createEvents");
  var title = $("#title");
  var date = $("#date");
  var time = $("#time");
  var address = $("#address");
  var city = $("#city");
  var state = $("#state");
  var zipcode = $("#zipcode");
  var country = $("#country");

  // Trigger the create event function on submit
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
      // If we have all the userData, run the createNewEvent function
      createNewEvent(userData);
  });

  // Does a post to the createEvent route. If succesful, we are redirected to the members page otherwise we log any errors
  function createNewEvent(userData) {
    $.post("/createEvent", userData).then(function (data) {
      console.log(data)
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).then(appendEventHistory()).catch(handleLoginErr);
  }

  // function to throw error alert
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function appendEventHistory() {
      $("#eventDetails").empty();
      $.get("/createEvent", function(data) {
        if(data.length >= 0) {
        console.log(data);
        $("#eventDetails").append("<h2>Your Events!</h2>");
        for(let i=0; i < data.length; i++) {
          $("#eventDetails").append("<div id='deleteMe' >");
          $("#eventDetails").append(`<p>Event Name: ${data[i].title} </p>`);
          $("#eventDetails").append(`<p>Event Date: ${data[i].date} Time: ${data[i].time}</p>`);
          $("#eventDetails").append(`<p>Event Location: ${data[i].address}, ${data[i].city} ${data[i].state}, ${data[i].zipcode} ${data[i].country} </p>`);
          // $("#eventDetails").append(`<p>Event Name: ${data[i].createdAt} </p>`);
          // $("#eventDetails").append(`<p>Event Name: ${data[i].updatedAt} </p>`);
          $("#eventDetails").append(`<button class="btn btn-default login-button">Edit</button>
          <button value="${data.title}" id="deleted" class="btn btn-default login-button">Delete</button>
          <button class="btn btn-default login-button">Send Invites</button> <br>`)
          $("#eventDetails").append("</div>");
        }
      }else{
        $("#eventDetails").append("<h2>You currently have no events planned</h2>");
      }
      });
  }
  
  $("#deleted").on("click", function(event) {
    event.preventDefaultn();
    var title = $(this).value();
    $.delete(`/createEvent/:${title}`).then(function() {
      appendEventHistory();
    })
    
  });
});

