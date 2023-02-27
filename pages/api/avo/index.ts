import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();

  const allEntries = await db.getAll();

  res.status(200).json({ data: allEntries });
};

export default allAvos;
