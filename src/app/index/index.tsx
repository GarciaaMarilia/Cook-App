import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

import { router } from "expo-router";

import { styles } from "./styles";
import { services } from "@/services";
import { Selected } from "@/components/Selected";
import { Ingredient } from "@/components/Ingredient";
import { IngredientResponse } from "@/services/services.types";

export default function Index() {
 const [selected, setSelected] = useState<string[]>([]); 
 const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

 function handleIngredientSelected(value: string) {
  if (selected?.includes(value)) {
   return setSelected((state) => state?.filter((item) => item !== value));
  }
  setSelected((state) => [...state, value]);
 }

 function handleClearSelected() {
  Alert.alert("Clean", "Would you like to clean it all?", [
   { text: "Cancel", style: "cancel" },
   { text: "Confirm", onPress: () => setSelected([]) },
  ]);
 }

 function handleSearchSelected() {
  router.navigate("/recipes/" + selected);
 }

 useEffect(() => {
  services.ingredients.findAll().then((data) => setIngredients(data));
 }, []);

 return (
  <View style={styles.container}>
   <Text style={styles.title}>
    Choose {"\n"}
    <Text style={styles.subtitle}>the products </Text>
   </Text>

   <Text style={styles.message}>Discover recipes based on chosen products</Text>

   <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.ingredientsContainer}
   >
    {ingredients.map((item) => (
     <Ingredient
      key={item.id}
      name={item.name}
      image={`${services.storage.imagePath}/${item.image}`}
      selected={selected.includes(item.id)}
      onPress={() => handleIngredientSelected(item.id)}
     />
    ))}
   </ScrollView>

   {selected.length > 0 && (
    <Selected
     quantity={selected.length}
     onClear={handleClearSelected}
     onSearch={handleSearchSelected}
    />
   )}
  </View>
 );
}
