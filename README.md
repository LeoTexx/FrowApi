# Frow API

API created as a test to Frow.

The API allow you to:

- Register a new user & login an existing user
- Search users by username or email
- Using the Spotify Web API, provide users with a list of paginated albums of new releases (Album id, Album artwork, Album name, Album url, Artist(s) details)



## Installation

*Clone the repository and install it dependencies:

```
git clone https://github.com/LeoTexx/FrowApi
yarn
//or
npm i
```

*Connect to your own database on the file ormconfig.json
```
{
  "type": <Your DB Type(postgres,mongoose,sqlite)>,
  "host": "<Host of your server(localhost)>",
  "port": <Server Port(5432)>,
  "username": "<Login to access your DB>",
  "password": "<Password to access your DB>",
  "database": <Your database>,
  "entities": ["src/app/models/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
```
*Run the migrations to create your table

```
yarn typeorm migration:run
//or
npm run typeorm migration:run
```

## Usage

To test our routes, we are using Insomnia, just intall it from the link below
https://insomnia.rest/download

After the installation, just add the following routes and try it.

POST localhost:4000/users :
-Create new user, send a JSON object in the following format:
```
{
  "email":<Your Email>,
  "password":<Your Password>,
  "userName":<Your Username>
}
```
POST localhost:4000/auth
-Generate a JWT token related with the user, send a JSON object in the following format:
```
{
  "email":<Your Email>,
  "password":<Your Password>
}
```
POST localhost:4000/find 
-Find user data using his email or username, send a JSON object in the following format:
```
{
  "email":<Your Email>
}
or
{
  "userName":<Your Username>
}
```
GET localhost:4000/users
-Login the user, sending it's token in the header

GET localhost:4000/spotify
-Get the last 50 releases from spotify


## Contributing
Feel free to clone and change what would better fit your needs, hope it helps😉

# About FROW

[FROW](https://frow.live)  is an iOS app which will bring together Artists and their Community, focusing on live music performances. As the creator economy matures and events/performances are on hold because of the pandemic, Artists are looking for opportunities to monetize their talent and get closer to their fans.
