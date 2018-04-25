# Junior Dev Challenge #
### Challenge Instructions ###

Based on this [Prototype](https://xd.adobe.com/view/aff4126f-c5ae-4b34-a517-d3ff89435500), and the code provided (if desired), produce a basic photo album site.

**Home Page** : List of users
**User Specific Component** : Users name shown at top, Dropdown / Select box listing all albums, when clicked this takes you to the pictures within that album
**Album Specific Component** : Tiles, each with an image on.

Use [JSON Placeholder](https://jsonplaceholder.typicode.com/) as your data source, specifically */users*, */albums*, */photos*.

**You may** :
  * Start from scratch and ignore our code
  * Call JSON Placeholder from the client-side or the server-side.
  * Copy code from the web, however please comment your code with where you took it from. We'll be asking questions on how / why you chose to use it and how you modified it to work for you.
  * Get in touch anytime if you have questions or concerns
  * Consider extending the functionality outlined
**You Must** :
  * Bring a laptop with you to the interview
  * Push your code to a Git Repo

### Run Instructions ###
To run the express server `npm run dev`
Open [`localhost:3000`](http://localhost:3000) in your browser
**Note** : If you are getting an 'Access Control Allow Origin' error try opening in Chrome and installing and enabling this chrome extension:
https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim?hl=en


## Let's get started! ##

### User Stories ###
From the specs above, I have decided to comply with the user stories below

```
As a user,
so that I can browse my personal photos
I want to be able to see a list of users
```
```
As a user,
so that I can see my photos,
I want to be able to click on my name
```
```
As a user,
so that I can see my own photo albums,
I want to be able to see a list of all my albums
```
```
As a user,
so that I can see photos from a specific album,
I want to be able to click on the album
```



### How to use ###
Please follow the steps below!

- Clone and setup repository:

You will need to setup the repo on your local machine; please enter the following commands from your command line:

```
  $ git clone https://github.com/evadinckel/cordant-test.git
```
Move into this directory.

- You will then need to install the dependencies by running the following:
```
  $ npm install
```
- Next:
Please run the following command to have the app running:
```
$ npm start
```



### Notes ###
- The main goal here is to fetch API data from 3 different endpoints (users/albums/photos)
- Separation of concerns: creation of 3 different components to have access to this data






The end! :)
