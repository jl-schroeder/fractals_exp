// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            //_.sample([[forced_choice_preQ, key_press_first_one],[fractal_view_instruction, key_press_first_two]]),
            //_.shuffle(loop([forced_choice_preQ, key_press_first_one],1), loop([fractal_view_instruction, key_press_first_two],1)),
            //_.shuffle( loop([key_press_first_one_comp_3, key_press_first_two_comp_3],1),loop([key_press_second_one_comp_4, key_press_second_two_comp_4],1) ),
            instructions,
            //fractal_view_2D, //TESTING
            forced_choice_preQ,
            ///
            //key-press first test
            key_press_instruction,
            key_press_testTrial,
		        key_press_instruction_post_test,
            // 1
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 2
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 3
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 4
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 5
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 6
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 7
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 8
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 9
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
            // 10
            _.sample([[key_press_first_one_comp_3, key_press_first_two_comp_3],[key_press_first_one_comp_4, key_press_first_two_comp_4]]),
              ///
            fractal_view_instruction,
            ///1
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///2
            experiment_replication_A2,
            blank_screen_long_A3,
			      fractal_view_2D,
            blank_screen_short_A2,
            ///3
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///4
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///5
            experiment_replication_A2_fractal,
            blank_screen_long_A3,
            fractal_view_2D_fractal,
            blank_screen_short_A2,
            ///6
            experiment_replication_A2_fractal,
            blank_screen_long_A3,
            fractal_view_2D_fractal,
            blank_screen_short_A2,
            ///7
            experiment_replication_A2_fractal,
            blank_screen_long_A3,
            fractal_view_2D_fractal,
            blank_screen_short_A2,
            ///8
            experiment_replication_A2_fractal,
            blank_screen_long_A3,
            fractal_view_2D_fractal,
            blank_screen_short_A2,
            ///
            second_key_press_instruction,
            // 1
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 2
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 3
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 4
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 5
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 6
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 7
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 8
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 9
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),
            // 10
            _.sample([[key_press_second_one_comp_3, key_press_second_two_comp_3],[key_press_second_one_comp_4, key_press_second_two_comp_4]]),

            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "1",
            serverAppURL: "https://fractalsexpserver.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "janlschroede@uni-osnabrueck.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
				        //image_selection_2B.name,
                //key_press_first_one.name,
                //key_press_first_two.name,
                key_press_testTrial.name,
                key_press_first_one_comp_3.name,
                key_press_first_two_comp_3.name,
                key_press_first_one_comp_4.name,
                key_press_first_two_comp_4.name,
                key_press_second_one_comp_3.name,
                key_press_second_two_comp_3.name,
                key_press_second_one_comp_4.name,
                key_press_second_two_comp_4.name,
                key_press_second_one.name,
                key_press_second_two.name,
                fractal_view_2D.name,
                experiment_replication_A2.name,
                fractal_view_2D_fractal.name,
                experiment_replication_A2_fractal.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }
    });
});
