// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const response = await fetch(
    `https://beatit.sascha-haselhuhn.com/wp-json/wp/v2/bEATit_recipes/${id}`
  );

  const recipes = await response.json();
  res.status(200).json(recipes);
};
