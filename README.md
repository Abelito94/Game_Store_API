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
POST   | `user`                 | Create user
GET    | `user/auth/:userId`         | Get One user
PUT    | `user/auth/:userId`         | Update user
DELETE | `user/auth/:userId`         | Delete user

### GAME

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------> ADMINISTRADOR
POST   | `game/auth/`                | Search for game by params
GET    | `game/auth/:gameId`         | Get One game


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
JUEGOS: [OBJECTID]
REGISTRO DE COMPRAS: [objectid]



REGISTRO DE COMPRAS:

FECHA: DATE
GAME: OBJECTID    
VECES DE DESCARGA: NUMBER


