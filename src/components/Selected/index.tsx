import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";

import { theme } from "@/theme";
import { styles } from "./styles";
import { Button } from "../Button";

type Props = {
 quantity: number;
 onClear: () => void;
 onSearch: () => void;
};

export function Selected({ onClear, onSearch, quantity }: Props) {
 return (
  <Animated.View
   style={styles.container}
   entering={SlideInDown.duration(500)}
   exiting={BounceOutDown.duration(500)}
  >
   <View style={styles.header}>
    <Text style={styles.label}>{quantity} selected ingredients</Text>
    <MaterialIcons
     name="close"
     size={24}
     onPress={onClear}
     color={theme.colors.gray_400}
    />
   </View>

   <Button title="Search" onPress={onSearch}/>
  </Animated.View>
 );
}
