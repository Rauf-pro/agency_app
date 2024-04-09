import bcrypt from "bcrypt";

export const register = async (req, res) => {
  // db operations
  const { username, email, password } = req.body;

  // HASH THE PASSWORD

  const hashedPassword = await bcrypt.hashSync(password, 10);

  console.log(hashedPassword);

  // CREATE A NEW USER AND SAVE TO DB
};

export const login = (req, res) => {
  // db operations
};

export const logout = (req, res) => {
  // db operations
};
