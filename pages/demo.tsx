import Head from "next/head";
import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import { APIRecipes, getRecipes } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState<APIRecipes[]>([]);

  useEffect(() => {
    getRecipes().then((newRecipes) => {
      setRecipes(newRecipes);
    });
  }, []);

  const recipeItems = recipes.map((recipe) => (
    <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
      <a>
        <Cards
          recipeName={recipe.title.rendered}
          recipeSrc={
            recipe.delicious_recipes_metadata.imageGalleryImages[0].previewURL
          }
          openrecipeSrc={recipe.title.rendered}
        />
      </a>
    </Link>
  ));

  return (
    <div>
      <Head>
        <title>Rezepte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <ul>{recipeItems}</ul>
      </div>
    </div>
  );
}
