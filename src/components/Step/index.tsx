import { Text, View } from "react-native";

import { styles } from "./styles";

type StepProps = {
 step: number;
 description: string;
};

export function Step({ step, description }: StepProps) {
 return (
  <View style={styles.container}>
   <Text style={styles.step}>{step}</Text>

   <Text style={styles.description}>{description}</Text>
  </View>
 );
}
