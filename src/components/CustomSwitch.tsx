import React, { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
	value: boolean;
	onChange: (value: boolean) => void;
};

export const CustomSwitch = memo(({ value, onChange }: Props) => {
	return (
		<Pressable
			onPress={() => onChange(!value)}
			style={[styles.container, value && styles.containerActive]}>
			<View style={[styles.thumb, value && styles.thumbActive]} />
		</Pressable>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 56,
		height: 32,
		borderRadius: 32,
		backgroundColor: "#5b145a",
		padding: 4,
		justifyContent: "center"
	},
	containerActive: {
		backgroundColor: "#AD15AA"
	},
	thumb: {
		width: 24,
		height: 24,
		borderRadius: 24,
		backgroundColor: "#FFF"
	},
	thumbActive: {
		alignSelf: "flex-end"
	}
});