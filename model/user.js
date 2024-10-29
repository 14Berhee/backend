import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstname: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
