// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const experiment_replication = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
      <h1 class='magpie-view-title'>
			Which is the correct continuation? </h1>
      <center>
       <span id="picture1"></span>
       <span id="picture2"></span>
      </div>
			`);

      //const stringPic1 = image_list[CT].p2;

      var imageArray = [continuation_list[CT].p1, continuation_list[CT].p2, continuation_list[CT].p3, continuation_list[CT].p4, continuation_list[CT].p5]

      var i = 0;

      var img1 = document.createElement("img");

      img1.src = imageArray[0];//"images/correct_continuation.png";
      img1.height = "300";
      img1.width = "300";
      var src1 = document.getElementById("picture1");
      src1.appendChild(img1);
      //setTimeout(function(){ alert("Hello"); }, 3000);
      //setTimeout(function(){println(i);},3000);
      i++;

      setTimeout(function(){
        img1.src = imageArray[1];
        img1.height = "300";
        img1.width = "300";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },1000);

      setTimeout(function(){
        img1.src = imageArray[2];
        img1.height = "300";
        img1.width = "300";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },2000);

      /*setTimeout(function(){
        img1.src = imageArray[3];
        img1.height = "300";
        img1.width = "300";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },3000); */




      setTimeout(function(){magpie.findNextView();},20000);
    }
  };
  // We have to return the view, so that it can be used in 05_views.js
  return view;
};

const fractal_view = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

			$("main").html(`<div class='magpie-view'>
			<h1 class='magpie-view-title'>
			Which is the correct continuation? </h1>
			<center>
         <div id="seq"></div>
			   <br />
			   <br />
         <center>
          <span id="pic1"></span>
          <span id="pic2"></span>
        </center>
			</center>
			<center>
				<button id="leftButton">LEFT!!!</button>
				<button id="rightButton">RIGHT!!!</button>
			</center>
			<center>
				<div id="left"></div>
				<div id="right"></div>
			</center>

			</div>
			`); // currently only specific pictures/fractals

      /* html save
        <img src="images/sequence.png" alt="Sequence">
      	<img id="choice1" src="images/correct_continuation.png" alt="choice1" width="300" height="300">
        <img id="choice2" src="images/incorrect_continuation.png" alt="choice2" width="300" height="300">
      */

			//js from here on
			/*setTimeout(function () {
			alert("If you feel ready to start the trial press OK or press ENTER. This task will then start automatically.");
    }, 1); */
			var curr_Date = new Date();
			var curr_Time = curr_Date.getTime();
			var button_pressed = 0;

			var trial_data = null;

      const stringSeq = image_list[CT].p1;
      const stringPic1 = image_list[CT].p2;
      const stringPic2 = image_list[CT].p3;

      // append images to html elements
      var img = document.createElement("img");
      img.src = stringSeq;//"images/sequence.png";
      img.height = "180";
      img.width = "600"
      var src = document.getElementById("seq");
      src.appendChild(img);

      var img1 = document.createElement("img");
      img1.src = stringPic1;//"images/correct_continuation.png";
      img1.height = "300";
      img1.width = "300";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      var img2 = document.createElement("img");
      img2.src = stringPic2;//"images/incorrect_continuation.png";
      img2.height = "300";
      img2.width = "300";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);

			// Variable to check for answer
			//var correctAnswer = null;



			 //Js for button click
			(function clickHandlerLeft() {
				//alert(HEY!);
				const button1 = document.getElementById("leftButton");
				button1.addEventListener("click", event => {
					//alert("button clicked"); //TESTING
					var d2 = new Date();
					var t2 = d2.getTime();
					var timeDifference = (t2 - curr_Time);
					var correctAnswer = false;

					document.getElementById("left").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					// get correct answer out of array
					var correctness_check = image_list[CT].answer;

					// save in variable
					if(correctness_check == "left"){
						correctAnswer = "correct";
					}

					// save data in trial_data
					let trial_data = {
						trial_name: config.name,
            pictureStim: stringSeq,
            picture1: stringPic1,
            picture2: stringPic2,
						participant_ID: participantID,
						trial_number: CT + 1,
						RT: timeDifference,
            key_pressed: correctness_check,
            question: "Which is the correct continuation?",
						correctness: correctAnswer
					};

					// push the data to the csv
					magpie.trial_data.push(trial_data);
					magpie.findNextView();
				});

			})();

			(function clickHandlerRight() {
				//alert(HEY!);
				const button2 = document.getElementById("rightButton");
				button2.addEventListener("click", event => {
					//alert("button clicked"); //TESTING
					var d3 = new Date();
					var t3 = d3.getTime();
					var timeDifference = (t3 - curr_Time);
					var correctAnswer = false;

					document.getElementById("right").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					//alert("1");
					// get correct answer out of array
					var correctness_check = image_list[CT].answer;

					//alert("2");
					// save in variable
					if(correctness_check == "right"){
						correctAnswer = "correct";
					}
					//alert("3");


					// save data in trial_data

					let trial_data = {
						trial_name: config.name,
            pictureStim: stringSeq,
            picture1: stringPic1,
            picture2: stringPic2,
						participant_ID: participantID,
						trial_number: CT + 1,
						RT: timeDifference,
            key_pressed: correctness_check,
            question: "Which is the correct continuation?",
						correctness: correctAnswer
					};
					//alert("4");

					// push the data to the csv
					magpie.trial_data.push(trial_data);
					magpie.findNextView();
					//alert("5");
				});

			})();


			/*
			if(button_pressed!=0){
				alert("You have reached the end!");
				//magpie.trial_data.push(trial_data);
				magpie.findNextView();
			} */


			/*// do I need that?
			function show_bias_image(src, width, height, alt) {
				var img = document.createElement("img");
				img.src = src;
				img.width = width;
				img.height = height;
				img.alt = alt;
				document.body.appendChild(img);
			}*/

			// PUT THIS INTO FUNCTIONS?


        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
