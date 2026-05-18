export type RecipeIngredient = {
	ingredientId: number;
	ingredientName: string;
	amount: number;
};

export type Recipe = {
	id: number;
	name: string;
	description: string;
	ingredients: RecipeIngredient[];
};

export const RECIPES: Recipe[] = [
	{
		id: 1,
		name: "Spark Line",
		description: "A simple aligned formation that stabilizes energy flow.",
		ingredients: [
			{
				ingredientId: 2,
				ingredientName: "Solar Syrup",
				amount: 1
			},
			{
				ingredientId: 1,
				ingredientName: "Frost Cube",
				amount: 2
			}
		]
	},
	{
		id: 2,
		name: "Sweet Core",
		description: "A balanced structure with a soft center and stable edges.",
		ingredients: [
			{
				ingredientId: 2,
				ingredientName: "Solar Syrup",
				amount: 3
			},
			{
				ingredientId: 3,
				ingredientName: "Jelly Bloom",
				amount: 1
			}
		]
	},
	{
		id: 3,
		name: "Rising Cross",
		description: "A vertical expansion with a reinforced center.",
		ingredients: [
			{
				ingredientId: 2,
				ingredientName: "Solar Syrup",
				amount: 2
			},
			{
				ingredientId: 3,
				ingredientName: "Jelly Bloom",
				amount: 4
			}
		]
	},
	{
		id: 4,
		name: "Crystal Bloom",
		description: "A symmetric pattern enhanced by refined structure.",
		ingredients: [
			{
				ingredientId: 2,
				ingredientName: "Solar Syrup",
				amount: 4
			},
			{
				ingredientId: 4,
				ingredientName: "Prism Crystal",
				amount: 4
			}
		]
	},
	{
		id: 5,
		name: "Star Pulse",
		description: "A radiant formation that distributes energy evenly.",
		ingredients: [
			{
				ingredientId: 6,
				ingredientName: "Amber Melt",
				amount: 5
			},
			{
				ingredientId: 5,
				ingredientName: "Star Jelly",
				amount: 4
			}
		]
	},
	{
		id: 6,
		name: "Melted Axis",
		description: "A dense vertical core supported by flexible layers.",
		ingredients: [
			{
				ingredientId: 6,
				ingredientName: "Amber Melt",
				amount: 7
			},
			{
				ingredientId: 7,
				ingredientName: "Swirl Cream",
				amount: 5
			}
		]
	},
	{
		id: 7,
		name: "Orbital Mix",
		description: "A rotating pattern stabilized by a central balance point.",
		ingredients: [
			{
				ingredientId: 8,
				ingredientName: "Orbit Candy",
				amount: 4
			},
			{
				ingredientId: 1,
				ingredientName: "Frost Cube",
				amount: 5
			},
			{
				ingredientId: 9,
				ingredientName: "Sugar Cube",
				amount: 2
			}
		]
	},
	{
		id: 8,
		name: "Solid Frame",
		description: "A structured formation built for maximum stability.",
		ingredients: [
			{
				ingredientId: 9,
				ingredientName: "Sugar Cube",
				amount: 7
			},
			{
				ingredientId: 10,
				ingredientName: "Lava Drop",
				amount: 7
			}
		]
	},
	{
		id: 9,
		name: "Nova Core",
		description: "An energized composition with a volatile center.",
		ingredients: [
			{
				ingredientId: 11,
				ingredientName: "Galaxy Cream",
				amount: 6
			},
			{
				ingredientId: 9,
				ingredientName: "Sugar Cube",
				amount: 3
			},
			{
				ingredientId: 12,
				ingredientName: "Cosmic Berry",
				amount: 3
			}
		]
	}
];
