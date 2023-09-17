import { Elysia, t } from 'elysia'
// import swagger for elysiajs
import { swagger } from '@elysiajs/swagger'

// A short module to be attached with another elysia instance
const module = new Elysia().use(swagger());

//Normal api or paths to print "Hello Elysia"
module.get('/', () => `Hello Elysia`);

//Get method to get path parameter and query from web/API URL
module.get('/:id', ({ params: { id }, query: { q } }) => `Hello Elysia how are yos >params>  ${id} query > ${q}`);


///Login api 
module.post('/login', ({ body: { username, password }, set }) => {
  if (username === 'rohit' && password === '123456') {
    set.status = 200;
    return { "response_code": 200, "msg": "Welcome rohit." };
  }
  set.status = 403;
  return { "response_code": 403, "msg": "You dont have access." };
},
  //this third argument is strict schema of your method/API.
  {
    body: t.Object({
      username: t.String(),
      password: t.String()
    }),
    //This will ensure the response could be one of both types ((object of username and password) or (String))
    //Useful to give acknowledge to new developer 
    //Useful to understand the schema 
    //This schema will show in SWAGGER
    response: {
      200: t.Object({
        response_code: t.Integer(),
        msg: t.String()
      }),
      403: t.String(),
    }
  });

const app = new Elysia().use(module);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


export type App = typeof app;