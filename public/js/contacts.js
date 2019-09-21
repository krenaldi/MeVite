$(document).ready(function () {
    // Getting references to our form and input
    appendContactList();
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
      $.post("/contactz", userData).then(function (data) {
        console.log(data)
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).then(appendContactList()).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

    function appendContactList() {
      $("#contactDetails").empty();
      $.get("/contactz", function (data) {
        console.log(data);
        if(data.length > 0) {
          $("#contactDetails").append("<h2>Your Contacts!</h2>");
          for (let i=0; i < data.length; i++) {
            $("#contactDetails").append(`<div>`);
            $("#contactDetails").append(`<p>Contact Name: ${data[i].contactName}</p>`);
            $("#contactDetails").append(`<p>Contact Email: ${data[i].contactEmail}</p>`);
            $("#contactDetails").append(`<p>Contact Phone: ${data[i].contactPhone}</p>`);
            $("#contactDetails").append(`<button value="${data[i].id}" class="btn btn-default login-button editMe">Edit</button>
            <button value="${data[i].id}" class="btn btn-default login-button deleted">Delete</button> <br><span class='submitEdit'></span>`);
            $("#contactDetails").append(`</div>`);
          }
        } else {
          $("#contactDetails").append("<h2>You currently have no friends...</h2>");
        }
      });
    }

    $(document).on("click", ".deleted", function (e) {
      e.preventDefault();
      var id = $(this).val();

      $.ajax({
        method: "DELETE",
        url: "/contactz/" + id
      }).then(function () {
        $(this).closest("div").empty();
        appendContactList();
      })
    });

    $(document).on("click", "editMe", function (ev) {
      ev.preventDefault();
      $(".submitEdit").prepend("<form> <br>");
      $(".submitEdit").prepend("<button type='submit id='trigger1 class='btn btn-default login-button updateEdit'>Submit Edit</button>");
      $(".submitEdit").prepend("<div class='form-group'><input type='text' name='phone' id='contactPhone1' placeholder='Phone Number(444-444-4444)'></input></div>");
      $(".submitEdit").prepend("<div class='form-group'><input type='email' class='form-control' id='contactEmail1' placeholder='Email'></input></div>");
      $(".submitEdit").prepend("<div class='form-group'><input type='text' class='form-control' id='contactName1' placeholder='Name'></input></div>");
      $(".submitEdit").prepend("</form> <br>");
      var id = $(this).val();

      $(document).on("click", ".updateEdit", id, function (eve) {
        eve.preventDefault();

        var contactName1 = $("#contactName1");
        var contactEmail1 = $("#contactEmail1");
        var contactPhone1 = $("#contactPhone1");

        var updateData = {
          contactName: contactName1.val().trim(),
          contactEmail: contactEmail1.val().trim(),
          contactPhone: contactPhone1.val().trim()
        };

        if (!updateData.contactName || !updateData.contactEmail || !updateData.contactPhone) {
          return;
        }

        updateInfo(updateData, id);

      })
    })

    function updateInfo(x, y) {
      $.ajax({
        method: "PUT",
        url: "/contactz/" + y,
        data: x
      }).then(appendContactList);
    }
  });
  