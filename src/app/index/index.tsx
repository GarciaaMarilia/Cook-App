import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {
 const [selected, setSelected] = useState<string[]>([]); // Fazer tipagem dos ingredients se necessario

 function handleIngredientSelected(value: string) {
  if (selected?.includes(value)) {
   return setSelected((state) => state?.filter((item) => item !== value));
  }
  setSelected((state) => [...state, value]);
 }

 return (
  <View style={styles.container}>
   <Text style={styles.title}>
    Escolha {"\n"}
    <Text style={styles.subtitle}>os produtos </Text>
   </Text>

   <Text style={styles.message}>
    Descubra receitas baseadas nos produtos escolhidos
   </Text>

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
  </View>
 );
}
