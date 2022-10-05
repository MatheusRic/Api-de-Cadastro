import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await deleteUserService(id);
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default deleteUserController;
