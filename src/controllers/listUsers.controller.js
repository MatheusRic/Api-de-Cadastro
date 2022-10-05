import listUserService from "../services/listUsers.service";

const listUserController = async (req, res) => {
  try {
    const users = await listUserService();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default listUserController;
