# Game_Store
## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:
```
POST http://localhost:3000/api/auth/signup
```
### AUTHENTICATION ENDPOINTS
METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`  | Create a new account
POST   | `auth/login`   | Authenticates a user

### USERS
METHOD | URL                    | What does it do
-------|------------------------|---------------------------------> ADMINISTRADOR
GET    | `/user`                | Get All usersDetails
POST   | `user`                 | Create user
GET    | `user/:userId`         | Get One user
PUT    | `user/:userId`         | Update user
DELETE | `user/:userId`         | Delete user

### GAME

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------> ADMINISTRADOR
GET    | `/game`                | Get All gamesDetails
GET    | `game/:gameId`         | Get One game
PUT    | `game/:gameId`         | Update game
DELETE | `game/:gameId`         | Delete game

### Carrito
METHOD | URL                    | What does it do
-------|------------------------|--------------------------------->CARRITO COMO ADMINISTRADOR
GET    | `/carrito`             | Get All carritossDetails
POST   | `carrito`              | Create carrito
GET    | `carrito/:carritoId`   | Get One carrito
PUT    | `carrito/:carritoId`   | Update carrito
DELETE | `carrito/:carritoId`   | Delete carrito


### USER CARRITO-PERFIL (Authenticated)
All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------> EL USUARIO CON SU CUENTA
GET    | `user/carrito`          | Get User's Lessons (unstarted, ongoing, finished)
POST   | `user/carrito/:gameId`  | Add game to my carrito (unstarted)
GET    | `user/carrito/:gameId`  | Return my game (with user progress)
DELETE | `user/carrito/:gameId`  | Delete User's game from My cart
GET    | `user/profile`          | Get info from User (TODO)
PUT    | `user/profile`          | Modify User info (TODO)
DELETE | `user/profile`          | Eliminar su cuenta privada

### SEARCH
METHOD | URL                     | What does it do

POST   | `/`                     | Search for name

### MODELOS

GAME 

Nombre: STRING
genero: STRING
Programadores: STRING
Año de salida: DATE
Plataformas: arrays
Precio: NUMBER
FOTO: URL 
INFORMACION : STRING 

USUARIO

NOMBRE DE USUARIO: STRING
EMAIL: STRING
CONTRASEÑA: STRING
TELEFONO: NUMBER
METODO DE PAGO : STRING
CARRITO: OBJETID

CARRITO

JUEGOS EN CARRITO :[OBJECTID]

REGISTRO DE COMPRAS

carritos:[objectId]
    


