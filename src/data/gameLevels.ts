export interface GameLevel {
	id: number;
	shapeInfo: string;
	ingredientInfo: string;
	shape: any[];
}

export const GAME_LEVELS: GameLevel[] = [
	{
		id: 1,
		shape: [
			{
				row: 1,
				col: 1,
				ingredient: "img_1"
			},
			{
				row: 2,
				col: 2,
				ingredient: "img_2"
			},
			{
				row: 3,
				col: 3,
				ingredient: "img_1"
			}
		],
		shapeInfo:
			"Start from the upper-left side and follow a falling path toward the lower-right. The formation should move one step down and one step forward each time, like a trail sliding across the grid.",
		ingredientInfo:
			"Use the cold element to stabilize the outer points of the trail. Place the warm glowing element in the center, where the energy should gather before spreading along the line."
	},
	{
		id: 2,
		shape: [
			{
				row: 1,
				col: 2,
				ingredient: "img_3"
			},
			{
				row: 2,
				col: 1,
				ingredient: "img_2"
			},
			{
				row: 2,
				col: 3,
				ingredient: "img_2"
			},
			{
				row: 2,
				col: 2,
				ingredient: "img_2"
			}
		],
		shapeInfo:
			"Build around a single center point, but do not extend the structure vertically or horizontally for long distances. The formation should feel balanced from every side, with one point above, one below, and two positioned evenly across the middle.",
		ingredientInfo:
			"Place the soft adaptive substance at the highest point of the formation. Use the warm glowing syrup to support the remaining positions and keep the structure stable from all directions."
	},
	{
		id: 3,
		shape: [
			{
				row: 0,
				col: 2,
				ingredient: "img_3"
			},
			{
				row: 1,
				col: 2,
				ingredient: "img_3"
			},
			{
				row: 2,
				col: 1,
				ingredient: "img_2"
			},
			{
				row: 2,
				col: 3,
				ingredient: "img_2"
			},
			{
				row: 3,
				col: 2,
				ingredient: "img_3"
			},
			{
				row: 4,
				col: 2,
				ingredient: "img_3"
			}
		],
		shapeInfo:
			"Create a strong vertical structure running through the center of the grid. The formation should stretch upward and downward from the middle, while two side points stabilize it across the center line.",
		ingredientInfo:
			"Use the soft adaptive substance to build the vertical core of the structure. Place the warm glowing syrup on the side points, where the formation needs additional energy to remain balanced."
	},
	{
		id: 4,
		shape: [
			{
				row: 0,
				col: 2,
				ingredient: "img_2"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_4"
			},
			{
				row: 1,
				col: 3,
				ingredient: "img_4"
			},
			{
				row: 2,
				col: 0,
				ingredient: "img_2"
			},
			{
				row: 2,
				col: 4,
				ingredient: "img_2"
			},
			{
				row: 3,
				col: 1,
				ingredient: "img_4"
			},
			{
				row: 3,
				col: 3,
				ingredient: "img_4"
			},
			{
				row: 4,
				col: 2,
				ingredient: "img_2"
			}
		],
		shapeInfo:
			"Build a hollow formation around an empty center. The structure should spread diagonally outward, with supporting points placed above, below, and across from each other rather than connected through the middle.",
		ingredientInfo:
			"Use the refined crystal element on the inner supporting points of the formation. Place the warm glowing syrup on the outer edges, where the structure releases its energy outward instead of toward the center."
	},
	{
		id: 5,
		shape: [
			{
				row: 0,
				col: 0,
				ingredient: "img_6"
			},
			{
				row: 0,
				col: 4,
				ingredient: "img_6"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_5"
			},
			{
				row: 1,
				col: 3,
				ingredient: "img_5"
			},
			{
				row: 2,
				col: 2,
				ingredient: "img_6"
			},
			{
				row: 3,
				col: 1,
				ingredient: "img_5"
			},
			{
				row: 3,
				col: 3,
				ingredient: "img_5"
			},
			{
				row: 4,
				col: 0,
				ingredient: "img_6"
			},
			{
				row: 4,
				col: 4,
				ingredient: "img_6"
			}
		],
		shapeInfo:
			"Form a wide outer frame that surrounds the structure from the corners. Leave open space through the center line, but reinforce the middle with four balanced inner points placed diagonally around a single core.",
		ingredientInfo:
			"Use the thick binding element on the outer corners and at the center of the formation, where the structure needs strength and stability. Place the elastic glowing mass on the inner points, allowing the pattern to hold light evenly around the core."
	},
	{
		id: 6,
		shape: [
			{
				row: 0,
				col: 0,
				ingredient: "img_6"
			},
			{
				row: 0,
				col: 2,
				ingredient: "img_7"
			},
			{
				row: 0,
				col: 4,
				ingredient: "img_6"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_6"
			},
			{
				row: 1,
				col: 3,
				ingredient: "img_6"
			},
			{
				row: 2,
				col: 2,
				ingredient: "img_6"
			},
			{
				row: 3,
				col: 2,
				ingredient: "img_6"
			},
			{
				row: 4,
				col: 0,
				ingredient: "img_7"
			},
			{
				row: 4,
				col: 1,
				ingredient: "img_7"
			},
			{
				row: 4,
				col: 2,
				ingredient: "img_6"
			},
			{
				row: 4,
				col: 3,
				ingredient: "img_7"
			},
			{
				row: 4,
				col: 3,
				ingredient: "img_7"
			}
		],
		shapeInfo:
			"Build the structure upward from a dense lower foundation. The widest part should remain at the bottom edge of the grid, while a narrow vertical path rises through the center toward the top. Two balanced side points should support the upper section before the formation closes at its peak.",
		ingredientInfo:
			"Use the smooth airy cream across the entire lower foundation and at the highest point of the structure, allowing the formation to stay light despite its size. Place the thick binding element through the central path and supporting side points to hold the pattern together as it rises upward."
	},
	{
		id: 7,
		shape: [
			{
				row: 0,
				col: 0,
				ingredient: "img_1"
			},
			{
				row: 0,
				col: 2,
				ingredient: "img_8"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_1"
			},
			{
				row: 1,
				col: 4,
				ingredient: "img_8"
			},
			{
				row: 2,
				col: 0,
				ingredient: "img_8"
			},
			{
				row: 2,
				col: 2,
				ingredient: "img_1"
			},
			{
				row: 2,
				col: 3,
				ingredient: "img_9"
			},
			{
				row: 3,
				col: 2,
				ingredient: "img_9"
			},
			{
				row: 3,
				col: 3,
				ingredient: "img_1"
			},
			{
				row: 4,
				col: 1,
				ingredient: "img_9"
			},
			{
				row: 4,
				col: 4,
				ingredient: "img_1"
			}
		],
		shapeInfo:
			"Create a descending diagonal structure that moves from the upper-left corner toward the lower-right edge of the grid. The pattern should feel staggered rather than connected in straight rows, with supporting points appearing beside the central path as the formation shifts downward.",
		ingredientInfo:
			"Use the cold stabilizing element along the main diagonal of the formation to maintain the falling structure. Place the balanced circular element on the outer supporting points, where the pattern changes direction and needs rotational stability. Use the solid structural unit only near the center of the formation, where additional support is required to keep the structure aligned."
	},
	{
		id: 8,
		shape: [
			{
				row: 0,
				col: 0,
				ingredient: "img_9"
			},
			{
				row: 0,
				col: 2,
				ingredient: "img_10"
			},
			{
				row: 0,
				col: 3,
				ingredient: "img_10"
			},
			{
				row: 0,
				col: 4,
				ingredient: "img_10"
			},
			{
				row: 1,
				col: 0,
				ingredient: "img_9"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_9"
			},
			{
				row: 2,
				col: 3,
				ingredient: "img_9"
			},
			{
				row: 2,
				col: 4,
				ingredient: "img_9"
			},
			{
				row: 3,
				col: 0,
				ingredient: "img_10"
			},
			{
				row: 3,
				col: 1,
				ingredient: "img_10"
			},
			{
				row: 3,
				col: 2,
				ingredient: "img_10"
			},
			{
				row: 3,
				col: 4,
				ingredient: "img_9"
			},
			{
				row: 4,
				col: 3,
				ingredient: "img_9"
			},
			{
				row: 4,
				col: 4,
				ingredient: "img_9"
			}
		],
		shapeInfo:
			"Build two separated horizontal structures connected only through the outer edges of the formation. The upper section should stretch wider across the grid, while the lower section remains shorter and heavier. Leave an open gap through the center-right area so the structure does not fully close.",
		ingredientInfo:
			"Use the hot fluid core across the horizontal energy lines, especially where the structure expands outward. Place the solid structural units along the outer edges and lower support points to keep the separated sections stable despite the open space between them."
	},
	{
		id: 9,
		shape: [
			{
				row: 0,
				col: 1,
				ingredient: "img_11"
			},
			{
				row: 0,
				col: 4,
				ingredient: "img_12"
			},
			{
				row: 1,
				col: 0,
				ingredient: "img_12"
			},
			{
				row: 1,
				col: 1,
				ingredient: "img_11"
			},
			{
				row: 2,
				col: 1,
				ingredient: "img_11"
			},
			{
				row: 2,
				col: 3,
				ingredient: "img_11"
			},
			{
				row: 2,
				col: 4,
				ingredient: "img_9"
			},
			{
				row: 3,
				col: 1,
				ingredient: "img_9"
			},
			{
				row: 3,
				col: 3,
				ingredient: "img_11"
			},
			{
				row: 4,
				col: 0,
				ingredient: "img_9"
			},
			{
				row: 4,
				col: 3,
				ingredient: "img_11"
			},
			{
				row: 4,
				col: 4,
				ingredient: "img_12"
			}
		],
		shapeInfo:
			"Form two vertical paths descending through the grid, one on the left and one on the right. The left side should begin higher and feel more continuous, while the right side appears broken into separate segments. Leave open space between them so the structure stays divided rather than fully connected.",
		ingredientInfo:
			"Use the layered glowing cream to build the flowing vertical paths of the formation, allowing the structure to remain soft and adaptive as it descends. Place the vibrant contrasting element on the isolated outer points, where the pattern needs intensity instead of stability. Use the solid structural units only near the lower and central support points to reinforce the separated sides of the formation."
	}
];
