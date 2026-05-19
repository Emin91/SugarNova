import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenBackground } from "../components/ScreenBackground";
import { PlayIcon, QuestionIcon, SettingsIcon } from "../assets/svg";
import { hexToRgba } from "../utils/hexToRgba";
import { useNavigation } from "@react-navigation/native";
import { useDefaultStore } from "../store/useDefaultStore";
import { GAME_LEVELS } from "../data/gameLevels";

export const HomeScreen = memo(() => {
	const navigation = useNavigation<any>();
	const currentLevelId = useDefaultStore(state => state.currentLevelId);
	const currentShapeInfo = GAME_LEVELS.find(level => level.id === currentLevelId)?.shapeInfo ?? "";

	return (
		<ScreenBackground backgroundKey="bg4">
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.journalButton} onPress={() => navigation.navigate("Journal")}>
						<Text style={styles.journalButtonText}>Journal</Text>
					</TouchableOpacity>
					<View style={styles.rightContainer}>
						<TouchableOpacity onPress={() => navigation.navigate("Welcome", { startFromLastStep: true })}>
							<QuestionIcon />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
							<SettingsIcon />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.currentTask}>
					<Text style={styles.currentTaskText}>Current Task:</Text>
					<Text style={styles.taskText}>{currentShapeInfo}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("Game")}>
				<PlayIcon />
			</TouchableOpacity>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
	journalButton: {
		paddingHorizontal: 16,
		backgroundColor: "#FF00FB",
		justifyContent: "center",
		alignItems: "center",
		height: 46,
		borderRadius: 10
	},
	currentTask: {
		marginTop: 20,
		gap: 10,
		backgroundColor: hexToRgba("#3A1166"),
		padding: 16,
		borderRadius: 16
	},
	header: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: "space-between"
	},
	rightContainer: {
		flexDirection: "row",
		gap: 10,
	},
	journalButtonText: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: 800
	},
	playButton: {
		alignSelf: "center",
	},
	currentTaskText: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: 900
	},
	taskText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: 600
	}
});
