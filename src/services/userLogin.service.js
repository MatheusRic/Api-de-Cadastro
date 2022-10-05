import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import database from "../database/index";

const userLoginService = async (email, password) => {
  try {
    const res = await database.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);

    if (res.rows.length === 0) {
      throw "Invalid email or password";
    }
    const user = res.rows[0];
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      throw "Email ou senha inválidos";
    }
    const token = jwt.sign({ email: email }, "SECRET_KEY", {
      expiresIn: "24h",
    });

    return { token };
  } catch (error) {
    throw new Error(error);
  }
};

export default userLoginService;
