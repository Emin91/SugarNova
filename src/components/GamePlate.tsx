import { useState } from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

import { IMAGES } from "../assets/images";

const GRID = Array.from({ length: 5 }, (_, row) =>
	Array.from({ length: 5 }, (_, col) => ({
		row,
		col,
	}))
);

export const GamePlate = () => {
	const [overlayHeight, setOverlayHeight] = useState(0);

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
										style={styles.cell}
									/>
								))}
							</View>
						))}
					</View>
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
		backgroundColor: "#B88EFF",
		borderRadius: 4,
	},
});