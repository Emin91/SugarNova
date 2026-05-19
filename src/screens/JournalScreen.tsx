import { memo, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ScreenBackground } from "../components/ScreenBackground";
import { MainHeader } from "../components/MainHeader";
import { RecipeItem } from "../components/RecipeItem";
import { IngredientItem } from "../components/IngredientItem";

import { hexToRgba } from "../utils/hexToRgba";

import { Recipe } from "../data/recipes";
import { Ingredient, INGREDIENTS } from "../data/ingredients";
import { useDefaultStore } from "../store/useDefaultStore";
import { LogItem } from "../components/LogItem";
import { GameLevel } from "../data/gameLevels";

export const JournalScreen = memo(() => {
	const [selectedTab, setSelectedTab] = useState(0);
	const recipes = useDefaultStore(state => state.recipes);
	const storyLogs = useDefaultStore(state => state.storyLogs);

	const tabs = [
		{
			id: 1,
			label: "Story Log"
		},
		{
			id: 2,
			label: "Recipes"
		},
		{
			id: 3,
			label: "Ingredients"
		}
	];

	return (
		<ScreenBackground style={styles.container} backgroundKey="bg6">
			<MainHeader />
			<View style={styles.tabs}>
				{tabs.map((tab) => {
					const isActive = selectedTab === tab.id - 1;

					return (
						<TouchableOpacity
							key={tab.id}
							style={[
								styles.tab,
								isActive ? styles.activeTab : styles.inactiveTab
							]}
							onPress={() => setSelectedTab(tab.id - 1)}
						>
							<Text
								style={[
									styles.tabLabel,
									isActive ? styles.activeTabLabel : styles.inactiveTabLabel
								]}
								numberOfLines={1}
							>
								{tab.label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={selectedTab === 0 ? storyLogs : selectedTab === 1 ? recipes : INGREDIENTS}
				renderItem={({ item }: { item: GameLevel | Recipe | Ingredient }) =>
					selectedTab === 0 ? <LogItem item={item as GameLevel} /> : selectedTab === 1 ? (
						<RecipeItem item={item as Recipe} />
					) : (
						<IngredientItem item={item as Ingredient} />
					)
				}
				contentContainerStyle={styles.listContent}
				ListEmptyComponent={<Text style={styles.emptyText}>No items found</Text>}
			/>
		</ScreenBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 14,
		paddingHorizontal: 24
	},
	tabs: {
		flexDirection: "row",
		gap: 8
	},
	emptyText: {
		color: "#fff",
		fontSize: 20,
		marginTop: 20,
		textAlign: "center",
		fontWeight: "900"
	},
	tab: {
		flex: 1,
		height: 30,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 12
	},
	activeTab: {
		backgroundColor: "#FF00FB"
	},
	inactiveTab: {
		backgroundColor: hexToRgba("#9000FF", 0.7)
	},
	tabLabel: {
		fontSize: 14,
		fontWeight: "900"
	},
	activeTabLabel: {
		color: "#fff"
	},
	inactiveTabLabel: {
		color: hexToRgba("#DABCFF", 0.5)
	},
	listContent: {
		gap: 10,
		paddingBottom: 40
	}
});