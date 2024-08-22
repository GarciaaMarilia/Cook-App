import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";

export function Ingredient() {
 return (
  <Pressable style={styles.container}>
   <Image style={styles.image} source={require("@/assets/apple.png")}/>
   <Text style={styles.title}>Apple</Text>
  </Pressable>
 );
}
