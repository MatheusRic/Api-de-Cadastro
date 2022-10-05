import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import listUserController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import logedUserController from "../controllers/logedUser.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("", createUserController);
router.get("", listUserController);
router.get("/profile", verifyAuthTokenMiddleware, logedUserController);
router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default router;
