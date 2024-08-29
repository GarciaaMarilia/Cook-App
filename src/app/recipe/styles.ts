import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
 container: { flex: 1 },
 image: {
  width: "100%",
  height: 192,
  backgroundColor: theme.colors.gray_300,
 },

 body: {
  borderTopStartRadius: theme.borderRadius.lg,
  borderTopEndRadius: theme.borderRadius.lg,
  backgroundColor: theme.colors.white,
  marginTop: -24,
 },

 header: {
  paddingHorizontal: 32,
  paddingTop: 10,
 },

 content: {
  padding: 32,
 },

 name: {
  fontSize: theme.fonts.size.heading.md,
  fontFamily: theme.fonts.family.bold,
 },

 preparation: {
  fontSize: theme.fonts.size.heading.sm,
  fontFamily: theme.fonts.family.medium,
  marginBottom: 16,
 },

 time: {
  fontSize: theme.fonts.size.body.sm,
  fontFamily: theme.fonts.family.regular,
  color: theme.colors.gray_400,
 },

 title: { flexDirection: "row", marginTop: 10 },
});
