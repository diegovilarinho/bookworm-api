import express from 'express';
import path from 'path';

const app = express();

app.post('/api/auth', (req, res) => {
  res.status(400).json({
    errors: {
      global: "Usuário e/ou senha inválido(s)"
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8087, () => console.log('Running on localhost:8087'));