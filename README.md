# storydotsserverchallenge

## Tecnologías utilizadas:
* NodeJS
* ExpressJS
* TypeScript
* NodeJS
* Prisma
* Autenticación con JWT
* Base de datos PostgreSQL


## Endpoints:


![Screenshot from 2023-05-06 05-07-21](https://user-images.githubusercontent.com/101240108/236611898-9cf060c8-7cfc-41c4-a600-79f5e440e383.png)


### Products:
* GET /products : todos los productos
* GET /products/:id : trae un producto
* POST /products : crea un producto
* DELETE /products : borra un producto

### Users:
* POST /users : login user
* POST /users/create : creación de usuario

### Admin (protegidas con Middleware):
* GET /admin/products : trae todos los productos como admin
* GET /admin/products/:id : trae un producto
* DELETE /admin/delete : borra uno o mas productos
* PATCH /admin/products : modifica un producto
* POST /admin/products : crea un producto

## Para correr el server de forma local:

1. configurar archivo .env con variable PORT='numero de puerto'
2. configurar archivo .env con variable DATABASE_URL='uri base de datos PostgreSQL'
3. configurar archivo .env con variable JWTKEYAT='string random a eleccion'
4. npm install ----> npm run build ----> npm run start
