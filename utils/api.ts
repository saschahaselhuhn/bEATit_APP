export type APIRecipes = {
  id: number;
  title: string;
  beatit_portions: string;
  beatit_time: string;
  beatit_skills: string;
  featured_image: FeaturedImage;
  beatit_zutaten: Zutat[];
  beatit_steps: Schritt[];
};

export type Schritt = {
  stepname: string;
  stepindstruction: string;
};

export type Zutat = {
  menge: string;
  Einheit: string;
  Zutat: string;
};

export type FeaturedImage = {
  id: number;
  url: string;
  alt: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getRecipes(): Promise<APIRecipes[]> {
  return await fetchURL<APIRecipes[]>("/api/recipes");
}

export async function getRecipe(id: string): Promise<APIRecipes> {
  return await fetchURL<APIRecipes>(`/api/recipes/${id}`);
}
