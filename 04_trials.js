// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ],
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
