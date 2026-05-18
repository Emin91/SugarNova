import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenBackground } from "../components/ScreenBackground";
import { PlayIcon, QuestionIcon, SettingsIcon } from "../assets/svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { hexToRgba } from "../utils/hexToRgba";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = memo(() => {
	const navigation = useNavigation<any>();

	return (
		<ScreenBackground backgroundKey="bg4">
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<View style={styles.header}>
						<TouchableOpacity style={styles.journalButton} onPress={() => navigation.navigate("Journal")}>
							<Text style={styles.journalButtonText}>Journal</Text>
						</TouchableOpacity>
						<View style={styles.rightContainer}>
							<TouchableOpacity>
								<QuestionIcon />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
								<SettingsIcon />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.currentTask}>
						<Text style={styles.currentTaskText}>Current Task:</Text>
						<Text style={styles.taskText}>Three points aligned in silence.The center carries warmth,while the edges hold it in place.</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.playButton}>
					<PlayIcon />
				</TouchableOpacity>
			</SafeAreaView>
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
		marginBottom: 10
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
