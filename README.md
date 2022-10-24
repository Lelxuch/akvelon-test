# akvelon-test
Sanzhar Nakyp

# Installation
Open two terminals from the root of the project

### 1st terminal
```
$ cd client
$ npm install
$ npm start
```
React application will be started on ":3000"

### 2nd terminal
```
$ cd server
$ npm install
$ npm start
```
Server will be started on ":8081"

# Client side
React application with 3 pages: sign in, sign up, users

### Sign in
It is the default page for non authorized pages. To sign in, you can you users.json data. You'll need username and password data

### Sign up
Or use sign up to add new user. This form get username, firstName, secondName, password

### Users
On this page is the logout button, a table of users with information about all users.

# Server side
This is a node js application for "login", "register", "get users" methods

### Initial users.json file
```
{
  "1" : {
    "username" : "test1",
    "firstName" : "John",
    "secondName" : "Watson",
    "password": "password"
  },
  "2" : {
    "username" : "test2",
    "firstName" : "Sherlock",
    "secondName" : "Holmes",
    "password": "password"
  },
  "3" : {
    "username" : "test3",
    "firstName" : "Sanzhar",
    "secondName" : "Nakyp",
    "password": "password"
  }
}
```
