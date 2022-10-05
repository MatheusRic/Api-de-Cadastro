import database from "../database";

const logedUserService = async (email) => {
  try {
    const res = await database.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    if (res.rows.length === 0) {
      throw "Email does not match any user";
    }
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default logedUserService;
