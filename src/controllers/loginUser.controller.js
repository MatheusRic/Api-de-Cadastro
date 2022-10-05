import userLoginService from "../services/userLogin.service";

const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userToken = await userLoginService(email, password);

    return res.status(200).json(userToken);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default loginUserController;
