import { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GamePlate } from "../components/GamePlate";
import { ScreenBackground } from "../components/ScreenBackground";
import { MainHeader } from "../components/MainHeader";

export const GameScreen = memo(() => {
	return (
		<ScreenBackground style={styles.container} backgroundKey="bg7">
			<MainHeader style={{ marginHorizontal: 20 }} />
			<View style={styles.gamePlateContainer}>
				<ScrollView bounces={false}>
					<GamePlate />
				</ScrollView>
			</View>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	gamePlateContainer: {
		flex: 1,
	},
});
