// In this file you can specify the trial data for your experiment


const trial_info = {
	image_selection: [
		{
			question: "What is the correct recursive continuation?",
			picture1: "images/correct_continuation.png",
			picture2: "images/incorrect_continuation.png",
			option1: "left",
			option2: "right",
		}
	],
	key_press: [
		{
			question: "Is this a fractal?",
			picture: "images/correct_continuation.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/incorrect_continuation.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "non-fractal"
		}
	]

};
