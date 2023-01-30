GILA TEST APPLICATION

TO RUN THE APPLICATION DO YOU NEED:

1 - access the folder ./gila-backend/ and run docker-compose up to run the docker mongodb database

2 - access the folder ./gila-backend/ and run npm run start, it will start the backend application
2.1 - I created unit tests to test ONLY the post API (i created more routes, only to have) you just need to run npm run test in ./gila-backend/ folder
2.2 - Didn't created .env files, if you need to change the database parameter, it's in folder ./gila-backend/schemas/notificationSchema.js

3 - access the folder ./gila/ and run npm run start to run the frontend application
3.1 - if you don't wanna run the backend to see the application, i created a json-server to test front-end too, you just need to run npm run backend in ./gila/ folder (front-end folder)

I USED IN THIS PROJECT

FRONT-END
- Material UI
- JSON-SERVER (not required to run, only for test before create backend)

BACK-END 
- EXPRESS
- NODEMON
- BODY-PARSER
- CORS
- MOCHA
- MONGOOSE
- SUPERTEST