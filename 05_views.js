// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  // (This experiment will currently not take longer than 15 minutes.)
  text: `Thank you for participating in this experiment.
            <br />
            <br />
            On the following slides you will be presented with a few tests.
            <br />
            You will find the specific instructions before the test.
            where you will get the dedicated Instructions
            <br />
            Please read all the text carefully.
            <br />
            You will have to look at some structures and answer questions according to the instructions you get.
            <br />
            <br />
            <br />
            The data collected is strictly anonymous.
            With participation in this study you consent to using you data on a strict anonymous basis.
            <br />
            <br />
            <strong>You can stop the experiment at any time!</strong>
            <br />
            No data will then be stored.
            <br />
            <br />
            If you have any questions or concerns, please write me an email to: <strong> janlschroede@uni-osnabrueck.de</strong>.
            <br />
            <br />
            <br />
            If you want to be notified of possible findings of this study, you can also write me an email to the adress above and I will inform you after the experiment is over.
            <br />
            <br />
            Enjoy.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `On the next two pages you will be shown some questions.
      <br />
      We are asking these to check your current understanding of a concept.
      <br />
      <br />
      Afterwards you will be presented with two different types of experiments.
			<br />
      You will get the corresponding instructions right before the tests.
      <br />
			<br />
      <br />
      If possible, please make this window fullscreen.
      <br />
      (e.g. press <strong>(F11)</strong> or <strong>(Fn + F11)</strong>).
      <br />`,
  buttonText: 'go to the questions'
});


const fractal_view_instruction = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'fractal_view_instruction',
  title: 'Continuation Task - Instructions',
  text: `In this task you have to look closely at the pictures flasing on the screen.
        <br />
        These are either the first 3 or the first 4 iterations steps.
        <br />
        <br />
        Then will follow a short pause. Afterwards you will be presented with two pictures.
        <br />
        <br />
        One of these pictures represent the correct next iteration step, the other is an incorrect step.
        <br />
        You than have to decide which one is the correct continuation.
        <br />
        <br />
        <br />
        For this you press either the LEFT or the RIGHT button located below the pictures.
        <br />
        <br />
        <br />
        If you feel ready, press the button below.`,
        buttonText: "Begin trial",
});

const key_press_instruction = magpieViews.view_generator("instructions", {
	trials: 1,
	name: 'key_press_instruction',
	title: 'Key-Press task',
	text: `In this task you have to press eihter the "F" or the "J" key to fullfill the test.
			<br />
			<br />
			Pressing the-"F"-key means the picture is a fractal.
			<br />
			Pressing the-"J"-key means the picture is not a fractal.
			<br />
			<br />
      First there will be a few test rounds,
      afterwards you will be shown another instruction test, where you can then start the actual test.
      <br />
      <br />
			If you feel ready for the test trials press the button below.
			<br />
			<br />
			<br />
			As a reminder: Fractal vs Non-Fractal`,
			buttonText: "Begin test trial",
});

const key_press_instruction_post_test = magpieViews.view_generator("instructions", {
	trials: 1,
	name: 'key_press_instruction_post_test',
	title: 'Key-Press task - After test trials',
	text: `These were the test trials.
			<br />
			<br />
      <br />
			Reminder:
      <br />
			<br />
			Pressing the-"F"-key means the picture is a fractal.
			<br />
			Pressing the-"J"-key means the picture is not a fractal.
			<br />
			<br />
      If you feel ready for the actual test press the button below.
			<br />
			<br />
			<br />
      `,
			buttonText: "Begin task",
});


const second_key_press_instruction = magpieViews.view_generator("instructions", {
	trials: 1,
	name: 'second_key_press_instruction',
	title: 'Key-Press task - Second iteration',
	text: `This is another iteration of the key press task.
			<br />
      <br />
      <br />
      You will again be presented with diferent pictures where you have to press a button according to the type of structure.
			<br />
      <br />
			Reminder:
      <br />
			<br />
			Pressing the-"F"-key means the picture is a fractal.
			<br />
			Pressing the-"J"-key means the picture is not a fractal.
			<br />
			<br />
      If you feel ready for the test, press the button below.
			<br />
			<br />
			<br />
      `,
			buttonText: "Begin task",
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});


/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


/*// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: trial_info.forced_choice, // to shuffle: _.shuffle(trial_info.forced_choice)
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
}); */

// pre experiment questions
const forced_choice_preQ = magpieViews.view_generator("forced_choice", {
  trials: trial_info.forced_choice.length,
  name: 'forced_choice_preQ',
  data: trial_info.forced_choice,
});


// key-press task
const key_press_2C = magpieViews.view_generator("key_press", {
	trials: trial_info.key_press.length,
	name: 'key_press_2C',
	data: _.shuffle(trial_info.key_press), // For different groups: //_.sample([_.shuffle(trial_info.key_press_testing),_.shuffle(trial_info.key_press)]),
  fix_duration: 250,
});

// key-press task TEST
const key_press_testTrial = magpieViews.view_generator("key_press", {
	trials: 8,//trial_info.key_press_testing.length,
	name: 'key_press_testTrial',
	data: _.shuffle(trial_info.key_press_testing),
  fix_duration: 250,
});


// key_press task first time
const key_press_first_one = magpieViews.view_generator("key_press", {
	trials: Math.random()*(10-1)+1,
	name: 'key_press_first_one',
	data: _.shuffle(trial_info.key_press_find_non_fractal),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_first_two = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_first_two',
	data: _.shuffle(trial_info.key_press_find_fractal),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_one = magpieViews.view_generator("key_press", {
	trials: Math.random()*(15-1)+1,
	name: 'key_press_second_one',
	data: _.shuffle(trial_info.key_press_find_fractal),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_two = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_second_two',
	data: _.shuffle(trial_info.key_press_find_non_fractal),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

/////////////////////////
// key_press task first time
const key_press_first_one_comp_3 = magpieViews.view_generator("key_press", {
	trials: Math.random()*(10-1)+1,
	name: 'key_press_first_one_comp_3',
	data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_first_two_comp_3 = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_first_two_comp_3',
	data: _.shuffle(trial_info.key_press_find_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_one_comp_3 = magpieViews.view_generator("key_press", {
	trials: Math.random()*(15-1)+1,
	name: 'key_press_second_one_comp_3',
	data: _.shuffle(trial_info.key_press_find_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_two_comp_3 = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_second_two_comp_3',
	data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_3),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});
// key_press task first time
const key_press_first_one_comp_4 = magpieViews.view_generator("key_press", {
	trials: Math.random()*(10-1)+1,
	name: 'key_press_first_one_comp_4',
	data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_first_two_comp_4 = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_first_two_comp_4',
	data: _.shuffle(trial_info.key_press_find_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_one_comp_4 = magpieViews.view_generator("key_press", {
	trials: Math.random()*(15-1)+1,
	name: 'key_press_second_one_comp_4',
	data: _.shuffle(trial_info.key_press_find_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});

// key_press task second time
const key_press_second_two_comp_4 = magpieViews.view_generator("key_press", {
	trials: 1,
	name: 'key_press_second',
	data: _.shuffle(trial_info.key_press_find_non_fractal_complexity_4),//_.sample(_.shuffle([trial_info.key_press_find_non_fractal, trial_info.key_press_find_fractal])),
  fix_duration: 250,
});
/////////////////////////


// shows continuation of previous iteration
const fractal_view_2D = fractal_view({
	trials: 1,
	name: 'fractal_view_2D',
	data: trial_info.fractal_view,
});

// shows iteration
const experiment_replication_A2 = experiment_replication({
  trials: 1,
  name: 'experiment_replication_A2',
  data: trial_info.experiment_replication,
  pause: 2500,
  fix_duration: 2500,
});

// shows continuation of previous iteration
const fractal_view_2D_fractal = fractal_view({
	trials: 1,
	name: 'fractal_view_2D_fractal',
	data: trial_info.fractal_view_fractal,
});

// shows iteration
const experiment_replication_A2_fractal = experiment_replication({
  trials: 1,
  name: 'experiment_replication_A2_fractal',
  data: trial_info.experiment_replication_fractal,
  pause: 2500,
  fix_duration: 2500,
});

// short blank screen
const blank_screen_short_A2 = blank_screen_short({
  trials: 1,
  name: 'blank_screen_A2',
  data: trial_info.blank_screen_short,
});

// longer blank screen
const blank_screen_long_A3 = blank_screen_long({
  trials: 1,
  name: 'blank_screen_A3',
  data: trial_info.blank_screen_long,
});


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
