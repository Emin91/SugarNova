import { StyleSheet, Text, View } from "react-native";
import { Recipe } from "../data/recipes";
import { hexToRgba } from "../utils/hexToRgba";

export const RecipeItem = ({ item }: { item: Recipe }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{item.name}</Text>
			<Text style={styles.description}>{item.description}</Text>
			<View style={styles.ingredientsContainer}>
				<Text style={styles.ingredientsTitle}>Ingredients:</Text>
				{item.ingredients.map((ingredient) => (
					<Text key={ingredient.ingredientId} style={styles.ingredient}>
						{`${ingredient.ingredientName} x${ingredient.amount}`}
					</Text>
				))}
			</View>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		gap: 10,
		padding: 16,
		borderRadius: 16,
		backgroundColor: hexToRgba("#221F8D")
	},
	title: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "900"
	},
	description: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "600"
	},
	ingredientsContainer: {
		gap: 5,
		borderRadius: 6,
		backgroundColor: hexToRgba("#5218DF", 1),
		paddingVertical: 8,
		paddingHorizontal: 12
	},
	ingredientsTitle: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "800"
	},
	ingredient: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "700"
	}
});