import { memo, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { GamePlate } from "../components/GamePlate";
import { ScreenBackground } from "../components/ScreenBackground";
import { IMAGES } from "../assets/images";
import { MainButton } from "../components/MainButton";
import { PauseIcon, QuestionIcon } from "../assets/svg";
import { useNavigation } from "@react-navigation/native";
import { GAME_LEVELS } from "../data/gameLevels";
import { useDefaultStore } from "../store/useDefaultStore";
import { RECIPES } from "../data/recipes";

export const GameScreen = memo(() => {
	const navigation = useNavigation<any>()
	const [resetKey, setResetKey] = useState(0);
	const [isIngredientHintActive, setIsIngredientHintActive] = useState(false);
	const [hasUsedIngredientHint, setHasUsedIngredientHint] = useState(false);
	const [isHintActive, setIsHintActive] = useState(false);
	const [hasUsedTileHint, setHasUsedTileHint] = useState(false);
	const [isLevelEnded, setIsLevelEnded] = useState(false);
	const [levelId, setLevelId] = useState(() => useDefaultStore.getState().currentLevelId);
	const levelData = GAME_LEVELS.find((level) => level.id === levelId) ?? GAME_LEVELS[0];
	const addRecipe = useDefaultStore(state => state.addRecipe);
	const addStoryLog = useDefaultStore(state => state.addStoryLog);

	const onClear = () => {
		navigation.navigate("ConfirmModal", {
			title: "Clear the field?",
			subtitle: "Remove all placed elements and reset the current pattern?",
			mainActionTitle: "Clear",
			withGoBack: true,
			mainActionOnPress: () => {
				setIsIngredientHintActive(false);
				setIsHintActive(false);
				setIsLevelEnded(false);
				setResetKey((prev) => prev + 1);
			}
		});
	}

	const onPause = () => {
		navigation.navigate("ConfirmModal", {
			title: "Quit the game?",
			subtitle: "Are you sure you want to quit the game?",
			mainActionTitle: "Confirm",
			withGoBack: false,
			mainActionOnPress: () => {
				navigation.reset({
					index: 0,
					routes: [{ name: "Home" }]
				});
			}
		});
	}

	const onLevelSuccess = () => {
		const storyLog = GAME_LEVELS.find(item => item.id === levelId);
		if (storyLog) {
			addStoryLog(storyLog);
		}
		const recipe = RECIPES.find(item => item.id === levelId);
		if (recipe) {
			addRecipe(recipe);
		}
		navigation.navigate("MainInfoModal", {
			levelData,
			isSuccess: true,
		});
	}

	useEffect(() => {
		setLevelId(useDefaultStore.getState().currentLevelId);
	}, [resetKey]);

	useEffect(() => {
		navigation.navigate("MainInfoModal", {
			levelData
		});
	}, [navigation, levelData])

	return (
		<ScreenBackground style={styles.container} backgroundKey="bg7">
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={() => navigation.navigate("InformationModal", {
					levelData
				})}>
					<QuestionIcon />
				</TouchableOpacity>
				<TouchableOpacity onPress={onPause}>
					<PauseIcon />
				</TouchableOpacity>
			</View>
			<View style={styles.container}>
				<ScrollView bounces={false}>
					<GamePlate
						levelData={levelData}
						resetKey={resetKey}
						isHintActive={isHintActive}
						isIngredientHintActive={isIngredientHintActive}
						onLevelEndedChange={setIsLevelEnded}
						onLevelSuccess={onLevelSuccess}
						onTryAgain={() => {
							setIsIngredientHintActive(false);
							setIsHintActive(false);
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
						onPress={onClear}
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