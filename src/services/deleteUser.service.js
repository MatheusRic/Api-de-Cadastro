import database from "../database/index";

const deleteUserService = async (id) => {
  try {
    const res = await database.query(
      `DELETE FROM users WHERE id = $1 RETURNING *`,
      [id]
    );
    if (res.rows.length === 0) {
      throw "Id does not match any user";
    }
    return "User deleted";
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteUserService;
