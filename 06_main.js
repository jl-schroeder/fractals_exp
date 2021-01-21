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
            instructions,
            forced_choice_preQ,
            fractal_view_instruction,
            ///
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///
            experiment_replication_A2,
            blank_screen_long_A3,
			      fractal_view_2D,
            blank_screen_short_A2,
            ///
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///
            experiment_replication_A2,
            blank_screen_long_A3,
            fractal_view_2D,
            blank_screen_short_A2,
            ///
            //key_press_iteration,
            //fractal_continuation,
		        //fractal_instruction,
		        //image_selection_2B,
		        key_press_instruction,
            key_press_testing,
            after_key_Press_testing,
		        key_press_2C,
			// _.shuffle([task1, task2]), for shuffling tasks
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
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
                key_press_2C.name,
				        image_selection_2B.name,
                fractal_view_2D.name,
                experiment_replication_A2.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }
    });
});
