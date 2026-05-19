import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { hexToRgba } from "../utils/hexToRgba";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainHeader } from "../components/MainHeader";
import { useRoute } from "@react-navigation/native";
import { GameLevel } from "../data/gameLevels";

export const InformationModalScreen = memo(() => {
	const { top, bottom } = useSafeAreaInsets();
	const { levelData } =
		(useRoute()?.params as { levelData: GameLevel }) ?? {};

	const info = [
		{
			color: "#DE1417",
			info: "Incorrect!",
		},
		{
			color: "#FF47F0",
			info: "Incorrect tile, correct ingredient",
		},
		{
			color: "#FF964B",
			info: "Correct tile, incorrect ingredient",
		},
		{
			color: "#FFD900",
			info: "All correct!",
		},
	];

	return (
		<View style={[styles.container, { paddingTop: top }]}>
			<MainHeader />
			<View style={styles.content}>
				<View style={styles.clueContainer}>
					<Text style={styles.title}>
						Shape clue:
					</Text>
					<Text style={styles.description}>
						{levelData?.shapeInfo}
					</Text>
					<Text style={styles.title}>
						Ingredient clue:
					</Text>
					<Text style={styles.description}>
						{levelData?.ingredientInfo}
					</Text>
				</View>
			</View>
			<View
				style={[
					styles.infoContainer,
					{
						marginBottom: bottom + 10,
					},
				]}
			>
				{info.map((item, index) => (
					<View key={index} style={styles.infoRow}>
						<View
							style={[
								styles.infoColor,
								{
									backgroundColor: item.color,
								},
							]}
						/>
						<Text style={styles.infoText}>
							{item.info}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: hexToRgba("#3A1166", 0.8),
		gap: 30,
	},
	content: {
		flex: 1,
	},
	clueContainer: {
		backgroundColor: hexToRgba("#3A1166"),
		padding: 16,
		borderRadius: 16,
		gap: 10,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	description: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "600",
	},
	infoContainer: {
		backgroundColor: hexToRgba("#3A1166"),
		padding: 16,
		borderRadius: 16,
		gap: 10,
	},
	infoRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	infoColor: {
		width: 24,
		height: 24,
		borderRadius: 4,
	},
	infoText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "600",
	},
});