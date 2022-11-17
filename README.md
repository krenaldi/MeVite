# MeVite
A website where users register or login to create events that they can invite other people to by sending out emails to the people they want to invite. The people who are invited will click on a link in the email which takes them to the site to either confirm or decline the invite. If the invite is accepted, then the site will update the status of that person that they are attending. Otherwise if the person declines or doesn't respond then the site will mark the the person as declined by default. The user who created the event will then be able to keep track of who has accepted or declined the event on the site.

1. User is taken to the main page which user must sign-in with email and password. If user does not have a login, the user will need to click on the register link and fill out the form that will store users info in a db table called Users. This will include the user's first & last name, user id and email address. It contains validation to ensure user data is valid or user id not already in use and encrypts the password the user has typed for security.
2. Once user is logged in, they will be sent to a form where they can create either an event or a contact to add to future events.
    1.  The event page will require a title of the event, the date and time of the event, and the location of the event (Street Address, City, State, Zip Code, Country). This information will be saved in a createEvents table.
    2.  The contacts page will have a form where the user will keep adding people they want to invite with their names, email addresses, and optional phone number. This will be saved to a seperate table called Contacts in the db along with the user id who created this list.
3. Upon submission of the event, an email will be sent to the people who are listed on the invite including the user who created it. The email will contain the event title, date & time, and location along with the user who created the invite and a button they will click on if they want to accept, decline the invite or if they are undecided.
4. After creation of the event in the db, a page will be generated based on the data in the event table. There will be an option to modify the event to either change the date or time or location and and add additional invitees that only the user who created the event can do. The page will display the invitees in 3 seperate columns: Decline (default if no one has replied), Accepted, Maybe.
5. Invitees will click on the button in the email that will take them to a page that will show the event page. The page will have radio buttons next to the invitee's name if they wish to change their mind about attending.
6. The user will then be able to refer back to this event page after they login and be able to keep track of who's coming and how many people are coming.

## App diagram
![MeVite App Diagram](MeVite%20DB%20diagram.png)