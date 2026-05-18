import { memo, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { GamePlate } from "../components/GamePlate";
import { ScreenBackground } from "../components/ScreenBackground";
import { IMAGES } from "../assets/images";
import { MainButton } from "../components/MainButton";
import { QuestionIcon } from "../assets/svg";

export const GameScreen = memo(() => {
	const [resetKey, setResetKey] = useState(0);
	const [isIngredientHintActive, setIsIngredientHintActive] = useState(false);
	const [hasUsedIngredientHint, setHasUsedIngredientHint] = useState(false);
	const [isHintActive, setIsHintActive] = useState(false);
	const [hasUsedTileHint, setHasUsedTileHint] = useState(false);
	const [isLevelEnded, setIsLevelEnded] = useState(false);

	return (
		<ScreenBackground style={styles.container} backgroundKey="bg7">
			<View style={styles.headerContainer}>
				<TouchableOpacity>
					<QuestionIcon />
				</TouchableOpacity>
			</View>
			<View style={styles.container}>
				<ScrollView bounces={false}>
					<GamePlate
						resetKey={resetKey}
						isHintActive={isHintActive}
						isIngredientHintActive={isIngredientHintActive}
						onLevelEndedChange={setIsLevelEnded}
						onTryAgain={() => {
							setIsIngredientHintActive(false);
							setHasUsedIngredientHint(false);
							setIsHintActive(false);
							setHasUsedTileHint(false);
							setIsLevelEnded(false);
							setResetKey((prev) => prev + 1);
						}}
					/>
				</ScrollView>
				<View style={styles.actionsContainer}>
					<View style={styles.hintsContainer}>
						<TouchableOpacity
							disabled={isLevelEnded || hasUsedIngredientHint}
							style={{ opacity: isLevelEnded || hasUsedIngredientHint ? 0.5 : 1 }}
							onPress={() => {
								setIsIngredientHintActive(true);
								setHasUsedIngredientHint(true);
							}}
						>
							<Image source={IMAGES.hint1} style={styles.hintImage} />
						</TouchableOpacity>
						<TouchableOpacity
							disabled={isLevelEnded || hasUsedTileHint}
							style={{ opacity: isLevelEnded || hasUsedTileHint ? 0.5 : 1 }}
							onPress={() => {
								setIsHintActive(true);
								setHasUsedTileHint(true);
							}}
						>
							<Image source={IMAGES.hint2} style={styles.hintImage} />
						</TouchableOpacity>
					</View>
					<MainButton
						title="CLEAR"
						buttonStyle={[styles.clearButton, { opacity: isLevelEnded ? 0.5 : 1 }]}
						disabled={isLevelEnded}
						onPress={() => {
							setIsIngredientHintActive(false);
							setHasUsedIngredientHint(false);
							setIsHintActive(false);
							setHasUsedTileHint(false);
							setIsLevelEnded(false);
							setResetKey((prev) => prev + 1);
						}}
					/>
				</View>
			</View>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	actionsContainer: {
		gap: 40,
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	hintsContainer: {
		flexDirection: "row",
		gap: 12,
	},
	hintImage: {
		width: 70,
		height: 70,
	},
	clearButton: {
		flex: 1,
		height: 70,
		borderRadius: 10,
		backgroundColor: "#FF00FB",
	},
});