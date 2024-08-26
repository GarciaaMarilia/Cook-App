import { supabase } from "./supabase";
import { PreparationsResponse } from "./services.types";

async function findByRecipeId(id: string) {
 const { data } = await supabase
  .from("preparations")
  .select()
  .eq("recipe_id", id)
  .returns<PreparationsResponse[]>();

 return data ?? [];
}

export { findByRecipeId };
