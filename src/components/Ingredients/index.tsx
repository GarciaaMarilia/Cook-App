import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "../Ingredient";

export function Ingredients() {
 return (
  <ScrollView horizontal contentContainerStyle={styles.container}>
   <Ingredient />

   <Ingredient />

   <Ingredient />

   <Ingredient />
  </ScrollView>
 );
}
