import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { APIRecipes, getRecipe } from "../../utils/api";
import Head from "next/head";
import Recipehead from "../../components/recipehead/Recipehead";

export default function Recipe() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  const [recipe, setRecipe] = useState<APIRecipes>(null);

  const id = Array.isArray(idQuery) ? idQuery[0] : idQuery;

  useEffect(() => {
    getRecipe(id).then((newRecipe) => {
      setRecipe(newRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{recipe.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Recipehead
          recipeName={recipe.title}
          recipeImg={recipe.featured_image.url}
          consumers={recipe.beatit_portions}
          difficulty={recipe.beatit_skills}
        />
      </main>
      <footer></footer>
    </div>
  );
}
