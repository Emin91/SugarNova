import { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Text,
	ScrollView,
	Image,
} from "react-native";

import { ImageKeys, IMAGES } from "../assets/images";
import { INGREDIENTS } from "../data/ingredients";
import { GAME_LEVELS } from "../data/gameLevels";

const GRID = Array.from({ length: 5 }, (_, row) =>
	Array.from({ length: 5 }, (_, col) => ({
		row,
		col,
	}))
);

type TCellState = "incorrect" | "incorrectTileCorrectIngredient" | "correctTileIncorrectIngredient" | "allCorrect";

type TGamePlateProps = {
	resetKey: number;
	isHintActive: boolean;
	isIngredientHintActive: boolean;
	onLevelEndedChange?: (isLevelEnded: boolean) => void;
	onTryAgain?: () => void;
};

export const GamePlate = ({
	resetKey,
	isHintActive,
	isIngredientHintActive,
	onLevelEndedChange,
	onTryAgain,
}: TGamePlateProps) => {
	const levelData = GAME_LEVELS[0];
	const [overlayHeight, setOverlayHeight] = useState(0);
	const [selectedIngredient, setSelectedIngredient] = useState<ImageKeys | null>(null);
	const [cellStateMap, setCellStateMap] = useState<Record<string, TCellState>>({});
	const [placedIngredientMap, setPlacedIngredientMap] = useState<Record<string, ImageKeys>>({});

	useEffect(() => {
		setSelectedIngredient(null);
		setCellStateMap({});
		setPlacedIngredientMap({});
	}, [resetKey]);

	const isLevelCompleted = levelData.shape.every(({ row, col, ingredient }) => {
		const cellKey = `${row}-${col}`;
		return (
			cellStateMap[cellKey] === "allCorrect" &&
			placedIngredientMap[cellKey] === ingredient
		);
	});

	const isLevelFailed =
		!isLevelCompleted &&
		levelData.shape.every(({ row, col }) => {
			const cellKey = `${row}-${col}`;
			return Boolean(placedIngredientMap[cellKey]);
		});

	const isLevelEnded = isLevelCompleted || isLevelFailed;

	useEffect(() => {
		onLevelEndedChange?.(isLevelEnded);
	}, [isLevelEnded, onLevelEndedChange]);

	const shapeCellKeySet = new Set(
		levelData.shape.map(({ row, col }) => `${row}-${col}`)
	);

	const shapeIngredientKeySet = new Set(
		levelData.shape.map(({ ingredient }) => ingredient as ImageKeys)
	);

	const onPressCell = ({ row, col }: { row: number; col: number }) => {
		if (!selectedIngredient) {
			return;
		}

		const shapeCell = levelData.shape.find(
			(item) => item.row === row && item.col === col
		);
		const isCorrectTile = Boolean(shapeCell);
		const isCorrectIngredient = levelData.shape.some(
			(item) => item.ingredient === selectedIngredient
		);
		const isAllCorrect = shapeCell?.ingredient === selectedIngredient;

		const cellKey = `${row}-${col}`;
		setPlacedIngredientMap((prev) => ({
			...prev,
			[cellKey]: selectedIngredient,
		}));

		const nextState: TCellState = isAllCorrect
			? "allCorrect"
			: isCorrectTile
				? "correctTileIncorrectIngredient"
				: isCorrectIngredient
					? "incorrectTileCorrectIngredient"
					: "incorrect";

		setCellStateMap((prev) => ({
			...prev,
			[cellKey]: nextState,
		}));
	};

	return (
		<ImageBackground
			style={styles.container}
			source={IMAGES.gamePlate}
			resizeMode="contain"
		>
			<View
				style={styles.overlay}
				onLayout={(e) => {
					setOverlayHeight(e.nativeEvent.layout.height);
				}}
			>
				<View
					style={[
						styles.boardContainer,
						{
							top: overlayHeight * 0.128,
						},
					]}
				>
					<View style={styles.grid}>
						{GRID.map((row, rowIndex) => (
							<View key={rowIndex} style={styles.row}>
								{row.map((cell) => (
									<TouchableOpacity
										key={`${cell.row}-${cell.col}`}
										disabled={
											isLevelEnded ||
											!selectedIngredient ||
											Boolean(cellStateMap[`${cell.row}-${cell.col}`])
										}
										onPress={() => onPressCell(cell)}
										style={[
											styles.cell,
											isHintActive &&
											shapeCellKeySet.has(`${cell.row}-${cell.col}`) &&
											!cellStateMap[`${cell.row}-${cell.col}`] &&
											styles.cellHint,
											cellStateMap[`${cell.row}-${cell.col}`] === "incorrect" && styles.cellIncorrect,
											cellStateMap[`${cell.row}-${cell.col}`] === "incorrectTileCorrectIngredient" &&
											styles.cellIncorrectTileCorrectIngredient,
											cellStateMap[`${cell.row}-${cell.col}`] === "correctTileIncorrectIngredient" &&
											styles.cellCorrectTileIncorrectIngredient,
											cellStateMap[`${cell.row}-${cell.col}`] === "allCorrect" && styles.cellAllCorrect,
										]}
									>
										{placedIngredientMap[`${cell.row}-${cell.col}`] && (
											<Image
												source={IMAGES[placedIngredientMap[`${cell.row}-${cell.col}`]]}
												style={{ width: "78%", height: "78%" }}
											/>
										)}
									</TouchableOpacity>
								))}
							</View>
						))}
					</View>
				</View>
				<View style={{ position: "absolute", bottom: '4%', left: 0, right: 0, height: '13%', marginHorizontal: '6%', overflow: "hidden" }} >
					<ScrollView
						horizontal
						contentContainerStyle={{ alignItems: 'center', gap: 10, opacity: isLevelEnded ? 0.1 : 1 }}
						showsHorizontalScrollIndicator={false}
						scrollEnabled={!isLevelEnded}
					>
						{INGREDIENTS.map((ingredient) => (
							<TouchableOpacity
								key={ingredient.id}
								disabled={isLevelEnded}
								onPress={() => {
									setSelectedIngredient(`img_${ingredient.id}` as ImageKeys);
								}}
							>
								<Image
									source={IMAGES[`img_${ingredient.id}` as ImageKeys]}
									style={{
										aspectRatio: 1,
										height: "80%",
										opacity:
											selectedIngredient === `img_${ingredient.id}`
												? 1
												: isIngredientHintActive &&
													!shapeIngredientKeySet.has(`img_${ingredient.id}` as ImageKeys)
													? 0.1
													: 0.5,
									}}
								/>
							</TouchableOpacity>
						))}
					</ScrollView>
					{isLevelEnded && (
						<View style={{ alignItems: 'center', backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 10, position: "absolute", left: 0, right: 0, top: 0, bottom: 0, justifyContent: "center", }}>
							{isLevelCompleted ? (
								<Text style={{ color: 'white', fontSize: 40, fontWeight: '800' }}>
									Amazing!
								</Text>
							) : (
								<TouchableOpacity
									onPress={() => {
										onTryAgain?.();
									}}
								>
									<Text style={{ color: 'white', fontSize: 40, fontWeight: '800' }}>
										Try again!
									</Text>
								</TouchableOpacity>
							)}
						</View>
					)}
				</View>
			</View>
		</ImageBackground>
	);
};

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		aspectRatio: 0.66,
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	boardContainer: {
		width: "100%",
		aspectRatio: 1.1,
		position: "absolute",
		left: 0,
		paddingHorizontal: "6%",
		paddingVertical: 12,
	},
	grid: {
		flex: 1,
		overflow: "hidden",
		paddingHorizontal: 8,
		paddingVertical: 4,
		gap: 4,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		gap: 4,
	},
	cell: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#B88EFF",
		borderRadius: 4,
	},
	cellHint: {
		backgroundColor: "#CC74FF",
	},
	cellIncorrect: {
		backgroundColor: "#DE1417",
	},
	cellIncorrectTileCorrectIngredient: {
		backgroundColor: "#FF47F0",
	},
	cellCorrectTileIncorrectIngredient: {
		backgroundColor: "#FF964B",
	},
	cellAllCorrect: {
		backgroundColor: "#FFD900",
	},
});