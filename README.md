# mongodb-express-react  

# Repo-link
https://github.com/alexbryw/mongodb-express-react

# Install  
1. In /client folder run: npm install  
2. In /server folder run: npm install  

# Start  
Open two terminals in VSCode.  
  
In the first terminal enter 'cd client' and run 'npm start'  
A react client will open the default browser on http://localhost:3000  
  
In the second terminal enter 'cd server' and run 'npm start'  
A nodemon server will start an express api server on http://localhost:9000

# Description of the assignment
The assignment was to create a working chat app. There should be password-protected chat-rooms and public chat-rooms, all listed separately. You should be able to create new rooms, and if a room is not used it disappears.  

Ni ska skapa en användarbaserad plattform där en användare har möjligheten att registrera sig, logga in och skapa innehåll. Vad för innehåll som användaren kan skapa är valfritt med det ska vara baserat på en resurs i erat Express-API. Användardatan ska även den baseras på en egen resurs (users), där lösenordet är krypterat. Samtligt innehåll som skapas, förändras eller tas bort ska sparas till en MongoDB databas. Innehållet som en användare skapar får endast lov att ändras eller tas bort av skaparen. Plattformen ska innehålla en klientapplikation där samtliga operationer som nämnts ovan är genomförbara. Dessutom ska innehållet på något sätt presenteras i gränssnittet och vara synligt föra alla - även om man inte är inloggad.


FREADME.md fil som innehåller en titel, beskrivning av uppgiften och vad som krävs för att bygga och starta projektet, samt en länk till GitHub repot. Notera att om instruktioner för hur projektet byggs och startas inte finns eller om instruktionerna är felaktiga kan uppgiften bli underkänd.


Krav för godkänt:
Git & GitHub har använts

Det ska finnas minst två stycken resurser med CRUD-Endpoints
Det ska gå att registrera sig, logga in och skapa innehåll som är kopplat till inloggad
användare.
Endast den inloggade användaren får lov att utföra C_UD actions på sitt innehåll.
Allt innehåll ska sparas i en MongoDB databas.

Krav för väl godkänt:
Alla punkter för godkänt är uppfyllda
Det ska finnas en adminroll i systemet där man som inloggad admin har rättigheten att
utföra CRUD operationer på allt innehåll.
Admins ska ha tillgång till ett gränssnitt som listar alla användare och deras roller. En
admin ska från gränssnittet kunna ta bort användare eller ändra dess roll.

# Description of the app

You enter your username in the startpage. There's a main Chat. Rooms are listed on the right side. Hovering over a room will show who is currently there. When a new room is created, if a password isn't entered, it becomes a public room, and empty rooms are automatically deleted from the room lists. You can see when others are writing. When you are writing a message if you put a / in front of a word, it turns into a Gif. You can have any number of gifs in a message. There are more than two word you can turn into Gifs. 

# Creators
https://github.com/ozckarr 
https://github.com/Anne-Lie-Back 
https://github.com/alexbryw 