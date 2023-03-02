import { db } from "../connection.js";

export const searchSchools = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const results = await db.query("SELECT * FROM users WHERE name LIKE ?", [
      `%${searchQuery}%`,
    ]);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while searching schools" });
  }
};