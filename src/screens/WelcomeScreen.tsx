import { memo, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ScreenBackground } from "../components/ScreenBackground";
import { hexToRgba } from "../utils/hexToRgba";
import { RootStackParamList } from "../navigation/Routing";

export const WelcomeScreen = memo(() => {
	const navigation = useNavigation<any>();
	const route = useRoute<RouteProp<RootStackParamList, "Welcome">>();

	const data = [
		{
			id: 1,
			text: "A strange signal has been detected beyond the visible spectrum.\n\nIt doesn’t behave like light or data — it forms patterns. Stable, repeating shapes that seem intentional.\n\nSomething in this system is trying to be read, but no one has decoded it yet."
		},
		{
			id: 2,
			text: "Fragments of these patterns begin to align. Not randomly — with structure. Points connect, forming constellations unlike any star map.\n\nEach formation reacts to input, as if waiting to be completed. This is not natural space. It’s something constructed."
		},
		{
			id: 3,
			text: "Analysis suggests these constellations are not just visual. They respond to composition. When the correct structure and elements align, a result is produced.\n\nYour task is to reconstruct these formations and uncover what they were designed to create."
		},
		{
			id: 4,
			text: "• Work on a 5x5 field. Each cell holds one element. Recreate the hidden constellation using correct placement and composition.\n\n• Each task provides hints about shape and elements.\n\n• Place, remove, and swap elements freely. System indicates if the pattern or composition is incorrect.\n\n• Reveal part of the shape or one correct element. All completed constellations are stored for reference."
		}
	];

	const initialActiveStep = useMemo(() => {
		if (route.params?.startFromLastStep) {
			return data.length - 1;
		}

		return 0;
	}, [data.length, route.params?.startFromLastStep]);

	const [activeStep, setActiveStep] = useState(initialActiveStep);

	const handleContinue = () => {
		if (activeStep === data.length - 1) {
			navigation.navigate("Home");
			return;
		}

		setActiveStep(prev => prev + 1);
	};

	const activeData = data[activeStep];

	return (
		<ScreenBackground backgroundKey={activeData?.id === 2 || activeData?.id === 3 ? 'bg2' : activeData?.id === 4 ? 'bg3' : 'bg1'}>
			<View style={styles.container}>
				{activeData?.id === 4 ? (
					<View style={styles.header}>
						<Text style={styles.headerText}>How to play?</Text>
					</View>
				) : null}
				<View style={styles.card}>
					<Text style={[styles.text, { textAlign: activeData?.id === 4 ? 'left' : 'center' }]}>{activeData?.text}</Text>
				</View>
			</View>
			<TouchableOpacity onPress={handleContinue}>
				<Text style={styles.tapText}>TAP TO CONTINUE</Text>
			</TouchableOpacity>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 24
	},
	card: {
		width: '100%',
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderRadius: 36,
		backgroundColor: hexToRgba('#3A1166')
	},
	header: {
		marginBottom: 10,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 60,
		width: "100%",
		backgroundColor: hexToRgba('#690EC9')
	},
	headerText: {
		color: 'white',
		fontSize: 34,
		fontWeight: '900',
		textAlign: 'center'
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center'
	},
	tapText: {
		color: 'white',
		fontSize: 30,
		fontWeight: '900',
		textAlign: 'center',
		marginBottom: 30
	}
});
