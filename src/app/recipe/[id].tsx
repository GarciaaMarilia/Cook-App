import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Redirect, router, useLocalSearchParams } from "expo-router";

import { styles } from "./styles";
import { services } from "@/services";
import { Step } from "@/components/Step";
import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/Ingredients";
import {
 IngredientResponse,
 PreparationsResponse,
 RecipeResponse,
} from "@/services/services.types";

export default function Recipes() {
 const [isLoading, setIsLoading] = useState(true);
 const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
 const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
 const [preparations, setPreparations] = useState<PreparationsResponse[]>([]);

 const { id } = useLocalSearchParams<{ id: string }>();

 useEffect(() => {
  services.recipes
   .show(id)
   .then((response) => setRecipe(response))
   .finally(() => setIsLoading(false));
 }, []);

 useEffect(() => {
  services.ingredients
   .findByRecipeId(id)
   .then((response) => setIngredients(response));
 }, []);

 useEffect(() => {
  services.preparations
   .findByRecipeId(id)
   .then((response) => setPreparations(response));
 }, []);

 if (isLoading) {
  return <Loading />;
 }

 if (!id || !recipe) {
  return <Redirect href="/index" />;
 }

 return (
  <View style={styles.container}>
   <Image source={{ uri: recipe.image }} style={styles.image} />

   <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
    <View style={styles.header}>
     <MaterialIcons size={32} name="arrow-back" onPress={() => router.back()} />

     <Text style={styles.name}>{recipe.name}</Text>
     <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
    </View>

    <Ingredients ingredients={ingredients} />

    <View style={styles.content}>
     <Text style={styles.preparation}>Modo de preparado</Text>

     <FlatList
      data={preparations}
      renderItem={({ item }) => (
       <Step step={item.step} description={item.description} />
      )}
      contentContainerStyle={{ gap: 16 }}
      showsVerticalScrollIndicator={false}
     />
    </View>
   </ScrollView>
  </View>
 );
}
