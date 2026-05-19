import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "../services/MmkvAdapter";
import { Recipe } from "../data/recipes";
import { GameLevel } from "../data/gameLevels";

type TDefaultStoreState = {
	currentLevelId: number;
	recipes: Recipe[];
	storyLogs: GameLevel[];
	isNewTaskNotificationEnabled: boolean;
	isDailyStreakNotificationEnabled: boolean;
	isContentUpdates: boolean;
	setCurrentLevelId: (currentLevelId: number) => void;
	addRecipe: (recipe: Recipe) => void;
	clearRecipes: () => void;
	addStoryLog: (storyLog: GameLevel) => void;
	clearStoryLogs: () => void;
	toggleNewTaskNotification: () => void;
	toggleDailyStreakNotification: () => void;
	toggleContentUpdates: () => void;
};

export const useDefaultStore = create<TDefaultStoreState>()(
	persist(
		set => ({
			currentLevelId: 1,
			recipes: [],
			storyLogs: [],
			isNewTaskNotificationEnabled: true,
			isDailyStreakNotificationEnabled: true,
			isContentUpdates: true,
			setCurrentLevelId: currentLevelId => set(() => ({ currentLevelId })),
			addRecipe: recipe =>
				set(state => {
					const hasRecipe = state.recipes.some(item => item.id === recipe.id);
					if (hasRecipe) {
						return state;
					}
					return {
						...state,
						recipes: [recipe, ...state.recipes]
					};
				}),
			clearRecipes: () => set(() => ({ recipes: [] })),
			addStoryLog: storyLog =>
				set(state => {
					const hasStoryLog = state.storyLogs.some(item => item.id === storyLog.id);
					if (hasStoryLog) {
						return state;
					}
					return {
						...state,
						storyLogs: [storyLog, ...state.storyLogs]
					};
				}),
			clearStoryLogs: () => set(() => ({ storyLogs: [] })),
			toggleNewTaskNotification: () => set(state => ({ isNewTaskNotificationEnabled: !state.isNewTaskNotificationEnabled })),
			toggleDailyStreakNotification: () => set(state => ({ isDailyStreakNotificationEnabled: !state.isDailyStreakNotificationEnabled })),
			toggleContentUpdates: () => set(state => ({ isContentUpdates: !state.isContentUpdates }))
		}),
		{
			name: "default-store",
			storage: createJSONStorage(() => mmkvStorage),
			partialize: state => ({
				currentLevelId: state.currentLevelId,
				recipes: state.recipes,
				storyLogs: state.storyLogs,
				isNewTaskNotificationEnabled: state.isNewTaskNotificationEnabled,
				isDailyStreakNotificationEnabled: state.isDailyStreakNotificationEnabled,
				isContentUpdates: state.isContentUpdates
			})
		}
	)
);
