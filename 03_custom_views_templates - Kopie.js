// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const blank_screen_short = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
    `);


    setTimeout(function(){magpie.findNextView();},2000);
    }
  };
  return view;
};


const blank_screen_long = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
    `);


    setTimeout(function(){magpie.findNextView();},4000);
    }
  };
  return view;
};

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


      var imageArray = [continuation_list[CT].p1, continuation_list[CT].p2, continuation_list[CT].p3, continuation_list[CT].p4, continuation_list[CT].p5, continuation_list[CT].p6]

      var i = 0;

      var img1 = document.createElement("img");

      img1.src = continuation_list[CT].p1;//imageArray[0];//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("picture1");
      src1.appendChild(img1);
      //setTimeout(function(){ alert("Hello"); }, 3000);
      //setTimeout(function(){println(i);},3000);
      i++;

      setTimeout(function(){
        img1.src = continuation_list[CT].p2;//imageArray[1];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },3000);

      setTimeout(function(){
        img1.src = continuation_list[CT].p3;//imageArray[2];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },6000);

      if(continuation_list[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_list[CT].p4;
          img1.height = "550";
          img1.width = "550";
          var src1 = document.getElementById("picture1");
          src1.appendChild(img1);
        },9000);
      }



      if(continuation_list[CT].p4 != null){
        setTimeout(function(){magpie.findNextView();},12000);
      } else {
        setTimeout(function(){magpie.findNextView();},9000);
      }

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

			$("main").html(`<div class='magpie-view' style="float:center;">
			<h1 class='magpie-view-title'>
			   Which is the correct continuation?
      </h1>
			<div style="float:left; display:flex;">
        <span id="pic1"></span>
        <span id="pic2"></span>
      </div>
			<center>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
			</center>
			<center>
				<div id="left"></div>
				<div id="right"></div>
			</center>

			</div>
			`); // currently only specific pictures/fractals

			var curr_Date = new Date();
			var curr_Time = curr_Date.getTime();
			var button_pressed = 0;

			//var trial_data = null;

      var stringPic1 = continuation_list[CT].p5;
      var stringPic2 = continuation_list[CT].p6;


      var img1 = document.createElement("img");
      img1.src = stringPic1;//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      var img2 = document.createElement("img");
      img2.src = stringPic2;//"images/incorrect_continuation.png";
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);


      var type_of_foil = "NA";

			 //Js for button click
			(function clickHandlerLeft() {
				//alert(HEY!);
				const button1 = document.getElementById("leftButton");
				button1.addEventListener("click", event => {
					//alert("left button clicked"); //TESTING
					var d2 = new Date();
					var t2 = d2.getTime();
					var timeDifference = (t2 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("left").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					// get correct answer out of array
					var correctness_check = continuation_list[CT].answer;

          //
          type_of_foil == "NA";

					// save in variable
					if(correctness_check == "left"){
						correctAnswer = "correct";
            //console.log(correctAnswer); //TESTING
          }

          //check type of foil
          if(correctness_check == "left"){
            type_of_foil = assessFoil(stringPic2);
          } else {
            type_of_foil = assessFoil(stringPic1);
          }

          var reactionTimeString = timeDifference.toString()

          pic1data = stringPic1.replace("images/Generated_Pictures/","");
          pic2data = stringPic2.replace("images/Generated_Pictures/","");

					// save data in trial_data
          let trial_data = {
						trial_name: config.name,
            picture1: pic1data,
            picture2: pic2data,
						participant_ID: participantID,
						trial_number: CT + 1,
						RT: timeDifference,
            key_pressed: correctness_check,
            foil_Type: type_of_foil,
            question: "Which is the correct continuation?",
						correctness: correctAnswer
					};



					// push the data to the csv
					magpie.trial_data.push(trial_data);
					magpie.findNextView();
				});

			})();

			(function clickHandlerRight() {
				//alert("Hey righty!");
				const button2 = document.getElementById("rightButton");
				button2.addEventListener("click", event => {
					//alert("right button clicked"); //TESTING
					var d3 = new Date();
					var t3 = d3.getTime();
					var timeDifference = (t3 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("right").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					//alert("1");
					// get correct answer out of array
					var correctness_check = continuation_list[CT].answer;

					//alert("2");
					// save in variable
					if(correctness_check == "right"){
						correctAnswer = "correct";
            //console.log(correctAnswer); //TESTING
          }

          type_of_foil == "NA";
          //check type of foil
          if(correctness_check == "right"){
            type_of_foil = assessFoil(stringPic1);
          } else {
            type_of_foil = assessFoil(stringPic2);
          }
					//alert("3");

          var reactionTimeString = timeDifference.toString()

          pic1data = stringPic1.replace("images/Generated_Pictures/","");
          pic2data = stringPic2.replace("images/Generated_Pictures/","");

					// save data in trial_data
          let trial_data = {
            trial_name: config.name,
            picture1: pic1data,
            picture2: pic2data,
            participant_ID: participantID,
            trial_number: CT + 1,
            RT: timeDifference,
            key_pressed: correctness_check,
            foil_Type: type_of_foil,
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

        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

////////////////////////////////////////////////////////// FRACTAL_

const experiment_replication_fractal = function(config) {
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


      var imageArray = [continuation_list_fractal[CT].p1, continuation_list_fractal[CT].p2, continuation_list_fractal[CT].p3, continuation_list_fractal[CT].p4, continuation_list_fractal[CT].p5, continuation_list_fractal[CT].p6]

      var i = 0;

      var img1 = document.createElement("img");

      img1.src = continuation_list_fractal[CT].p1;//imageArray[0];//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("picture1");
      src1.appendChild(img1);
      //setTimeout(function(){ alert("Hello"); }, 3000);
      //setTimeout(function(){println(i);},3000);
      i++;

      setTimeout(function(){
        img1.src = continuation_list_fractal[CT].p2;//imageArray[1];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },3000);

      setTimeout(function(){
        img1.src = continuation_list_fractal[CT].p3;//imageArray[2];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },6000);

      if(continuation_list_fractal[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_list_fractal[CT].p4;
          img1.height = "550";
          img1.width = "550";
          var src1 = document.getElementById("picture1");
          src1.appendChild(img1);
        },9000);
      }



      if(continuation_list_fractal[CT].p4 != null){
        setTimeout(function(){magpie.findNextView();},12000);
      } else {
        setTimeout(function(){magpie.findNextView();},9000);
      }

    }
  };
  // We have to return the view, so that it can be used in 05_views.js
  return view;
};

const fractal_view_fractal = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

			$("main").html(`<div class='magpie-view' style="float:center;">
			<h1 class='magpie-view-title'>
			   Which is the correct continuation?
      </h1>
			<div style="float:left; display:flex;">
        <span id="pic1"></span>
        <span id="pic2"></span>
      </div>
			<center>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
			</center>
			<center>
				<div id="left"></div>
				<div id="right"></div>
			</center>

			</div>
			`); // currently only specific pictures/fractals

			//js from here on

			var curr_Date = new Date();
			var curr_Time = curr_Date.getTime();
			var button_pressed = 0;

			//var trial_data = null;

      var stringPic1 = continuation_list_fractal[CT].p5;
      var stringPic2 = continuation_list_fractal[CT].p6;

      var img1 = document.createElement("img");
      img1.src = stringPic1;//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      var img2 = document.createElement("img");
      img2.src = stringPic2;//"images/incorrect_continuation.png";
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);

      var type_of_foil = "NA";

			 //Js for button click
			(function clickHandlerLeft() {
				const button1 = document.getElementById("leftButton");
				button1.addEventListener("click", event => {

					var d2 = new Date();
					var t2 = d2.getTime();
					var timeDifference = (t2 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("left").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					// get correct answer out of array
					var correctness_check = continuation_list_fractal[CT].answer;

          //
          type_of_foil == "NA";

					// save in variable
					if(correctness_check == "left"){
						correctAnswer = "correct";
          }

          //check type of foil
          if(correctness_check == "left"){
            type_of_foil = assessFoil(stringPic2);
          } else {
            type_of_foil = assessFoil(stringPic1);
          }

          var reactionTimeString = timeDifference.toString()
					// save data in trial_data | Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).

          pic1data = stringPic1.replace("images/Generated_Pictures/","");
          pic2data = stringPic2.replace("images/Generated_Pictures/","");

					let trial_data = {
						trial_name: config.name,
            picture1: pic1data,
            picture2: pic2data,
						participant_ID: participantID,
						trial_number: CT + 1,
						RT: timeDifference,
            key_pressed: correctness_check,
            foil_Type: type_of_foil,
            question: "Which is the correct continuation?",
						correctness: correctAnswer
					};


					// push the data to the csv
					magpie.trial_data.push(trial_data);
					magpie.findNextView();
				});

			})();

			(function clickHandlerRight() {
				//alert("Hey righty!");
				const button2 = document.getElementById("rightButton");
				button2.addEventListener("click", event => {
					//alert("right button clicked"); //TESTING
					var d3 = new Date();
					var t3 = d3.getTime();
					var timeDifference = (t3 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("right").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					//alert("1");
					// get correct answer out of array
					var correctness_check = continuation_list_fractal[CT].answer;

					//alert("2");
					// save in variable
					if(correctness_check == "right"){
						correctAnswer = "correct";
            //console.log(correctAnswer); //TESTING
          }
          type_of_foil == "NA";
          //check type of foil
          if(correctness_check == "right"){
            type_of_foil = assessFoil(stringPic1);
          } else {
            type_of_foil = assessFoil(stringPic2);
          }
					//alert("3");

          var reactionTimeString = timeDifference.toString()
					// save data in trial_data

          pic1data = stringPic1.replace("images/Generated_Pictures/","");
          pic2data = stringPic2.replace("images/Generated_Pictures/","");

					let trial_data = {
						trial_name: config.name,
            picture1: pic1data,
            picture2: pic2data,
						participant_ID: participantID,
						trial_number: CT + 1,
						RT: timeDifference,
            key_pressed: correctness_check,
            foil_Type: type_of_foil,
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

        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

////////////////////////////////////////////////////////// Test-trial

const experiment_replication_TT = function(config) {
  const view = {
    name: config.name,
    CT:0,
    trials: config.trials,
    render: function(CT, magpie) {
      $("main").html(`<div class='magpie-view'>
      <h1 class='magpie-view-title'>
		Which is the correct continuation? - TEST TRIALS!</h1>
      <center>
       <span id="picture1"></span>
       <span id="picture2"></span>
      </div>
			`);

      //continuation_list = shuffle(continuation_list);
      var imageArray = [continuation_test_list[CT].p1, continuation_test_list[CT].p2, continuation_test_list[CT].p3, continuation_test_list[CT].p4, continuation_test_list[CT].p5, continuation_test_list[CT].p6]

      var i = 0;

      var img1 = document.createElement("img");

      img1.src = continuation_test_list[CT].p1;//imageArray[0];//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("picture1");
      src1.appendChild(img1);
      //setTimeout(function(){ alert("Hello"); }, 3000);
      //setTimeout(function(){println(i);},3000);
      i++;

      setTimeout(function(){
        img1.src = continuation_test_list[CT].p2;//imageArray[1];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },3000);

      setTimeout(function(){
        img1.src = continuation_test_list[CT].p3;//imageArray[2];
        img1.height = "550";
        img1.width = "550";
        var src1 = document.getElementById("picture1");
        src1.appendChild(img1);
      },6000);

      if(continuation_test_list[CT].p4 != null){
        setTimeout(function(){
          img1.src = continuation_test_list[CT].p4;
          img1.height = "550";
          img1.width = "550";
          var src1 = document.getElementById("picture1");
          src1.appendChild(img1);
        },9000);
      }



      if(continuation_test_list[CT].p4 != null){
        setTimeout(function(){magpie.findNextView();},12000);
      } else {
        setTimeout(function(){magpie.findNextView();},9000);
      }

    }
  };
  // We have to return the view, so that it can be used in 05_views.js
  return view;
};

const fractal_view_TT = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

			$("main").html(`<div class='magpie-view' style="float:center;">
			<h1 class='magpie-view-title'>
			   Which is the correct continuation? - TEST TRIALS!
      </h1>
			<div style="float:none; display:inline-flex;">
        <span id="pic1"></span>
        <span id="pic2"></span>
      </div>
			<center>
        <div style="padding: 50px; width: 400px; display: inline-block;"> <button id="leftButton">Left</button> </div>
        <div style="padding: 50px; width: 100px; display: inline-block;"> <button id="rightButton">Right</button> </div>
			</center>
			<center>
				<div id="left"></div>
				<div id="right"></div>
			</center>

			</div>
			`); // currently only specific pictures/fractals

			var curr_Date = new Date();
			var curr_Time = curr_Date.getTime();
			var button_pressed = 0;

			//var trial_data = null;

      var stringPic1 = continuation_test_list[CT].p5;
      var stringPic2 = continuation_test_list[CT].p6;

      var img1 = document.createElement("img");
      img1.src = stringPic1;//"images/correct_continuation.png";
      img1.height = "550";
      img1.width = "550";
      var src1 = document.getElementById("pic1");
      src1.appendChild(img1);

      var img2 = document.createElement("img");
      img2.src = stringPic2;//"images/incorrect_continuation.png";
      img2.height = "550";
      img2.width = "550";
      var src2 = document.getElementById("pic2");
      src2.appendChild(img2);



      var type_of_foil = "NA";

			 //Js for button click
			(function clickHandlerLeft() {
				//alert(HEY!);
				const button1 = document.getElementById("leftButton");
				button1.addEventListener("click", event => {
					//alert("left button clicked"); //TESTING
					var d2 = new Date();
					var t2 = d2.getTime();
					var timeDifference = (t2 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("left").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					// get correct answer out of array
					var correctness_check = continuation_test_list[CT].answer;

          //
          type_of_foil == "NA";

					// save in variable
					if(correctness_check == "left"){
						correctAnswer = "correct";
            //console.log(correctAnswer); //TESTING
          }

          //check type of foil
          if(correctness_check == "left"){
            type_of_foil = assessFoil(stringPic2);
          } else {
            type_of_foil = assessFoil(stringPic1);
          }

					magpie.findNextView();
				});

			})();

			(function clickHandlerRight() {
				//alert("Hey righty!");
				const button2 = document.getElementById("rightButton");
				button2.addEventListener("click", event => {
					//alert("right button clicked"); //TESTING
					var d3 = new Date();
					var t3 = d3.getTime();
					var timeDifference = (t3 - curr_Time);
					var correctAnswer = "false";

					document.getElementById("right").innerHTML = timeDifference.toString() + " ms";
					button_pressed = 1;

					//alert("1");
					// get correct answer out of array
					var correctness_check = continuation_test_list[CT].answer;

					//alert("2");
					// save in variable
					if(correctness_check == "right"){
						correctAnswer = "correct";
            //console.log(correctAnswer); //TESTING
          }

          type_of_foil == "NA";
          //check type of foil
          if(correctness_check == "right"){
            type_of_foil = assessFoil(stringPic1);
          } else {
            type_of_foil = assessFoil(stringPic2);
          }
					//alert("3");


					magpie.findNextView();
					//alert("5");
				});

			})();

        }
    };
    //continuation_list = shuffle(continuation_list);
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
