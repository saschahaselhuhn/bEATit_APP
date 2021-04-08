import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { APIRecipes, getRecipe } from "../../utils/api";
import Head from "next/head";
import Recipehead from "../../components/recipehead/Recipehead";
import Headerbar from "../../components/head/Head";
import Navigationbar from "../../components/navbar/Navbar";
import MainMenu from "../../components/mainmenu/Mainmenu";
import Ingredientstabs from "../../components/ingredientstabs/Ingredientstabs";
import Recipefields from "../../components/recipefields/Recipefields";
export default function Recipe() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        />
      </Head>
      <main>
        <Headerbar onBurgerClick={() => setShowMenu(true)} />
        <Recipehead
          recipeName={recipe.title}
          recipeImg={recipe.featured_image.url}
          consumers={recipe.beatit_portions}
          difficulty={recipe.beatit_skills}
          time={recipe.beatit_time}
        />{" "}
        {/* start ingredients - steps buttons */}
        <Ingredientstabs stepslink={`/${recipe.id}/steps`} />
        {/* end ingredients - steps buttons */}
        <div className="recipeheadline">Zutaten</div>
        {recipe &&
          recipe.beatit_zutaten.map((zutat) => {
            return (
              <Recipefields
                key={zutat.Zutat}
                wert={zutat.menge}
                einheit={zutat.Einheit}
                zutat={zutat.Zutat}
              />
            );
          })}
        <div className="placeholder"></div>
      </main>
      <footer>
        <Navigationbar onBurgerClick={() => setShowMenu(true)} />
      </footer>{" "}
      <MainMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
