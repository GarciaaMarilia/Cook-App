import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Selected } from "@/components/Selected";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {
 const [selected, setSelected] = useState<string[]>([]); // Fazer tipagem dos ingredients se necessario

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

 function handleSearchSelected() {}

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
    {Array.from({ length: 100 }).map((item, index) => (
     <Ingredient
      key={index}
      name="Apple"
      image=""
      selected={selected.includes(String(index))}
      onPress={() => handleIngredientSelected(String(index))}
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
