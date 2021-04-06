import Head from "next/head";
import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import { APIRecipes, getRecipes } from "../utils/api";
import Link from "next/link";
import Headerbar from "../components/head/Head";
import Navigationbar from "../components/navbar/Navbar";
import MainMenu from "../components/mainmenu/Mainmenu";

export default function Home() {
  const [recipes, setRecipes] = useState<APIRecipes[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    getRecipes().then((newRecipes) => {
      setRecipes(newRecipes);
    });
  }, []);

  const recipeItems = recipes.map((recipe) => (
    <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
      <a>
        <Cards
          recipeName={recipe.title}
          recipeSrc={recipe.featured_image.url}
          openrecipeSrc={recipe.featured_image.url}
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

      <Headerbar onBurgerClick={() => setShowMenu(true)} />
      <div className="container">
        <ul>{recipeItems}</ul>
      </div>
      <Navigationbar />
      <MainMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
