import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hexToRgba } from "../utils/hexToRgba";
import { MainButton } from "../components/MainButton";
import { useNavigation, useRoute } from "@react-navigation/native";

export const ConfirmModalScreen = memo(() => {
	const { top, bottom } = useSafeAreaInsets();
	const navigation = useNavigation();
	const { title, subtitle, mainActionTitle, mainActionOnPress, withGoBack } =
		(useRoute()?.params as any) ?? {};

	return (
		<View
			style={[
				styles.container,
				{
					paddingTop: top,
					paddingBottom: bottom,
				},
			]}
		>
			<View style={styles.modal}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.description}>
					{subtitle}
				</Text>
				<MainButton
					title={mainActionTitle}
					onPress={() => {
						mainActionOnPress();
						if (withGoBack) {
							navigation.goBack();
						}
					}}
					buttonStyle={styles.clearButton}
				/>
				<MainButton
					title="Cancel"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
		backgroundColor: hexToRgba("#3A1166", 0.8),
	},
	modal: {
		backgroundColor: "#3A1166",
		padding: 16,
		borderRadius: 16,
		gap: 10,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 52,
		fontWeight: "900",
		textAlign: "center",
	},
	description: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
	},
	clearButton: {
		backgroundColor: "#FF00FB",
	},
});