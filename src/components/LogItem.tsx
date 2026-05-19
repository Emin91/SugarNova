import { View, Text, StyleSheet } from "react-native";
import { GameLevel } from "../data/gameLevels";
import { hexToRgba } from "../utils/hexToRgba";

export const LogItem = ({ item }: { item: GameLevel }) => {

	return (
		<View>
			<View style={[styles.container, { backgroundColor: "#5218DF" }]}>
				<Text style={styles.taskText}>Task:</Text>
				<Text style={styles.simpleText}>{item.shapeInfo}</Text>
			</View>
			<View style={[styles.container, { backgroundColor: hexToRgba("#221F8D") }]}>
				<Text style={styles.simpleText}>{item.successInfo}</Text>
			</View>
			<View style={[styles.container, { backgroundColor: "#5218DF" }]}>
				<Text style={styles.taskText}>Recipe Unlocked!</Text>
				<Text style={styles.simpleText}>+ 1 new ingredient discovered</Text>
			</View>
			<View style={[styles.container, { backgroundColor: hexToRgba("#221F8D") }]}>
				<Text style={styles.simpleText}>{item.storyInfo}</Text>
			</View>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 6,
		borderRadius: 10,
		marginBottom: 10
	},
	taskText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "900"
	},
	simpleText: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "600"
	}
});