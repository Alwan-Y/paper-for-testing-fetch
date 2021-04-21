import express from 'express';
import apis from './routes/apis';
import cors from 'cors'

require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/api/v1', apis);

app.listen(3001, () => console.log('Running'));
