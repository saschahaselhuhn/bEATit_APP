export type APIRecipes = {
  id: string;
  slug: string;
  title: string;
  delicious_recipes_metadata: {
    imageGalleryImages: ImageGalleryImage[];
    difficultyLevel: string;
    noOfServings: string;
  };
};
export type ImageGalleryImage = {
  imageID: string;
  previewURL: string;
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
