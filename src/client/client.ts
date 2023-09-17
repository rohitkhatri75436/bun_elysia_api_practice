// client.ts
import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../index'

const client = edenTreaty<App>('http://localhost:3000');


// client.signin.post({ username: 'dd', password: 'def' }).then(console.log);

// app.signIn.post({
//     username: 'saltyaom',
//     password: 12345678
// }).then(console.log)