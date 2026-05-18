import { Image, StyleSheet, Text, View } from "react-native";
import { hexToRgba } from "../utils/hexToRgba";
import { Ingredient } from "../data/ingredients";
import { ImageKeys, IMAGES } from "../assets/images";

export const IngredientItem = ({ item }: { item: Ingredient }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={IMAGES[`img_${item.id}` as ImageKeys]} />
			<View style={styles.content}>
				<Text numberOfLines={1} style={styles.title}>{item.name}</Text>
				<Text numberOfLines={2} style={styles.description}>{item.description}</Text>
			</View>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		gap: 16,
		padding: 16,
		borderRadius: 16,
		flexDirection: 'row',
		backgroundColor: hexToRgba("#221F8D")
	},
	title: {
		flex: 1,
		color: "#fff",
		fontSize: 20,
		fontWeight: "900"
	},
	description: {
		flex: 1,
		color: "#fff",
		fontSize: 14,
		fontWeight: "400"
	},
	image: {
		width: 58,
		height: 58
	},
	content: {
		flex: 1,
		gap: 4
	}
});