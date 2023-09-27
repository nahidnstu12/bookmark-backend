## Bookmark Backend API Project

### How to run this project
```
first please ensure to checkout develop branch
git clone https://github.com/nahidnstu12/bookmark-backend

for install dependencies, run 
yarn 

copy env.example to env.development and set your environment varianbles
copy env.test.example to env.test and set your environment varianbles

create your database for dev & test

then you ready to run your project dev mode, run
yarn start:dev

when you want to seeding, run 
yarn db:seed

and when you want to run tests, run
yarn test

If you want to visit swagger docs, visit
http:localhost:6050/api/v1/docs

if you want to single file test, run 
yarn run test auth.test.js  --watchAll=false

```

### Technology we used
- Express TS
- TypeORM (PG)
- SwaggerUI for docs

### Collections:

- User
- Book
- Category
- Tag
- Author
- Publisher
- Language
- Ratting
- Variant
- Payment
- order

### API’s:

- Author
- Book
- Cart
- Category
- Language
- Order
- Payment
- Publisher
- Ratings
- Tag
- Variant

### Important Links
**UML diagram :** [bookmark uml diagram](https://app.diagrams.net/#G1wNdCHSYpqH2e38unt7cXo60WwZlVuBpd)

### Contributors
- Mazharul Islam Nahid
- Sajeda Akter Saju
