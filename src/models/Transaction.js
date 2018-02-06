import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const schema = mongoose.Schema({
  payee: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
  amount: {
    type: Number,
    required: true,
    default: 0
  },
  category: {
    type: String,
    required: false
  },
}, { timestamps: true });

// schema.methods.setPassword = function setPassword(password) {
//   this.passwordHash = bcrypt.hashSync(password, 10);
// };

// schema.methods.isValidPassword = function isValidPassword(password) {
//   return bcrypt.compareSync(password, this.passwordHash);
// };

// schema.methods.generateJWT = function generateJWT() {
//   return jwt.sign({
//     email: this.email
//   }, process.env.JWT_SECRET);
// };

// schema.methods.toAuthJSON = function toAuthJSON() {
//   return {
//     email: this.email,
//     confirmed: this.confirmed,
//     token: this.generateJWT()
//   }
// };

schema.plugin(uniqueValidator, { message: "Este e-mail já está está cadastrado." });

export default mongoose.model('User', schema);