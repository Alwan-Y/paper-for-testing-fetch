import express from 'express';
import apis from './routes/apis';

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/api/v1', apis);

app.listen(3001, () => console.log('Running'));
