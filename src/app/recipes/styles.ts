import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
 container: {
  flex: 1,
 },

 header: {
  gap: 12,
  paddingTop: 62,
  marginBottom: 12,
  flexDirection: "row",
  paddingHorizontal: 32,
 },

 title: {
  fontFamily: theme.fonts.family.bold,
  fontSize: theme.fonts.size.heading.md,
 },

 recipes: {
  padding: 32,
 },

 recipesContent: {
  gap: 16,
 },

 empty: {
  color: theme.colors.gray_400,
  fontSize: theme.fonts.size.body.md,
  fontFamily: theme.fonts.family.regular,
 },
});
