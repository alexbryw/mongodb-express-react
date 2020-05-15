# mongodb-express-react  


This is a project we made as an assignment for the course “Dynamic web development”, a part of our 2 year professional university program: “Front End Developer”.

# STUFF
The user based content app where you can enjoy and upload images of… stuff. An image with a title and, if you want to, a short text to complement the image. But beware! You need to register as a user to have access of the fun thing that is uploading content. Once you’ve registered though you just need to log in to access the goodness that is uploading. As a logged in user you can also edit and delete your posts, a necessity if something goes terribly wrong, like your cat taking a nap on your keyboard.


Even though we are open to a broad variety of stuff on the images you’d like to share, we have some comfort rules. A nice fundamental idea is “Could I show this to my mom?”, if (mom === “yes”) then you’re probably good to go! But some may have strange relationships with their moms… We have admins for that! Admins have the power to delete or edit posts, and if a user is being really nasty the admin has the ultimate power to delete that user as well! But we really hope it will never come to that.

## More information about the assignment

The assignment “User based content app” included using Express, Node.js, MongoDB, Mongoose (all these where mandatory) to build the back end of the app. Cookies and bcrypt are used to handle user’s login and password. We chose to use React, with Material UI as a designsystem, for the front end. 


[Github Repository](https://github.com/alexbryw/mongodb-express-react)


# Start / Install

1. Open two terminals in VSCode.  

---------------

2. In the first terminal enter **cd client**. 

Then:
 - If this is the **first time** you run this project: enter npm **install** and after that **npm start** in this terminal. 
- If you've **runned it before**: just type **npm start** in this terminal.

A react client will open the default browser on http://localhost:3000  

---------------

3. In the second terminal enter **cd server**.

Then:
 - If this is the **first time** you run this project: run **npm install** and after that **npm start** in this terminal. 
- If you've **runned it before**: just type **npm start** in this terminal.

A nodemon server will start an express api server on http://localhost:9000

---------------

4. During testing, images should be ignored locally. Add the two last outcommented parts in other cases. 

### A default user to use for testing purposes:
Database path we used: 'mongodb://localhost/lab3'

Log in with:

default-admin user
username: admin
password: admin

default-nonAdmin user
username: password
password: password

# Creators
- [Alexander Bryngelsson](https://github.com/alexbryw)
- [Anne-Lie Bäck](https://github.com/Anne-Lie-Back) 
- [Oskar Lindblad](https://github.com/ozckarr) 
