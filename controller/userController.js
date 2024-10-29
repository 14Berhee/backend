import UserModel from '../model/user.js';

export const CreateUser = async (request, response) => {
  const { email, firstname } = request.body;
  console.log(request.body);

  try {
    const user = await new UserModel({
      email: email,
      firstname: firstname,
    }).save();

    response.json({ user: user });
    return user;
  } catch (error) {
    response.json({ message: error });
  }
};
