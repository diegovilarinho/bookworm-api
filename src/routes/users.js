import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body.data;

  const user = new User({ email });
  user.setPassword(password);

  user
    .save()
    .then(userSaved => res.json({ user: userSaved.toAuthJSON() }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

  // User.findOne({ email: credentials.email })
  //   .then(user => {
  //     if(user && user.isValidPassword(credentials.password)) {
  //       res.json({
  //         user: user.toAuthJSON()
  //       });
  //     } else {
  //       res.status(400).json({
  //         errors: {
  //           global: "Nome de usuário e/ou senha inválido(s)"
  //         }
  //       });
  //     }
  //   });
});

export default router;