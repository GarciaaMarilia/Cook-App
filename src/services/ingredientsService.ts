import { supabase } from "./supabase";

import { IngredientResponse, IngredientsByRecipe } from "./services.types";

async function findByIds(ids: string[]) {
 const { data } = await supabase
  .from("ingredients")
  .select()
  .in("id", ids)
  .order("name")
  .returns<IngredientResponse[]>();

 return data ?? [];
}

async function findByRecipeId(id: string) {
 const { data } = await supabase
  .from("recipes_ingredients")
  .select()
  .eq("recipe_id", id)
  .returns<IngredientsByRecipe[]>();

 return data ? data : [];
}

async function findAll() {
 const { data } = await supabase
  .from("ingredients")
  .select()
  .order("name")
  .returns<IngredientResponse[]>();

 return data ?? [];
}

export { findAll, findByIds, findByRecipeId };
