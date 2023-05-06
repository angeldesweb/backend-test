import express from 'express';
import cors from 'cors';
import { api } from './routes/v1/api';

export const app = express();

app.use(cors('*'));
app.use(express.json());

app.use('/',api);
