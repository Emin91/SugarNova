import React from "react";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { JournalScreen } from "../screens/JournalScreen";
import { GameScreen } from "../screens/GameScreen";
import { InformationModalScreen } from "../screens/InformationModalScreen";
import { MainInfoModalScreen } from "../screens/MainInfoModalScreen";
import { ConfirmModalScreen } from "../screens/ConfirmModalScreen";
import { PrivacyScreen } from "../screens/PrivacyScreen";

enableScreens(true);

export type RootStackParamList = {
	Welcome: { startFromLastStep?: boolean } | undefined;
	Home: undefined;
	Settings: undefined;
	Journal: undefined;
	Game: undefined;
	InformationModal: undefined;
	MainInfoModal: undefined;
	ConfirmModal: undefined;
	Privacy: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const transparentModalOptions = {
	presentation: "transparentModal" as const,
	animation: "fade" as const,
	contentStyle: { backgroundColor: "transparent" }
};

export const Routing = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName={"Welcome"} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
				<Stack.Screen name="Journal" component={JournalScreen} />
				<Stack.Screen name="Game" component={GameScreen} />
				<Stack.Screen name="Privacy" component={PrivacyScreen} />
				<Stack.Group screenOptions={transparentModalOptions}>
					<Stack.Screen name="InformationModal" component={InformationModalScreen} />
					<Stack.Screen name="MainInfoModal" component={MainInfoModalScreen} />
					<Stack.Screen name="ConfirmModal" component={ConfirmModalScreen} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
