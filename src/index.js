import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port,err => {
    if(err) return console.log(`Server failed: ${err}`);

    console.log(`Server listenning at ${port}`);
})