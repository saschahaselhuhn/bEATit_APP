import Head from "next/head";
import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import { APIRecipes, getRecipes } from "../utils/api";
import Link from "next/link";
import Headerbar from "../components/head/Head";
import Navigationbar from "../components/navbar/Navbar";
import MainMenu from "../components/mainmenu/Mainmenu";
import Categoryhead from "../components/categoryhead/Categoryhead";

export default function Spanish() {
  const [recipes, setRecipes] = useState<APIRecipes[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    getRecipes("Spanisch").then((newRecipes) => {
      setRecipes(newRecipes);
    });
  }, []);

  const recipeItems = recipes.map((recipe) => (
    <Link href={`/${recipe.id}`} key={recipe.id}>
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
      <Categoryhead
        categoryName="Spanien"
        categoryImg={"../images/eat-2834549_640.jpg"}
      />
      ;
      <div className="container">
        {" "}
        <ul> {recipeItems}</ul>
      </div>
      <Navigationbar onBurgerClick={() => setShowMenu(true)} />
      <MainMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
