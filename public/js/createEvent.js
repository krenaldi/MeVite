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
  createEvents.on("click", function (event) {
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
    $.get("/createEvent", function (data) {

      if (data.length > 0) {
        console.log(data);
        $("#eventDetails").append("<h2>Your Events!</h2>");
        for (let i = 0; i < data.length; i++) {
          $("#eventDetails").append(`<div>`);
          $("#eventDetails").append(`<p>Event Name: ${data[i].title} </p>`);
          $("#eventDetails").append(`<p>Event Date: ${data[i].date} Time: ${data[i].time}</p>`);
          $("#eventDetails").append(`<p>Event Location: ${data[i].address}, ${data[i].city} ${data[i].state}, ${data[i].zipcode} ${data[i].country} </p>`);
          // $("#eventDetails").append(`<p>Event Name: ${data[i].createdAt} </p>`);
          // $("#eventDetails").append(`<p>Event Name: ${data[i].updatedAt} </p>`);
          $("#eventDetails").append(`<button value="${data[i].id}" class="btn btn-default login-button editMe">Edit</button>
          <button value="${data[i].id}" id="deleted${i}" class="btn btn-default login-button deleted">Delete</button>
          <button class="btn btn-default login-button">Send Invites</button> <br><span class='submitEdit'></span>`);
          $("#eventDetails").append("</div>");
        }
      } else {
        $("#eventDetails").append("<h2>You currently have no events planned!</h2>");
      }
    });
  }

  $(document).on("click", ".deleted", function (e) {
    e.preventDefault();
    var id = $(this).val();

    $.ajax({
      method: "DELETE",
      url: "/createEvent/" + id
    }).then(function () {
      $(this).closest("div").empty();
      appendEventHistory();
    })
  });


  $(document).on("click", ".editMe", function (ev) {
    ev.preventDefault();
    $(".submitEdit").prepend("<form> <br>");
    $(".submitEdit").prepend("<button type='submit' id='trigger1' class='btn btn-default login-button updateEdit'>Submit Edit</button>");
    $(".submitEdit").prepend("<div class='country'><input type='text' class='form-control' id='country1' placeholder='New Country'></input></div><br>");
    $(".submitEdit").prepend("<div class='zip'><input type='text' class='form-control' id='zipcode1' placeholder='New Zipcode'></input></div>");
    $(".submitEdit").prepend("<div class='state'><select class='form-control' id='state1' <option>State</option> <option value='AL'>AL</option> <option value='AK'>AK</option> <option value='AR'>AR</option> <option value='AZ'>AZ</option> <option value='CA'>CA</option> <option value='CO'>CO</option> <option value='CT'>CT</option> <option value='DC'>DC</option> <option value='DE'>DE</option> <option value='FL'>FL</option> <option value='GA'>GA</option> <option value='HI'>HI</option> <option value='IA'>IA</option> <option value='ID'>ID</option> <option value='IL'>IL</option> <option value='IN'>IN</option> <option value='KS'>KS</option> <option value='KY'>KY</option> <option value='LA'>LA</option> <option value='MA'>MA</option> <option value='MD'>MD</option>  <option value='ME'>ME</option> <option value='MI'>MI</option> <option value='MN'>MN</option> <option value='MO'>MO</option> <option value='MS'>MS</option> <option value='MT'>MT</option> <option value='NC'>NC</option> <option value='NE'>NE</option> <option value='NH'>NH</option> <option value='NJ'>NJ</option> <option value='NM'>NM</option> <option value='NV'>NV</option> <option value='NY'>NY</option> <option value='ND'>ND</option> <option value='OH'>OH</option> <option value='OK'>OK</option> <option value='OR'>OR</option> <option value='PA'>PA</option> <option value='RI'>RI</option> <option value='SC'>SC</option> <option value='SD'>SD</option> <option value='TN'>TN</option> <option value='TX'>TX</option> <option value='UT'>UT</option> <option value='VT'>VT</option> <option value='VA'>VA</option> <option value='WA'>WA</option> <option value='WI'>WI</option> <option value='WV'>WV</option> <option value='WY'>WY</option> <br><</select></div>");
    $(".submitEdit").prepend("<div class='city'><input type='text' class='form-control' id='city1' placeholder='New City'></input></div>");
    $(".submitEdit").prepend("<div class='form-group'><input type='text' class='form-control' id='address1' placeholder='New Address'></input></div>");
    $(".submitEdit").prepend("<div class='time'><input type='Time' class='form-control' id='time1' placeholder='New Time'></input></div>");
    $(".submitEdit").prepend("<div class='date'><input type='Date' class='form-control' id='date1' placeholder='New Date'></input></div>");
    $(".submitEdit").prepend("<div class='form-group'><input type='text' class='form-control' id='title1' placeholder='New Title'></input></div>");
    $(".submitEdit").prepend("</form> <br>");
    var id = $(this).val();


    $(document).on("click", ".updateEdit", id, function (eve) {
      eve.preventDefault();

      var title1 = $("#title1");
      var date1 = $("#date1");
      var time1 = $("#time1");
      var address1 = $("#address1");
      var city1 = $("#city1");
      var state1 = $("#state1");
      var zipcode1 = $("#zipcode1");
      var country1 = $("#country1");

      var updateData = {

        title: title1.val().trim(),
        date: date1.val().trim(),
        time: time1.val().trim(),
        address: address1.val().trim(),
        city: city1.val().trim(),
        state: state1.val().trim(),
        zipcode: zipcode1.val().trim(),
        country: country1.val().trim()
      };

      if (!updateData.title || !updateData.date || !updateData.time || !updateData.address ||
        !updateData.city || !updateData.state || !updateData.zipcode || !updateData.country) {
        return;
      }

      updateInfo(updateData, id);

    })
  })

  function updateInfo(x, y) {
    $.ajax({
      method: "PUT",
      url: "/createEvent/" + y,
      data: x
    }).then(appendEventHistory);
  }

});


