import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  try {
    const updateUser = await updateUserService(id, name, email);
    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default updateUserController;
