import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { APIRecipes, getRecipe } from "../../utils/api";
import Head from "next/head";
import Cards from "../../components/cards/Cards";

export default function Recipe() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [recipe, setRecipe] = useState<APIRecipes>(null);

  useEffect(() => {
    getRecipe(id).then((newRecipe) => {
      setRecipe(newRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const singleRecipe = (
    <Cards
      recipeName={recipe.title.rendered}
      recipeSrc={
        recipe.delicious_recipes_metadata.imageGalleryImages[0].previewURL
      }
      openrecipeSrc={recipe.title.rendered}
    />
  );

  return (
    <div>
      <Head>
        <title>{recipe.title.rendered}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{singleRecipe}</main>

      <footer>footer</footer>
    </div>
  );
}
