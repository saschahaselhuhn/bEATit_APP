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
    console.log(id);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  /*   const recipeHeader = (
    <Recipehead
      recipeName={recipe.title.rendered}
      recipeImg={
        recipe.delicious_recipes_metadata.imageGalleryImages[0].previewURL
      }
      consumers={recipe.delicious_recipes_metadata.noOfServings}
      difficulty={recipe.delicious_recipes_metadata.difficultyLevel}
    />
  ); */

  return (
    <div>
      <Head>
        <title>{recipe.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{recipe.title}</main>
      <footer></footer>
    </div>
  );
}
