# Game_Store
## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:
```
POST http://localhost:3000/api/auth/signup
```
### AUTHENTICATION ENDPOINTS
METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`      | Create a new account
POST   | `auth/login`       | Authenticates a user

### USERS
METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
POST   | `user`                 | Create user
GET    | `user/auth/:userId`    | Get One user
PUT    | `user/auth/:userId`    | Update user
DELETE | `user/auth/:userId`    | Delete user

### GAME

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
POST   | `game/auth/`           | Search for game by params
GET    | `game/auth/:gameId`    | Get One game


### MODELOS

### GAME 
| ATTRIBUTE   TYPE  
|-------------------------|
| name: STRING            |
| gender: STRING          |
| developers: STRING      |
| release_year: DATE      |
| platforms: arrays       |
| price: NUMBER           |
| photo: URL              |
| information: STRING     |

### USER
|---------------------------------|
| name: STRING                    |
| email: STRING                   |
| password: STRING                |
| phone: NUMBER                   |
| payment_method : STRING         |
| games: [OBJECTID]               |
| shopping_record: [objectid]     |



### SHOPPING_RECORD:
|-------------------|
| date: DATE        |
| game: OBJECTID    |
| downloads: NUMBER |


