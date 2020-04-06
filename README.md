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
### LESSONS ENDPOINTS
METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `lessons`              | Get All Lessons
POST   | `lessons`              | Create Lesson
GET    | `lessons/:lessonId`    | Get One Lesson
PUT    | `lessons/:lessonId`    | Update Lesson
DELETE | `lessons/:lessonId`    | Delete Lesson
### USER ENDPOINTS (Authenticated)
All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `me/lessons`            | Get User's Lessons (unstarted, ongoing, finished)
POST   | `me/lessons/:lessonId`  | Add lesson to my Lessons (unstarted)
GET    | `me/lessons/:lessonId`  | Return my lesson (with user progress)
PUT    | `me/lessons/:lessonId`  | Modify User's lesson (set progress)
DELETE | `me/lessons/:lessonId`  | Delete User's lesson from My Lessons
GET    | `me/profile`            | Get info from User (TODO)
PUT    | `me/profile`            | Modify User info (TODO)


Game store
usuario
AUTH
METHOD	URL	What does it do
POST	api/auth/signup	Create an account
POST	api/auth/login	Login User & Return Token


Perfil de usuario
METHOD	URL	What does it do
GET	api/me	Get user details
PUT	api/me	Update user details
DELETE	api/me	Delete User


CARRITO
GET                   API/:ID                               OBTENER EL CARRITO DE UN USUARIO ESPECIFICO
POST             API/ :ID                                         AÑADE JUEGO AL CARRITO
DELETE        API/ :ID                                         ELIMINA JUEGO DEL CARRITO 

BUSCADOR:
POST                  API/                                        BURCAR UN JUEGO O LOS JUEGOS PERTENECIENTES                    
                                                                           A UN GENERO
router.post("/", authUser, getSearch)
