

// App Main Controller
// ========================
// ========================



    $(document).on("click","#reset",function() {
// hide all other actions
		reset_to_user_options();

	});


$("#relating_time").click();



$(document).on("click",".relevance",function(){


});



  $(document).on("click",".prompt_buttons",function() {
	
		$(this).parent().hide();
    // $("#action_area").scrollTop($(this).parent().next().offset().top + $('#action_area').offset().top);
    // // $(this).parent().next() // this is the next div container.
    // return false; // prevent anchor



});



// #Goals Controller
// ========================
// ========================

  $(document).on("click",".tool",function() {
// hide all other actions
		$(".action").hide();
		// show this action
		$("."+ this.id ).show();
		$(".prompt").show();


	});



 $(document).on("click",".note_field_trigger",function() {
// hide all other actions
		$(this).siblings(".note_field").toggle().focus();
		
		// show this action
	});

// switch to tools mode



  $(document).on("click",".goal, .habit, .inquiry",function() {
// hide all other actions
		console.log("id");
		console.log("======");
		var this_index = ((Number($(this).find("#item_index").text()))-1)
		console.log(this_index);
		var this_item = (goals["tools"][this_index])
		console.log(this_item);


		$(".action").hide();
		// show this action
		$(".goals_action").show();  
		var title = this_item.title;  
		var body = this_item.subtitle; 
		var goal_intent = this_item.intent; 
		console.log("this id:");
		console.log("========");
		console.log(this.id);
		var action_id = this.id; 
		user_options.visibility = action_id;
		console.log("user options:");
		console.log(user_options.visibility);
		$(".title:visible").text(title); 
		$(".title:visible").next().text(action_id); 
		$(".body:visible").text(body); 
		$(".goal_intent:visible").text(goal_intent); 
		// console.log($(this).getProp("id");
// filter log to context
		$("#journal_area").children().hide();
		$("#journal_area").children('.'+ action_id).show();
		user_options.visibility = (action_id)

	});



  $(document).on("click",".context",function() {


// hide all other actions
		// console.log("id");
		// console.log("======");
		var this_index = ((Number($(this).find("#item_index").text()))-1)
		// console.log(this_index);
		var this_item = (goals["tools"][this_index])
		// console.log(this_item);
		console.log(this_item.links);
		console.log("this_item.association_tag: ");
		console.log(this_item.association_tag);


		// show only relevant tools

		// hide all tools
		$("#tools_area").children().hide();
		$("#goals_area").children().hide();
		
		// console.log($(this).find("#item_index").text());
		// $("#tools_area").children("").hide();
		// $("#goals_area").children().hide();

// show items one at a time based on the links associated with that item

		for ( i = 0 ; i < this_item.links.length ; i ++ ) {
			// console.log(this_item.links[i]);
			// // get the id of the item
			// var id_of_item_to_show = this_item.links[i];
			// var id_of_item_in_data = (goals["tools"][id_of_item_to_show]["id"]);
			$("#tools_area").children("#"+this_item.links[i]).show();
			$("#goals_area").children("#"+this_item.links[i]).show();

	
		}

		// improved method, show items by triggering the association links 
		// they are tagged with
			$("#tools_area").children("."+this_item.association_tag).show();
			$("#goals_area").children("."+this_item.association_tag).show();

	});



// find an object in the data

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}



  $(document).on("click",".state",function() {
// hide all other actions

// get the id of the thing ( done )
// find that id in storage ( done )
// find the index of the prompt ( done )
// find whether there is a next index ( done )
// if there is, update the field with its content
// if there is not, render the field with the first context
// find the next index if it exists

		var id_of_this = $(this).find('#item_index').text();
		// console.log("id of this: "+ id_of_this);
		var index_of_item_to_be_found = Number(id_of_this) - 1;
		var options = goals["tools"][index_of_item_to_be_found]["subtitle_options"]
		// console.log( goals["tools"][index_of_item_to_be_found]["subtitle_options"] );
		// find the index of the item your showing
		// console.log("contents are: "+ $(this).find(".subtitle").text());

		var current_item = options.indexOf($(this).find(".subtitle").text())
		// console.log("current index:   " + current_item);
		// console.log("index max of these: " + (options.length - 1));
		// console.log("current item + 1 , or next index is ");
		// console.log(current_item + 1);
		// if the array is longer then the current item index , then show the next index
		if ( current_item + 1 <  options.length ){
			// console.log(current_item + " is less then " + options.length);
			var next_item = options[ current_item + 1 ];
		}else {
			// console.log(current_item + " is more then " + options.length);
			console.log("resetting");

			var next_item = options[0]
		}
			// console.log( "next item is " + next_item );
			$(this).find(".subtitle").text(next_item);


		// console.log( data_log["data"][id] ) ;
		
// 		$(".action").hide();
// 		// show this action
// 		$(".goals_action").show();  
// 		var title = $(this).children().first().text();  
// 		var body = $(this).children().first().next().text(); 
// 		var goal_intent = $(this).find('.goal_intent').text(); 
// 		console.log("this id:");
// 		console.log(this.id);
// 		var action_id = this.id; 
// 		user_options.visibility = action_id;
// 		console.log("user options:");
// 		console.log(user_options.visibility);
// 		$(".title:visible").text(title); 
// 		$(".title:visible").next().text(action_id); 
// 		$(".body:visible").text(body); 
// 		$(".goal_intent:visible").text(goal_intent); 
// 		// console.log($(this).getProp("id");
// // filter log to context
// 		$("#journal_area").children().hide();
// 		$("#journal_area").children('.'+ action_id).show();
// 		user_options.visibility = (action_id)

	});



  $(document).on("click","#looping",function() {
// hide all other actions
		
		var action_id = this.id; 
		user_options.visibility = action_id;
		 
		$(".title:visible").next().text(action_id); 

		$("#journal_area").children('.'+ action_id).show();
		user_options.visibility = (action_id);

	});




  $(document).on("click",".tool",function() {
// hide all other actions
		
		
		var action_id = this.id; 
		user_options.visibility = action_id;
		console.log("action id:");
		console.log(user_options.visibility);
		$("#journal_area").children().hide();
		$("#journal_area").children('.'+ action_id + "_tag").show();
		// console.log("attempting to show just these:");
		// console.log('.'+ action_id);
		user_options.visibility = (action_id)

	});



// looping controller options
// intilize... set the thing up
// connect to memory
// connect to the present
// controls


function initialize_looping(){


  		// get the topic 
		$("#fixed_attention_item").show();

		// set the title to this topic
		$(".prompt_title:visible").text("Identify where your attention is fixed");
		// set the next prompt message
		$(".prompt_subtitle:visible").text("See where your attention is fixed and write it here.");

		// process is at the first step
		$("#step_of_process").text("1"); 
		// hide the 'add a note option'
		$("#note_area_trigger").hide();
		// show the note field
		$(".note_field").show();
		$("#fixed_attention_notes").show();

}

function looping_connect_to_memory(){
  	var topic =  $("#fixed_attention_item").val();
  			$("#fixed_attention_notes").show();
  
		// 3rd step of process
		$("#fixed_attention_item").hide();
		// show the note field
		$(".note_field").show();
		// hide the 'add a note option'
		$("#note_area_trigger").show();
		$(".prompt_subtitle:visible").text("Describe in detail the last memory that comes up of "+ topic +   " until your attention is all the way on it, then click next.");
		$("#step_of_process").text("2"); 
		$(".prompt_title:visible").text("Go to your memory").val();

}


function looping_connect_to_present(){
  	var topic =  $("#fixed_attention_item").val();  

  		$("#fixed_attention_notes").show();

		$(".prompt_title:visible").text("Attend to Right Now").val();
		$("#fixed_attention_item").hide();

		// show where the notes go
		$(".note_field").show();
		// process is at step 2
		$(".prompt_subtitle:visible").text("Describe something in the present moment until your attention is all the way here, then click the next button.");

				// hide the 'add a note option'
		$("#note_area_trigger").hide();
		$("#step_of_process").text("3") ;


}



  $(document).on("click","#next",function() {

  	var topic =  $("#fixed_attention_item").val();  

	if ( $("#step_of_process").text() == "1" ){
		// hide the note toggle button

		// as the first question and set it up

  		// get the topic 
		var val = $("#fixed_attention_item").val();
		// set the title to this topic
		$(".prompt_title:visible").text($("#fixed_attention_item").val());
		// set the next prompt message
		$(".prompt_subtitle:visible").text("Describe in detail the last memory that comes up of "+ topic +   " until your attention is all the way on it, then click next.");

		// process is at the first step
		$("#step_of_process").text("2"); 
		// show the note field
		$(".note_field").show();
				// hide the 'add a note option'
		$("#note_area_trigger").hide();
		$("#fixed_attention_item").hide()


	} else if ( $("#step_of_process").text() == "2" ){
	looping_connect_to_present();	

	} else {
		
	looping_connect_to_memory();

	}


	});



  $(document).on("click",".start_over",function() {



  	initialize_looping();

	});


// toggle columns on and off

  $(document).on("click","#toggle_TOOLS",function() {
// hide all other actions
	$("#tools_col").toggle();
	});

  $(document).on("click","#toggle_ACTION",function() {
// hide all other actions
	$("#act_col").toggle();
	});

  $(document).on("click","#toggle_JOURNAL",function() {
// hide all other actions
	$("#journal_col").toggle();
	});



  $(document).on("click","#toggle_FEED",function() {
// hide all other actions
	$("#feed_col").toggle();
	});





  $(document).on("click","#toggle_CONTEXT",function() {
// hide all other actions
	$("#context_col").toggle();
	});







 $(document).on("click",".minimize_journal_items",function() {

	});

// switch to goals mode


// set default view, to be updated if I want to save this to local storage
var user_mode = 'tools';




// when you click each filter,  show all of type in the journal log

 $(document).on("click",".show_tools_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".tools_tag").show();
		// show this action

	});


 $(document).on("click",".show_habits_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".habits_tag").show();
		// show this action

	});


 $(document).on("click",".show_context_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".context_tag").show();
		// show this action

	});

 $(document).on("click",".show_state_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".state_tag").show();
		// show this action

	});


 $(document).on("click",".show_inquiries_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".inquiries_tag").show();
		// show this action

	});


 $(document).on("click",".show_goals_logs",function() {
// hide all other actions
		$("#journal_area").children(".log").hide();
		$(".goals_tag").show();
		// show this action

	});





function hide_tools_and_goals(){
	$("#goals_area").children().hide();
	$("#tools_area").children().hide();	
}
 $(document).on("click",".trigger_tools_view",function() {
		// hide all other actions
		hide_tools_and_goals();
		$("#tools_area").children(".tool").show();
		$("#goals_area").children(".tool").show();
		$("#tool_menu_title").text('Tools');
		user_mode = 'tools';

		// set up the filter button to show only this type of journal item
		$("#journal_selector").css("class", "text-muted menu_button pull-right show_tools_logs");
		$("#journal_selector").text( "/ Tools");

	});

 $(document).on("click",".trigger_habits_view",function() {
// hide all other actions
		hide_tools_and_goals();
		$("#tools_area").children(".habit").show();
		$("#goals_area").children(".habit").show();
		$("#tool_menu_title").text('Habits');
		user_mode = 'habits';

		// set up the filter button to show only this type of journal item
		$("#journal_selector").css("class", "text-muted menu_button pull-right show_habits_logs");
		$("#journal_selector").text( "/ Habits");
	});


//  $(document).on("click",".trigger_contexts_view",function() {
// // hide all other actions
// 		$(".goal").hide();
// 		$(".item").hide();
// 		$(".tool").hide();
// 		$(".inquiry").hide();
// 		$(".habit").hide();
// 		$(".context").show();
// 		$("#tool_menu_title").text('Contexts');
// 		user_mode = 'contexts';
// 		// show this action


// 		// set up the filter button to show only this type of journal item
// 		$("#journal_selector").css("class", "text-muted menu_button pull-right show_context_logs");
// 		$("#journal_selector").text( "/ Contexts");
// 	});


// function trigger_states_view(){
// 	// hide all other actions
// 		hide_tools_and_goals();

// 		// $(".goal").hide();
// 		// $(".item").hide();
// 		// $(".tool").hide();
// 		// $(".inquiry").hide();
// 		// $(".habit").hide();
// 		// $(".context").hide();
// 		// $("#goals_area").children(".state").show();
// 		$("#tool_menu_title").text('States');
// 		user_mode = 'states';
// 		// show this action


// 		// set up the filter button to show only this type of journal item
// 		$("#journal_selector").css("class", "text-muted menu_button pull-right show_states_logs");
// 		$("#journal_selector").text( "/ States");
// }


 // $(document).on("click",".trigger_states_view",function() {
 // 		trigger_states_view();
	// });




  $(document).on("click",".trigger_goals_view",function() {
// hide all other actions
		hide_tools_and_goals();

		$(".menu_button").show();

		$(".item").hide();
		$(".inquiry").hide();
		$(".tool").hide();
		$("#tools_area").children(".goal").show();
		$("#goals_area").children(".goal").show();
		$("#tool_menu_title").text('Goals');
		user_mode = 'goals';
		// show this action


		// set up the filter button to show only this type of journal item
		$("#journal_selector").css("class", "text-muted menu_button pull-right show_goals_logs");
		$("#journal_selector").text( "/ Goals");
	});




  $(document).on("click",".trigger_inquiries_view",function() {
// hide all other actions
		$(".menu_button").show();

		hide_tools_and_goals();

		// $(".tool").hide();
		// $(".item").hide();
		// $(".goal").hide();
		$("#tools_area").children(".inquiry").show();
		$("#goals_area").children(".inquiry").show();
		$("#tool_menu_title").text('Inquiries');
		user_mode = 'inquiries';
		// show this action


		// set up the filter button to show only this type of journal item
		$("#journal_selector").css("class", "text-muted menu_button pull-right show_inquiry_logs");
		$("#journal_selector").text( "/ Inquiries");
	});



	

// #Journal Controller
// ========================
// ========================

  $(document).on("click","#show_all_journal_items",function() {
			$("#journal_area").children().show();

	});








// clarify what the user options are so you can store the data and retrieve it

  var user_options = {
  	visibility: "all"
  }

// reset user options function
  var reset_to_user_options = function(){
  	// journal item aspect
  	console.log("checking user options mode: showing " + user_options.visibility + 
  	" items");
  	if (user_options.visibility = "all" ){
  		$("#journal_area").children().show();
  	} else {
  		$(".prompt").hide();
		$("." + user_options.visibility).show();
  	}
  }	


// #Action Controller
// ========================
// ========================


$(document).on("click",".goal_progress_trigger",function() {
	// show the field
	$(".goal_progress_checkin_area").toggle();
	});
$(document).on("click",".goal_challenge_trigger",function() {
	// show the field
	$(".goal_challenge_checkin_area").toggle();
	});
$(document).on("click",".goal_reconsideration_trigger",function() {
	// show the field
	$(".goal_reconsideration_checkin_area").toggle();
	});
$(document).on("click",".goal_inquiry_trigger",function() {
	// show the field
	$(".goal_inquiry_checkin_area").toggle();
	});
$(document).on("click",".goal_check_in_trigger",function() {
	// show the field
	$(".goal_checkin_area").toggle();
	});
$(document).on("click",".goal_advice_trigger",function() {
	// show the field
	$(".goal_advice_checkin_area").toggle();
	});




// old



// // Triggers for 
// $(".goal_progress_trigger").on('click',function()
// {
//    $(".goal_progress_checkin_area").toggle();
// });
// $(".goal_challenge_trigger").on('click',function()
// {
//    $(".goal_challenge_checkin_area").toggle();
// });
// $(".goal_reconsideration_trigger").on('click',function()
// {
//    $(".goal_reconsideration_checkin_area").toggle();
// });

// $(".goal_inquiry_trigger").on('click',function()
// {
//    $(".goal_inquiry_checkin_area").toggle();
// });
// $(".goal_check_in_trigger").on('click',function()
// {
//    $(".goal_checkin_area").toggle();
// });


// $(".goal_advice_trigger").on('click',function()
// {
//    $(".goal_advice_checkin_area").toggle();
// });





















