import { memo, } from "react";
import { StyleSheet } from "react-native";
import { ScreenBackground } from "../components/ScreenBackground";
import { MainHeader } from "../components/MainHeader";
import WebView from "react-native-webview";

export const PrivacyScreen = memo(() => {

	return (
		<ScreenBackground style={styles.container}>
			<MainHeader title="Privacy" style={{ marginHorizontal: 20 }} />
			<WebView style={styles.webview} source={{ uri: 'https://www.freeprivacypolicy.com/live/19a2172d-0a56-4877-8d59-9e25e4fc97ec' }} />
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		paddingTop: 20,
	},
	webview: {
		flex: 1,
	}
});
