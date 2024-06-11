import bcrypt from 'bcrypt';
import { UsersCollections } from '../db/models/user.js';

export const registerUser = async (payload) => {
  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollections.create({
    ...payload,
    password: encryptedPassword,
  });
};
