import { memo, } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenBackground } from "../components/ScreenBackground";
import { MainHeader } from "../components/MainHeader";
import { hexToRgba } from "../utils/hexToRgba";
import { CustomSwitch } from "../components/CustomSwitch";
import { MainButton } from "../components/MainButton";
import { useDefaultStore } from "../store/useDefaultStore";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = memo(() => {
	const navigation = useNavigation<any>();
	const isNotificationEnabled = useDefaultStore(state => state.isNewTaskNotificationEnabled);
	const isDailyStreakNotificationEnabled = useDefaultStore(state => state.isDailyStreakNotificationEnabled);
	const isContentUpdatesEnabled = useDefaultStore(state => state.isContentUpdates);
	const setCurrentLevelId = useDefaultStore(state => state.setCurrentLevelId);
	const clearStoryLogs = useDefaultStore(state => state.clearStoryLogs);
	const clearRecipes = useDefaultStore(state => state.clearRecipes);

	const options = [
		{
			title: 'New Task',
			state: isNotificationEnabled,
			onChange: () => useDefaultStore.getState().toggleNewTaskNotification()
		},
		{
			title: 'Daily Streak',
			state: isDailyStreakNotificationEnabled,
			onChange: () => useDefaultStore.getState().toggleDailyStreakNotification()
		},
		{
			title: 'Content Updates',
			state: isContentUpdatesEnabled,
			onChange: () => useDefaultStore.getState().toggleContentUpdates()
		}
	]

	const onClear = () => {
		navigation.navigate("ConfirmModal", {
			title: "Clear cache?",
			subtitle: "This will remove all cached data and reset the app to its initial state.",
			mainActionTitle: "Clear cache",
			withGoBack: true,
			mainActionOnPress: () => {

			}
		});
	}

	const onReset = () => {
		navigation.navigate("ConfirmModal", {
			title: "Reset app?",
			subtitle: "This will remove all cached data and reset the app to its initial state.",
			mainActionTitle: "Reset app",
			withGoBack: true,
			mainActionOnPress: () => {
				setCurrentLevelId(1);
				clearRecipes();
				clearStoryLogs();
			}
		});
	}

	return (
		<ScreenBackground style={styles.container} backgroundKey="bg5">
			<MainHeader />
			<Text style={styles.title}>Notifications</Text>
			{options.map((option, index) => (
				<View key={index} style={styles.option}>
					<Text style={styles.optionText}>{option.title}</Text>
					<CustomSwitch value={option.state} onChange={option.onChange} />
				</View>
			))}
			<MainButton title="Clear Cache" onPress={onClear} />
			<MainButton title="Reset App" onPress={onReset} buttonStyle={{ backgroundColor: "#FF00FB" }} />
			<TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
				<Text style={styles.privacyPolicyText}>Privacy Policy</Text>
			</TouchableOpacity>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 14,
		paddingTop: 20,
		paddingHorizontal: 20
	},
	title: {
		fontSize: 26,
		fontWeight: 900,
		color: "#FFF"
	},
	optionsContainer: {
		gap: 8
	},
	option: {
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: hexToRgba("#3A1166", 0.5),
		borderRadius: 8,
		paddingHorizontal: 16
	},
	optionText: {
		fontSize: 18,
		fontWeight: 700,
		color: "#FFF"
	},
	privacyPolicyText: {
		fontSize: 18,
		fontWeight: 700,
		color: "#FFF",
		marginTop: 10,
		opacity: 0.6,
		textDecorationLine: "underline"
	}
});
