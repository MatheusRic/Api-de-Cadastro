import database from "../database";

const updateUserService = async (id, name, email) => {
  try {
    const res = await database.query(
      `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
      [name, email, id]
    );
    if (res.rows.length === 0) {
      throw "Id does not match any user";
    }
    return { message: "Updated user", user: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateUserService;
