## Bookmark Backend API Project
This document outlines the functional and non-functional requirements for the Book Website, a platform for consumers to explore, purchase, and review books, and for administrators to manage the platform. The system encompasses book categorization, user management, cart management, order processing, and content management. [Read More](https://nahid-me.notion.site/Bookmark-Full-stack-Management-46b4e8d495cd4218a40ae5f77bfc7c26?pvs=4)

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
- TypeORM (mysql)
- SwaggerUI for docs



### Important Links
**Documentaion:** [Docs Link](https://nahid-me.notion.site/Bookmark-Full-stack-Management-46b4e8d495cd4218a40ae5f77bfc7c26?pvs=4)
**UML diagram :** [bookmark uml diagram](https://drive.google.com/file/d/10WlpXiS-C_VKhNYR7_HMWUusxoNLVSC5/view?usp=sharing)

### Contributors
- Mazharul Islam Nahid
- Sajeda Akter Saju
