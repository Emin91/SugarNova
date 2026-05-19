import { memo, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hexToRgba } from "../utils/hexToRgba";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GameLevel } from "../data/gameLevels";
import { IMAGES } from "../assets/images";

const intro = "The signal stabilizes as you focus on it. What first looked like scattered noise begins to form a grid — structured, responsive. Points react when you interact with them, as if waiting to be filled.\n\nYou can place elements into any cell. Rearrange them, remove them, try different combinations. The system does not restrict you — it observes and responds.\n\nEach pattern requires two things: the correct shape and the correct composition. If the structure is wrong, it will collapse. If the elements are misplaced, it will remain incomplete.\n\nThe first formation is simple. A straight alignment. It should be enough to understand how this system behaves.";

export const MainInfoModalScreen = memo(() => {
	const navigation = useNavigation<any>();
	const { top, bottom } = useSafeAreaInsets();
	const [isTaskInfoShown, setIsTaskInfoShown] = useState(false);
	const { levelData, isSuccess } =
		(useRoute()?.params as { levelData: GameLevel, isSuccess?: boolean }) ?? {};

	const onTapToStart = () => {
		if (isSuccess) {
			navigation.reset({
				index: 0,
				routes: [{ name: "Home" }],
			});
			return;
		}
		setIsTaskInfoShown(true);
		if (isTaskInfoShown) {
			navigation.goBack();
		}
	};

	return (
		<View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
			{isSuccess ? (
				<View style={styles.starsContainer}>
					<Image
						source={IMAGES.stars}
						style={styles.starsImage}
						resizeMode="cover"
					/>
				</View>
			) : null}
			<View style={styles.content}>
				<View style={styles.clueContainer}>
					{isTaskInfoShown || isSuccess ? (
						<Text style={styles.title}>
							{isSuccess ? "Success!" : "Current Task:"}
						</Text>
					) : null}
					<Text
						style={[
							styles.clueText,
							isTaskInfoShown || isSuccess
								? styles.clueTextLeft
								: styles.clueTextCenter,
						]}
					>
						{isSuccess
							? levelData?.successInfo
							: isTaskInfoShown
								? levelData?.shapeInfo
								: intro}
					</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={onTapToStart}>
				<Text style={styles.buttonText}>
					{isSuccess ? "TAP TO CONTINUE" : "TAP TO START"}
				</Text>
			</TouchableOpacity>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: hexToRgba("#3A1166", 0.8),
	},
	starsContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
	},
	starsImage: {
		width: "100%",
		height: Dimensions.get("screen").height * 0.3,
	},
	content: {
		flex: 1,
		marginTop: 80,
	},
	clueContainer: {
		backgroundColor: "#3A1166",
		padding: 16,
		borderRadius: 16,
		gap: 10,
	},
	clueText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "600",
	},
	clueTextLeft: {
		textAlign: "left",
	},
	clueTextCenter: {
		textAlign: "center",
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "900",
	},
	button: {
		alignSelf: "center",
		marginBottom: 20,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 30,
		fontWeight: "900",
	},
});