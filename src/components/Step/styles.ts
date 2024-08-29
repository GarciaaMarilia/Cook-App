import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
 container: {
  gap: 22,
  marginBottom: 16,
  flexDirection: "row",
  alignItems: "center",
 },

 step: {
  color: theme.colors.black,
  fontSize: theme.fonts.size.body.sm,
  fontFamily: theme.fonts.family.bold,
 },

 description: {
  flex: 1,
  color: theme.colors.gray_400,
  fontSize: theme.fonts.size.body.sm,
  fontFamily: theme.fonts.family.regular,
 },
});
