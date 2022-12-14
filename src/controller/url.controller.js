import { pool } from "../config/database.config.js";
pool.connect;

export const createMinifier = async (req, _rep) => {
  const { baseUrl, miniUrl } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO urls (base_url, mini_url) VALUES ($1, $2);`,
      [baseUrl, miniUrl]
    );
    return true;
  } catch (error) {
    console.log(
      "🚀 ~ file: data.controller.js ~ line 15 ~ createData ~ error",
      error
    );
  }
};

export const getMinifiers = async () => {
  try {
    const result = await pool.query("SELECT * FROM urls");
    return result.rows;
  } catch (err) {
    console.log(
      "🚀 ~ file: data.controller.js ~ line 24 ~ getDatas ~ err",
      err
    );
  }
};
