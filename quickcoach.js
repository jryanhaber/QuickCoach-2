// A $( document ).ready() block.
$( document ).ready(function() {




	var data = [];


// =============================== Template for Tools Menu
// ================================================================================



// Change it all for tools

var tools_template = "{{#tools}}<a  href='#' class='list-group-item item tool tags' id={{id}}><h4 class='list-group-item-heading sub-menu-trigger' id='' >{{title}}<span id='item_index' class='text-muted text-very-muted pull-right' > {{index}}</span></h4><p class='list-group-item-text text-muted subtitle'>{{subtitle}}</p></a>{{/tools}}{{resetIndex}}"

var tools =
{
  "tools": [



	{
	id: "daily_plan",
	tags: "daily_plan tools",
	title: "Every Day Actions",
	subtitle: "A list of the most effective habits to maintain every day to make a positive impact on your life long term."

		},

	{
	id: "weekly_planning",
	tags: "weekly_planning tools",
	title: "Weekly Planning",
	subtitle: "Plan your week every monday"

		},

	{
	id: "circling_after",
	tags: "circling_after tools",
	title: "After a Circle",
	subtitle: "See how you did"

},
		{
	id: "circling_before",
	tags: "circling_before tools",
	title: "Before a Circle",
	subtitle: "Prep your mind"

		},

	{
	id: "daily_planning",
	tags: "daily_planning tools",
	title: "Daily Planning",
	subtitle: "A process to quickly create a plan for the day that emphasizes deliberate leverage based, optimized productivity with an eye on the big picture."

		},



	{
	id: "gtd",
	tags: "gtd tools",
	title: "Implement your GTD",
	subtitle: "A quick run through of leveraging the GTD method to get at the big picture and orient yourself to productivity habits." ,
	regularity: 7 ,
	link:{
		href: "https://culturedcode.com/things/guide/",
		title: " - review the method"
	}

		},
{
	id: "choose_action",
	tags: "choose_action tools",
	title: "Choose Your Next Action",
	subtitle: "Use these 4 discernments to decide" ,
	regularity: 0 ,

		},
	{
	id: "productivity_1",
	tags: "productivity_1 tools",
	title: "Productivity Challenge 1",
	subtitle: "Test your values" ,
	regularity: 0 ,

},{
	id: "productivity_2",
	tags: "productivity_2 tools",
	title: "Productivity Challenge 2",
	subtitle: "Structure vs Deliberate focus and identifying the most effective thing" ,
	regularity: 0 ,

},
   {


	id: "byron_katie",
	tags: "byron_katie",
	person: true,
	title: "Byron Katies Inquiry",
	subtitle: "Question your painful thoughts and set yourself free" ,

     },{

	id: "looping",
	tags: "looping",
	person: true,
	title: "Releasing Fixed Attention",
	subtitle: "Release your fixed attention" ,

     }, {

	id: "self_actualization",
	tags: "self_actualization",
	person: true,
	title: "Self Actualization Check In",
	subtitle: "Bring your Own Development Into Awareness" ,

     },

     {
	id: "Money_mastery",
	tags: "Money_mastery tool",
	title: "Master Your Finances Check-in",
	subtitle: "What would it take to master your finances?"

	},




  ],
  index: function() {
        return ++window['INDEX']||(window['INDEX']=0);
    }
    , resetIndex: function() {
        window['INDEX']=null;
        return;
    }
}
var action_html = Mustache.to_html(tools_template, tools);

// testing this
$('#tools_area').html(action_html);


// goals


var goals_template = "{{#tools}}<div  href='#' class='list-group-item item {{tags}}' id='{{id}}'><h4 class='list-group-item-heading sub-menu-trigger' id='' >{{title}}<span id='item_index' class='text-muted text-very-muted pull-right' > {{index}}</span></h4><p  class='list-group-item-text text-muted subtitle'>{{subtitle}}<a class='text-muted link-text' href='{{link.href}}' >{{{link.title}}}</a></p><p class='goal_intent' style=' display:none;' >{{{intent}}}</p></div>{{/tools}}{{resetIndex}}"

var goals_html = Mustache.to_html(goals_template, goals);

$('#goals_area').html(goals_html);



// get just the contexts from the items list ( called the goals list )
var context_data = goals["tools"].filter(function(obj){
	return obj.tags.match( /context/g );
});

var contexts_template = "{{#tools}}<div  href='#' class='list-group-item  {{tags}}' id='{{id}}'><h4 class='list-group-item-heading' id='' >{{title}}<span id='item_index' class='text-muted text-very-muted pull-right' > {{index}}</span></h4><p  class='list-group-item-text text-muted subtitle'>{{subtitle}}<a class='text-muted link-text' href='{{link.href}}' >{{{link.title}}}</a></p><p class='goal_intent' style=' display:none;' >{{{intent}}}</p></div>{{/tools}}{{resetIndex}}"



var star= "<span style='color:grey;font-size:large;'class='pull-right relevance glyphicon glyphicon-lg glyphicon-star-empty'></span>"
var star_button_empty= "<span class='glyphicon glyphicon-star-empty'></span>"




var contexts_html = Mustache.to_html(contexts_template, goals);



$('#context_area').html(contexts_html);
$('#context_area').children().hide();
$('#context_area').children('.context').show();


// testing
// $("#journal_col").hide();




var contexts_template = "{{#context_data}}<div  href='#' class='list-group-item item {{tags}}' id='{{id}}'><h4 class='list-group-item-heading sub-menu-trigger' id='' >{{title}}<span id='item_index' class='text-muted text-very-muted pull-right' > {{index}}</span></h4><p  class='list-group-item-text text-muted subtitle'>{{subtitle}}<a class='text-muted link-text' href='{{link.href}}' >{{{link.title}}}</a></p><p class='goal_intent' style=' display:none;' >{{{intent}}}</p></div>{{/context_data}}{{resetIndex}}"



// =============================== END Template for Tools Menu
// ================================================================================


// =============================== Template for  Actions and thier Prompts
// ================================================================================
// Define how an action and its prompts be rendered

var actions_template = "{{#action}}<div class='list-group-item action {{tags}} form-group' style='display:none;' id={{id}}><h4 class='list-group-item-heading  sub-menu-trigger' id='' >{{title}}</h4><p style='display:none;' id='action_id'>{{id}}</p><p class='list-group-item-text text-muted '>{{subtitle}}{{{link.full}}}</p>{{{extras}}}<hr>{{#prompts}}<div class='prompt'><h4 class='prompt_title list-group-item-heading'  >" + star + "{{{title}}}</h4><span id='prompt_index' text-muted text-very-muted pull-right style='display:none;'> {{index}}</span><p class='list-group-item-heading text-muted prompt_subtitle'>{{{notes}}}{{question}}</p>{{{prompt_extras}}}<div class='btn-group prompt_buttons '>{{#options}}<button type='button' data-toggle='button' class='btn btn-default'>{{option}}</button>{{/options}}</div><p class= 'text-muted'><br>Add a <a class='note_field_trigger'>note</a><textarea rows='2' class='form-control note_field' style='display:none;'></textarea></p><p class='list-group-item-heading no_why text-muted'>{{{why}}}</p><p class='list-group-item-heading no_message text-muted' style='display:none;'>{{no_message}}</p><hr> </div>{{#questions}}<p class='list-group-item-heading '>{{title}}</p><textarea rows='4' class='list-group-item-text form-control' placeholder='{{title}}'>{{starter}}</textarea>{{/questions}}{{/prompts}}</div>{{/action}}{{resetIndex}}"



// dev story - I want to be able to create new custom fields in a matter of a couple of clicks, that generates a new type of module for journaling on, instead of being limited to the prior tools, and I want those tools to be saved in the database and rendered appropriately, so that, for example...

// create a new customizeable

var actions_template_custom = "<div class='list-group scrollable_wrapper' id='action_area'><div class='list-group-item action goals_action form-group' style='display:none;'' id=''><h4 class='list-group-item-heading title' id='' ></h4><p style='display:none;' id='action_id'>test</p><p class='list-group-item-text text-muted body' id='' ></p><p class='list-group-item-text text-muted goal_intent' id='' ></p><a id = 'action_link'></a><br><h4 class='list-group-item-heading text-muted' id='' >How is this going?</h4><h4 class='list-group-item-heading text-muted '>If you are ready to <a class='goal_check_in_trigger'>check in</a> on this please do.  Have you made <a class='goal_progress_trigger'>progress</a>?  Any <a class='goal_challenge_trigger'>challenges</a> in your way? Any <a class='goal_reconsideration_trigger'>reconsiderations</a> to make?  Ready for a new <a class='goal_inquiry_trigger'>Inquiry</a> for yourself?  Want to give yourself some <a class='goal_advice_trigger'>advice</a>?</h4><hr><textarea style='display:none;' rows='4' class='list-group-item-text  form-control check_in_area goal_checkin_area' placeholder='How is this going?'></textarea><textarea style='display:none;' rows='4' class='list-group-item-text  form-control goal_progress_checkin_area' placeholder='Progress?'></textarea><textarea style='display:none;' rows='4' class='list-group-item-text  form-control goal_challenge_checkin_area' placeholder='Challenges?'></textarea><textarea style='display:none;' rows='4' class='list-group-item-text  form-control goal_reconsideration_checkin_area' placeholder='Reconsiderations?'></textarea><textarea style='display:none;' rows='4' class='list-group-item-text  form-control goal_inquiry_checkin_area' placeholder='Inquiries?'></textarea><textarea style='display:none;' rows='4' class='list-group-item-text  form-control goal_advice_checkin_area' placeholder='What advice would you like to give yourself on this? Ex: I want you to ___ or do this __ or I want you to have ___ kind of experience, so do this ___..'></textarea><button class = 'btn btn-success check_in'>Add This </button></div></div>'"


// =============================== Data for Actions
// ================================================================================
// Store all the data for your actions





var action_html = Mustache.to_html(actions_template, actions);

$('#action_area').append(action_html);





// =============================== END Template for Actions
// ================================================================================




// =============================== Template for Data logging | Actions - Coaching Methods
// ================================================================================


var data_template = "{{#data}}<div class='list-group-item action {{tags}} form-group' style='display:none' id='{{id}}'><p class='text-muted sub-menu-trigger' id='' >{{{title}}}</p><p class='list-group-item-text '>{{{body}}}</p><hr>{{#questions}}<p class='list-group-item-heading '>{{title}}</p><{{/questions}}</div>{{/data}}{{resetIndex}}"






// =============================== Template for Data Logging | Journal Entry
// ================================================================================


var data_template_2 = "{{#data}}<div class='list-group-item journal_entry log  {{#tags}} {{.}}_tag{{/tags}} {{action_id}}'><p class='text-muted' >{{{title}}}  <span id='log_index' text-muted text-very-muted pull-right style='display:none;'> {{index}}</span> <a class='pull-right delete_me'>x</a><br>{{date}} {{extra}} || {{note}} </p>{{{no_message_title}}}<p class='list-group-item-text'>{{{subtitle}}}</p>{{why}}<br>{{#context}}<p class='list-group-item-text text-muted journal_why'><u>{{key}}</u><br></p><p class='text-muted text-muted-darker'> {{value}}</p>{{/context}}{{! delete this after a day }}{{#why}}<p class='list-group-item-text text-muted journal_why'><u>{{key}}</u><br></p><p class='text-muted text-muted-darker'> {{value}}</p>{{/why}}{{ ! end section to be deleted }}</div>{{/data}}{{resetIndex}}"





	$(".add").on("click", function(){

		// save all the textareas right here
		var x = ($(this).siblings().filter('textarea'));
		// create a temp array for the new item
		var newLog = [];
		for ( i = 0 ; i < x.length ; i ++ ){
			// create a mini array with the values of each in here
			newLog.push(x[i].value)
			// reset the form after each submission
			x[i].value = "";
			}
		// push the mini array into a larger array of data
		data.push(newLog);



var newHTML = [];
// for each journal entry, work one by one and do the followoing
for (var i = 0; i < data.length; i++) {
	// add to a temp array, the value of that data
    newHTML.unshift('</div>');
    newHTML.unshift('<div class="list-group-title">' + data[i][3] + '</div>');
    newHTML.unshift('<div class="list-group-title">' + data[i][2] + '</div>');
    newHTML.unshift('<div class="list-group-title">' + data[i][1] + '</div>');
    newHTML.unshift('<div class="list-group-title">' + data[i][0] + '</div>');
    newHTML.unshift('<div class="list-group-item journal_entry">');

}
$(".element").html(newHTML.join(""));
return data;


		})



function getDate(){
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();
	date = day + "/" + month + "/" + year;
	return date;
}

// Database local handler
//  - this handles all posts to the database, currently stored locally as a json object.  The NO command is for coaching, the SUBMIT command is for money, need to implement something for checking in on goals that tracks the goal associated ...
 // goal function, check in on goal, grabs type of check in, information in input fields, stores to database, updates view, but also captures goal name as tag so that it can show just updates on those goals later. .





// When NO button is clicked, add corresponding coaching to the relationship check...
  $(document).on("click","button",function() {
// hide all other actions




function show_item_index_values(){
	// change this to show them
	var show_index_values = false;
	if ( show_index_values ){
		$("#item_index").show();

	}else {
		$("#item_index").hide();
	}

}

show_item_index_values();


function log_and_render_view(){

			console.log(new_data_item);
			// store the info in the local js data block
			data_log["data"].unshift(new_data_item);
			// update local storage
			localStorage.setItem('data', JSON.stringify(data_log));
			// generate the new journal rendering
			var data_logger = Mustache.to_html(data_template_2, data_log);
			// update the view
			$('#journal_area').html(data_logger);
		    // reset the value of the note field
		    note_field = "";

			return data_log;
}

// if its a continue button
		if ( $(this).text() == "Continue" ) {
			// and if you made a note
			if ( $(this).parent().parent().find(".note_field").val() != "") {
				// grab that data
				var note_field = $(this).parent().parent().find(".note_field").val();
				console.log(note_field);
				// grab the title
				var title= $(this).parent().parent().find('h4').text();
				console.log(title);
				getDate();
				var new_data_item = {
				title: title,
				action_id: user_options.visibility,
				tags: [user_options.visibility,user_mode],
				date: date,
				note: note_field

			}
			console.log("new data item created");
			console.log(new_data_item);
			log_and_render_view();
			};



		} else

// !!! if theres text in the note field, capture it and log it, and otherwise do nothing

		if ( $(this).text() == "No") {
			var title= $(this).parent().parent().find('h4').text();
			var body = $(this).parent().parent().find(".no_message").text();
			var why = $(this).parent().parent().find(".no_why").text();
			var note_field = $(this).parent().parent().find(".note_field").val();
			console.log(note_field);

			// if this is about a person, grab the persons name
			if ( $(this).parent().parent().find(".relationship_check") )
				{
					var extra = $(".identity:visible").val();
				};
			getDate();

			var new_data_item = {
				title: title,
				subtitle: body,
				why: why,
				extra: extra,
				date: date,
				note: note_field,
				tags: [user_options.visibility, user_mode]

			}


			// capture item, store, reset the view

			console.log(new_data_item);
			// store the info in the local js data block
			data_log["data"].unshift(new_data_item);
			// update local storage
			localStorage.setItem('data', JSON.stringify(data_log));
			// generate the new journal rendering
			var data_logger = Mustache.to_html(data_template_2, data_log);
			// update the view
			$('#journal_area').html(data_logger);
		    // reset the value of the note field
		    note_field = "";

			return data_log;
		}	else if ( $(this).text() == "Yes" || $(this).text() == "Somewhat" ) {

// if its a yes or somewhat button and there is a note in the field, then log that note and the context


			if ( $(this).parent().parent().find(".note_field").val() !== "" ){


				var title= $(this).parent().parent().find('h4').text();

				// do not grab the no data
				var body = "";
				var why = $(this).parent().parent().find(".no_why").text();
				var note_field = $(this).parent().parent().find(".note_field").val();
				console.log(note_field);

				// if this is about a person, grab the persons name
				if ( $(this).parent().parent().find(".relationship_check") )
					{
						var extra = $(".identity:visible").val();
					};
				getDate();

				var new_data_item = {
					title: title,
					subtitle: body,
					why: why,
					extra: extra,
					date: date,
					note: note_field,
					tags: [user_options.visibility, user_mode]

				};


				// capture item, store, reset the view

				console.log(new_data_item);
				// store the info in the local js data block
				data_log["data"].unshift(new_data_item);
				// update local storage
				localStorage.setItem('data', JSON.stringify(data_log));
				// generate the new journal rendering
				var data_logger = Mustache.to_html(data_template_2, data_log);
				// update the view
				$('#journal_area').html(data_logger);
			    // reset the value of the note field
			    note_field = "";

				return data_log;



			};


		}




		// make adjustments for money situations...
		else if ( $(this).text() == "Submit") {
			var title= $(this).parent().parent().find('h4').text();
			var money_status = $(".money:visible").val();
			console.log(money_status);
			if ( money_status < 4000 ){
				var body = "You are critically low on funds.  Immediately handle this."
				var why = "You are in the financial danger zone, and failure to provide for yourself will harm your life in many directions.  Your reward to motivate you, is that when you are above 1k you will get to date and to take on learning.  Enjoy the work and learn while you are going for it. "

			} else if ( money_status >= 4000 ) {
				var body = "Congrats, you have over $1,000 in the bank, you can focus on your goals and dreams, coding, web dev, people dev."
				var why = "You are out of the financial danger zone, reward yourself."
			}


			if ( $(this).parent().parent().find(".relationship_check") )
				{
					var extra = $(".identity:visible").val();
				};
			getDate();
			var new_data_item = {
				title: title,
				subtitle: body,
				why: why,
				extra: extra,
				date: date,
				action_id: action_id,
				tags: ["progress", "check_in", action_id, user_mode],


			}
			data_log["data"].unshift(new_data_item);

			// data storage
			localStorage.setItem('data', JSON.stringify(data_log));


			console.log("storage is now");
			console.log(JSON.parse(localStorage.getItem('data')));

			var data_logger = Mustache.to_html(data_template_2, data_log);
			$('#journal_area').html(data_logger);
		}


	});


// feed management




$(document).on('click','.goal', function(){
	console.log($(this).prop("id"));
	var id_of_item_to_add_to_feed = $(this).prop("id")
	console.log(data_log["data"]);

})






    $(document).on("click",".delete_me",function() {
// hide all other actions
		// if the parent/parent element has a check in tag
		// then delete the thing

		// get the id of the thing
		// console.log($(this).siblings("#log_index").text());
		var journal_id = $(this).siblings("#log_index").text();
		// console.log("journal id is " + journal_id);
		if ( journal_id !== undefined ){
			console.log("journal id found to be defined...");
		var itemToBeRemoved = $(this).parent().parent();
		// console.log("item to be removed from the view is");
		// console.log(itemToBeRemoved);
		var index_of_item_to_be_removed = Number(journal_id) - 1;
		// console.log("aiming to delete this item in the database:");


		if ( data_log["data"][index_of_item_to_be_removed] !== undefined ){
			// console.log("this item is found, check it");

			// console.log(data_log["data"][index_of_item_to_be_removed]);
			// console.log("same?");
			// console.log("position to be spliced:");
			// console.log((index_of_item_to_be_removed));
			// console.log("check length");
			// console.log(data_log["data"].length);
			var data_array = data_log["data"];
			console.log(data_array);
			data_array.splice(index_of_item_to_be_removed,1);
			// console.log("check length");
			// console.log(data_array.length);
			// console.log("still there?");
			// console.log(data_array[index_of_item_to_be_removed]);
			// // render anew the journal
			// console.log("resetting the view");
			// console.log("resetting the index");

		// data storage
			localStorage.setItem('data', JSON.stringify(data_log));


			// console.log("storage is now");
			// console.log(JSON.parse(localStorage.getItem('data')));

			var data_logger = Mustache.to_html(data_template_2, data_log);
			$('#journal_area').html(data_logger);
		} else {
			console.log("the item with id " + index_of_item_to_be_removed + " is not found");
		}

		} else {
			console.log("no journal id found");
		}


	});






// the actions view needs to render an id, so that the journal can contain it...


// When NO button is clicked, add corresponding coaching to the relationship check...
  $(document).on("click",".check_in",function() {
// hide all other actions

			var title = $(this).parent().parent().find('.title').text();
			var body  = $(this).parent().parent().find(".body").text();
			var context = [];
			if ( $(".goal_checkin_area").val() != "" ){

				context.push({
					key: "Check In",
					value: $(".goal_checkin_area").val()
				})

				$(".goal_checkin_area").val("");
			}
			if ( $(".goal_progress_checkin_area").val() != "" ){
				context.push({
					key: "Progress",
					value: $(".goal_progress_checkin_area").val()
				});
				$(".goal_progress_checkin_area").val("");
			}
			if ( $(".goal_challenge_checkin_area").val() != "" ){
				context.push({
					key: "Challenge",
					value:  $(".goal_challenge_checkin_area").val()
				});
				$(".goal_challenge_checkin_area").val("");
			}
			if ( $(".goal_reconsideration_checkin_area").val() != "" ){
				context.push({
					key: "Reconsideration",
					value:  $(".goal_reconsideration_checkin_area").val()
				});
				$(".goal_reconsideration_checkin_area").val("");
			}
				if ( $(".goal_inquiry_checkin_area").val() != "" ){
				context.push({
					key: "Inquiry",
					value: $(".goal_inquiry_checkin_area").val()
				});
				$(".goal_inquiry_checkin_area").val("");
			}
			if ( $(".goal_advice_checkin_area").val() != "" ){
				context.push({
					key: "Advice To Myself",
					value: $(".goal_advice_checkin_area").val()
				});
				$(".goal_advice_checkin_area").val("");
			}




			var action_id   = $(this).siblings('#action_id').text();
			console.log("action id saved : " + action_id);
			var extra = "";
			getDate();
			var new_data_item = {
				title: title,
				subtitle: body,
				context: context,
				extra: extra,
				date: date,
				action_id: action_id,
				tags: ["progress", "check_in", "goals", user_mode, user_options.visibility],

			}
			// reset the value of the why variable for the next thing
			why = [];
			$(this).parent().parent().find(".check_in_area").val("");

			// store the info in the local js data block
			data_log["data"].unshift(new_data_item);
			// update local storage
			localStorage.setItem('data', JSON.stringify(data_log));
			// generate the new journal rendering
			var data_logger = Mustache.to_html(data_template_2, data_log);
			// update the view
			$('#journal_area').html(data_logger);
			// reset the journal visibility
			// hide all prompts except the relevant ones to this
			$("#journal_area").children().hide();
			$("."+action_id).show();

			$(".goal_progress_checkin_area").hide();
			$(".goal_checkin_area").hide();
			$(".goal_challenge_checkin_area").hide();
			$(".goal_reconsideration_checkin_area").hide();
			$(".goal_inquiry_checkin_area").hide();
	});




// looping controller



// When NO button is clicked, add corresponding coaching to the relationship check...
  $(document).on("click","#next",function() {
// hide all other actions


			var context = [];

			// if you have made notes on this, then add them to an array, and log that array to the journal
			if ( $("#fixed_attention_notes").val() != "" ){
				context.push({
					key: "Releasing Fixed Attention",
					value:  $("#fixed_attention_notes").val()
				});
				$("#fixed_attention_notes").val("");

			var action_id  = $(".looping:visible").find("#action_id").text();

			console.log("action id saved : " + action_id);
			var extra = "";
			getDate();
			var new_data_item = {
				// title: title,
				subtitle: 'releasing fixed attention from ' + $('#fixed_attention_item').val(),
				context: context,
				// extra: extra,
				date: date,
				action_id: action_id,
				tags: ["progress", "check_in", "looping"],

			}
			// reset the value of the why variable for the next thing
			why = [];
			// $(this).parent().parent().find(".check_in_area").val("");

			// store the info in the local js data block
			data_log["data"].unshift(new_data_item);
			// update local storage
			localStorage.setItem('data', JSON.stringify(data_log));
			// generate the new journal rendering
			var data_logger = Mustache.to_html(data_template_2, data_log);
			// update the view
			$('#journal_area').html(data_logger);
			// reset the journal visibility
			// hide all prompts except the relevant ones to this
			$("#journal_area").children().hide();
			$("."+action_id).show();


			}

	});







// get all info from database if its there, or init blank

if ( localStorage.data === undefined ){
	console.log("no data");

	var data_log =
	{
	  "data": [


	  ],
	  index: function() {
        return ++window['INDEX']||(window['INDEX']=0);
    }
    , resetIndex: function() {
        window['INDEX']=null;
        return;
    }
	}


}else{

	console.log("Looking for data: Found it");

	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('data');

	var data_log = JSON.parse(retrievedObject);
	data_log.index = function() {
        return ++window['INDEX']||(window['INDEX']=0);
    }
	data_log.resetIndex =  function() {
        window['INDEX']=null;
        return;
    }

    // console.log(data_log);

	console.log('Data in storage: ', JSON.parse(retrievedObject));
	// console.log("first item is: ");
	// console.log('retrievedObject: ', JSON.parse(retrievedObject)["data"][0]);

	var data_logger = Mustache.to_html(data_template_2, data_log);
	$('#journal_area').html(data_logger);
	reset_to_user_options();
}


// =============================== END Template for  Data Logging
// ================================================================================



// data




});
