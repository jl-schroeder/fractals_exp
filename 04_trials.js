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
		},
		{
			question: "Is this a fractal?",
			picture: "images/non_fractals/circle_4_non_0.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "non-fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/non_fractals/square_4_non_0.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "non-fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/hierarchical_iteration/circle_hi_2.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "non-fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/triangle_4.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/circle_3.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "fractal"
		},
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/arrow_3.png",
			key1: "f",
			key2: "j",
			f: "fractal",
			j: "non-fractal",
			expected: "fractal"
		},
	],
	forced_choice: [
		{
			question: "Do you know what this is?" ,
			picture: "images/correct_continuation.png",
			option1: "Yes",
			option2: "No"
		},
		{
			question: "Do you know what a FRACTAL is?" ,
			picture: "images/question_mark_01.png",
			option1: "Yes",
			option2: "No"
		}
	],

	key_press_test: [
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/circle_0.png",
			key1: "f",
			key2: "j",
			f: "CONTINUE",
			j: "CONTINUE",
			expected: "CONTINUE"
		},
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/circle_1.png",
			key1: "f",
			key2: "j",
			f: "CONTINUE",
			j: "CONTINUE",
			expected: "CONTINUE"
		},
		{
			question: "Is this a fractal?",
			picture: "images/Tri_images/circle_2.png",
			key1: "f",
			key2: "j",
			f: "CONTINUE",
			j: "CONTINUE",
			expected: "CONTINUE"
		}
	],
	continuation_fractal: [
		{
			question: "Is this a fractal?",
			picture1: "images/Tri_images/circle_3.png",
			picture2: "images/Tri_images/circle_4.png",
			option1: "LEFT",
			option2: "RIGHT",
		},
	]

};
