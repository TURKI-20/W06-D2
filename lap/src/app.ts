import express , {Application, application , Request , Response} from 'express';
import { IUser } from './types/type.user';
import {v4 as uuidv4} from "uuid"
const app:Application = express();
app.use(express.json());
const port = 3000;

const users: IUser[] = [];

app.get('/' , (req , res)=>{
    res.json(users)
})

app.post('/' , (req , res)=>{
    const user = req.body as IUser;
    user.id = uuidv4();
    users.push(user);
    res.json({
        message : "user added"
    })
})

app.delete('/', (req, res) => {
    const email = req.body.email;
    res.json(users.filter((e) => e.email !== email));
});

app.put('/', (req, res) => {
    if (req.body.username === undefined ) {
        res.send('please enter the new Data');
    }

    else 
    {
        users.find((e) => {
            if (e.username === req.body.username) {
                e.email = req.body.email;
                e.passwore = req.body.passwore;
            }
        });
        res.json(users);
    }
});
 

app.listen(port ,()=>{
    console.log('server start');
    
})


