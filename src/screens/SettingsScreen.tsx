import { memo, } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { ScreenBackground } from "../components/ScreenBackground";
import { MainHeader } from "../components/MainHeader";
import WebView from "react-native-webview";
import { hexToRgba } from "../utils/hexToRgba";
import { CustomSwitch } from "../components/CustomSwitch";
import { MainButton } from "../components/MainButton";

export const SettingsScreen = memo(() => {

	const options = [
		{
			title: 'New Task',
			state: true
		},
		{
			title: 'Daily Streak',
			state: false
		},
		{
			title: 'Content Updates',
			state: true
		}
	]

	return (
		<ScreenBackground style={styles.container} backgroundKey="bg5">
			<MainHeader />
			<Text style={styles.title}>Notifications</Text>
			{options.map((option, index) => (
				<View key={index} style={styles.option}>
					<Text style={styles.optionText}>{option.title}</Text>
					<CustomSwitch value={option.state} onChange={(value) => console.log(value)} />
				</View>
			))}
			<MainButton title="Clear Cache" onPress={() => { }} />
			<MainButton title="Reset App" onPress={() => { }} buttonStyle={{ backgroundColor: "#FF00FB" }} />
			<TouchableOpacity>
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
