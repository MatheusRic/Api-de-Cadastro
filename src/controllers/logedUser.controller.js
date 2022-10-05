import logedUserService from "../services/logedUser.service";

const logedUserController = async (req, res) => {
  const { email } = req.user;

  try {
    const userLoged = await logedUserService(email);
    res.status(200).json(userLoged);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default logedUserController;
