import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();

  const { id } = req.query;

  const avo = await db.getById(id as string);

  res.status(200).json({ data: avo });
};

export default allAvos;
