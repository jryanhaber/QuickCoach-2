

// fixed attention go to step 1 button
var fixed_attention_item;

// fixed attention go to step 2 button

// fixed attention go to step 3 button



var actions =
{
	input: "<textarea class='form-control'></textarea>",
	"action":
	[

	{
		id: "daily_plan",
		tags: "daily_plan tools",
		title: "Every Day Actions",
		subtitle: "Your commitment start here" ,
		prompts: [

		{


			title: "Post 2 new ads, renew all others",
			notes: "30m - This is an experiement to see if you can land a job and some gig work immediately via craigslist.",
			options: [{option: "Complete"}],
			no_message: [""],
			why: [""]
		},
		{
			title: "Apply for 20 Jobs",
			question: "9AM - 11AM",
			options: [{option: "Complete"}],
			no_message: [""],
			why: ["This will take about 2 hrs"]
		},
		{
			title: "Talk to 2 recruiters",
			question: "Or do 2 informational interviews.  Questions include ( 1 ) What is the most effective thing for me to be learning to land an amazing job as soon as possible?  What is in highest demand?  What would you need to see in my resume in order to feel confident about placing me?",
			options: [{option: "Complete"}],
			no_message: [""],
			why: ["This will take about 2 hrs"]
		},{
			title: "Confirm 2 meetups on your calendar",
			question: "Make sure you have 2 meetups scheduled on your calendar.",
			options: [{option: "Complete"}],
			no_message: [""],
			why: ["This will take about 5m."]
		},
		{
			title: "Apply to 2 coding test sites",
			question: "This will take about 1.5 hrs",
			options: [{option: "Complete"}],
			no_message: [""],
			why: [""]
		}
		,
		{
			title: "Code at the code school towards cert",
			question: "Spend 2 hrs on this",
			options: [{option: "Complete"}],
			no_message: [""],
			why: [""]
		}




		]

	},



{
	id: "Money_mastery",
	tags: "Money_mastery tool",
	title: "Master Your Finances Check-in",
	subtitle: "What would it take to master your finances?" ,
	prompts: [
	{
		title: "Track your money",
		question: "Are you keeping track of your finances?",
		no_message: ["Recommit to tracking all of your finances"],
		why: ["Bringing awareness to your finances will help you auto regulate your funds"],
		prompt_extras: "",
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ]

	} ,
	{
		title: "Make $100 a day more then you spend",
		question: "Are you on track for making $100 more a day then you spend?",
		no_message: ["Figure out how you will make $100 a day more then you spend today and tomorrow."],
		why: ["You need to change your financial reality so you can do the things that make you thrive."],
		prompt_extras: "",
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ]

	}
	]
},



{
	id: "looping",
	tags: "looping tools",
	title: "Releasing Fixed attention ",
	subtitle: "Actualize your Dreams by releasing your fixed attention from whatever it is locked on to." ,
	prompts: [
			// == == ==
			{
				title: "Think of the thing that is triggering you",
				question: "What is the topic at hand?",
				no_message: ["Accept that the connection could end at any time and bring that state of being to the relating.  What does that open up to you?"],
				why: [""],
				prompt_extras: "<br><input class='form-control fixed_attention_item' id='fixed_attention_item' placeholder='What is the thing your attention is fixed on?'></input><br><textarea class='form-control fixed_attention_notes' id='fixed_attention_notes' rows='6' placeholder='describe it here' ></textarea><br><button class = 'btn btn-default' id='next'>Next</button><button class = 'btn btn-default' style='display:none;' id='ok'>Ok</button><button class='btn btn-link text-muted start_over'>start over</button><button class='pull-right btn btn-link text-muted' id='step_of_process'>1</button>",
				options: [],

			}
			]
		},


		{
			id: "gtd",
			tags: "gtd tools",
			title: "Implement your GTD",
			subtitle: "Plan your day well" ,
			regularity: 7 ,
			link:  {
				href: "https://culturedcode.com/things/guide/",
				title: "Review the method",
				full: "<br><br><a class = 'text-muted'  href = 'https://culturedcode.com/things/guide/'>Review the method </a>"
			},
			prompts: [
			// == == ==
			{
				title: "Gather it all in one place",
				notes: "Get all of you incompletes off your mind and into your inbox.",
				why: "",
				options: [{option: "Continue"}]

			},{
				title: "Decide when to get started",
				notes: "Filter your inbox into today items, next for items you could start anytime, schedule, and someday, for you might like to do, but your not sure when",
				why: "",
				options: [{option: "Continue"}]

			}
			,{
				title: "Review your projects",
				notes: "Make sure you have a next action determined for each project.",
				why: "",
				options: [{option: "Continue"}]

			},{
				title: "Review your next items",
				notes: "Ask yourself what you want to do today, choose what items will be completed today, designate those items to a today list.",
				why: "",
				options: [{option: "Continue"}]

			}
			,{
				title: "Review your someday items",
				notes: "Review your someday/maybe list, enjoy it, you should have fun things in there to balance obligations",
				why: "",
				options: [{option: "Continue"}]

			},{
				title: "Take Action",
				notes: "Use your intuition to take action on your list",
				why: "80% of your results will come from 20% of your actions.  Productivity is not getting a lot done, its doing, deliberately, the most important things to most efficiently create your intended outcome.  Thus, choose wisely, and take the actions that are the most effective at creating your intended results.",
				options: [{option: "Continue"}]

			}

			]


		},



		{
			id: "choose_action",
			tags: "choose_action tools",
			title: "Choose Your Next Action",
			subtitle: "Use these 4 discernments to decide" ,
	regularity: 7 , // times per week
	link:  {
		href: "https://culturedcode.com/things/guide/",
		title: "Review the method",
		full: "<br><br><a class = 'text-muted'  href = 'https://culturedcode.com/things/guide/'>Review the method </a>"
	},
	prompts: [
			// == == ==
			{
				title: "Context",
				notes: "What could you act on in the current context?  Are you out and about?  At your desk? Etc.",
				options: [{option: "Continue"}]

			},{
				title: "Time",
				notes: "How much time do you have available?",
				options: [{option: "Continue"}]

			},{
				title: "Energy",
				notes: "On a scale of 1-10, how much energy do you have?  Which tasks fit for that level of energy?",
				options: [{option: "Continue"}]

			},{
				title: "Priority",
				notes: "Given the previous three discernments, which action would provide the most return on investment of time/attention... on a scale of 1-10?",
				options: [{option: "Continue"}]

			}

			]


		},

		{
			id: "productivity_1",
			tags: "productivity_1 tools",
			title: "Productivity Challenge 1",
			subtitle: "Imagine you have 2 more hours in your day, how will you use that time?" ,
			regularity: 0 ,
			prompts: [
			// == == ==
			{
				title: "Rituals",
				notes: "What new habits, routines and rituals would you like to move forward on here?",
				options: [{option: "Continue"}]

			},{
				title: "Values",
				notes: "What values underly this goal?",
				options: [{option: "Continue"}]

			},{
				title: "Dedication",
				notes: "Why do you want to become more productive?",
				options: [{option: "Continue"}]

			}

			]


		},

		{
			id: "productivity_2",
			tags: "productivity_2 tools",
			title: "Productivity Challenge 2",
			subtitle: "Identify your 20%... 'productivity shot through the roof when I did this'" ,
			regularity: 0 ,
			prompts: [
			// == == ==
			{
				title: "Look at the big picture",
				notes: "Make or Review a list of everything you are responsible for in your work",
				options: [{option: "Continue"}]

			},{
				title: "Identify Leverage",
				notes: "If you could just do one item on that list all day every day, what item on that list would provide the most value? Brainstorm this.",
				options: [{option: "Continue"}]

			},{
				title: "Dedication",
				notes: "If you could only do 2 more items, what 2nd and 3rd tasks let you accomplish the most in the same amount of time?",
				options: [{option: "Continue"}]

			},{
				title: "Balance Structure with Deliberate Focus",
				notes: "Aim for roughly 50% structured events and 50% deliberate focus on the most effective thing... review your day",
				options: [{option: "Continue"}]

			}

			]


		},


		{
			id: "weekly_planning",
			tags: "weekly_planning tools",
			title: "Weekly Planning",
			subtitle: "Plan your week every monday",
			prompts: [
			// == == ==
			{
				title: "Review the week before",
				notes: "To what extent did you fulfill your intent last week?",
				options: [{option: "Continue"}]

			},
			{

				title: "Set your targets for this week.",
				notes: "By the end of the week, what 3 things do you want to have accomplished?",
				options: [{option: "Continue"}],
				no_message: ["This Week Targets"],

			}
			]
		},




		{
			id: "daily_planning",
			tags: "daily_planning tools",
			title: "Daily Planning",
			subtitle: "Plan your day well" ,
			prompts: [
			// == == ==


			{
				title: "Review Yesterday",
				notes: "To what extent did you fulfill your 3 target goals yesterday?",
				options: [{option: "Continue"}]

			},
			{
				title: "Set your targets for today",
				notes: "If you could only do one thing today, which would provide the most positive impact on your life going forward?  By the end of the day, what are 3 things that you would like to have accomplished?",
				options: [{option: "Continue"}],
				why: "If you could just do one item on that list all day every day, what item on that list would provide the most value?  If you could only choose 3?"

			},


			{
				title: "Get your grid paper out",
				options: [{option: "Continue"}],

			}
			,{
				title: "Map out your day.",
				question: "Map out your main goals for the week, for the day, main active projects, main habits, income streams." ,
				options: [{option: "Continue"}],

			},{
				title: "Choose Next actions",
				question: "Determine the very next tangible action to be done towards each goals actualization." ,
				options: [{option: "Continue"}],

			},{
				title: "Make your task list",
				question: "Choose which tasks you will undertake",
				options: [{option: "Continue"}],

			}
			,{
				title: "Order your tasks",
				question: "Choose a rough order for your tasks" ,
				options: [{option: "Continue"}],

			},{
				title: "Evaluate the day before",
				question: "Check out your lessons from the day before, give yourself advice for today." ,
				options: [{option: "Continue"}],

			},{
				title: "Make a recording",
				question: "Look over everything and make a recording that summarizes your advice to yourself." ,
				options: [{option: "Continue"}],

			},{
				title: "Listen to the recording",
				question: "Listen to the recording to get alternative viewpoints and perspectival shift" ,
				options: [{option: "Continue"}],

			}
			,{
				title: "Take action",
				question: "Get going" ,
				options: [{option: "Continue"}],

			}


			]
		},


		{
			id: "self_actualization",
			tags: "self_actualization tools",
			title: "Self Actualization",
			subtitle: "Actualize your Dreams" ,
			prompts: [
			// == == ==
			{
				title: "Handle Your Money",
				question: "How much money do you have in the bank?",
				no_message: ["Accept that the connection could end at any time and bring that state of being to the relating.  What does that open up to you?"],
				why: ["This will determine your priorities"],
				prompt_extras: "<br><input class='form-control money' placeholder='How much money?'></input>",
				options: [{option: "Submit"}],

			} ,	{
				title: "Connect to your purpose",
				notes: "Your purpose is to own, inhabit, experience and share your full coherence with the world.  To own that journey and cycle, and share the means for its actualization. <br><br>",
				question: "Are you living this in your being right now?",
				no_message_title: "",
				no_message: ["<h4>Recommit to your purpose.</h4>Your purpose is to own, inhabit, experience and share your full coherence with the world.  To own that journey and cycle, and share the means for its actualization."],
				why: ["Your life is a thousand times better in its experience when you are committed to your purpose"],
				options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
				prompt_extras: ""

			}
			,	{
				title: "Clarify Objectives",
				notes: "Are you clear on your goals for the week?  The specific measurable milestones you have? <br><br>",
				question: "",
				no_message: ["<h4>Clarify Your Weekly Goals</h4>Clarify your goals for the week before moving forward."],
				why: ["Clear objectives makes the impossible possible"],
				options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
				prompt_extras: ""

			} ,	{
				title: "Clarify Daily Objectives",
				notes: "Are you clear on your goals for the day?  The specific measurable milestones you have? <br><br>",
				question: "",
				no_message: ["<h4>Clarify Your Daily Goals</h4>Clarify your goals for the day before moving forward."],
				why: ["Clear objectives makes the impossible possible"],
				options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
				prompt_extras: ""

			} 
			]
		},




		{
			id: "circling_after",
			tags: "circling_after tools",
			title: "After a Circle",
			subtitle: "See how you did",
			extras: "<br><input class='form-control identity' placeholder='Which circle is this about?'></input>",

			prompts:

			[
			{
				title: "Explain what circling is",
				notes: "We are sharing an intersubjective inquiry. We will practice getting shared reality.  That is when my experience and yours intersect.  We get shared reality by noticing what we are noticing, assuming nothing, welcoming everything, noticing what arises, and checking out our assumptions.  We are practicing owning our experience, and we will be abstaining from invalidating each others experience by trying to fix, change, or advise each other.  I will facilitate, which means I will play air traffic controller.  Signal to me when you are ready to speak and I will try to create enough space for each other and the persons unfolding as well.",
				options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
	    // questions:
	    	// [{
	    	// 	title: "test me",
	    	// 	starter:"start"
	    	// }]
	    }
	    ,{
	    	title: "Honor the other",
	    	notes: "Did you honor them?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
	    // questions:
	    	// [{
	    	// 	title: "test me",
	    	// 	starter:"start"
	    	// }]
	    }
	    ,{
	    	title: "Honor Yourself",
	    	notes: "Did you honor yourself?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Honor the space between",
	    	notes: "Did you honor the space between?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Share presence",
	    	notes: "Were you present?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Be with your interest",
	    	notes: "Did you stay with what you were most interested in?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Attune to the other",
	    	notes: "Did you attune to them?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Notice what you notice",
	    	notes: "Did you notice what you were noticing?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Notice Emergence",
	    	notes: "Did you notice what was arising?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Welcome Everything",
	    	notes: "Did you welcome everything?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Assume Nothing",
	    	notes: "Did you assume nothing?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Validate Experience",
	    	notes: "Did you make sense of their way of seeing without trying to change it?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Don't Change Them ",
	    	notes: "Did you abstain from coaching, fixing, or in any way trying to change them in service to being with them where they are at?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Reveal Impact",
	    	notes: "Did you reveal the impact of your being with them?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Notice what happens",
	    	notes: "Did you notice what you appreciated, when you felt most connected, when you felt closest, when you felt more trust, when you could feel them the most, and share that?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    {
	    	title: "Remember Being",
	    	notes: "Did you remember that just being with them is enough?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },{
	    	title: "Give yourself a break ",
	    	notes: "Did you remember to give yourself a break rather then beating up on yourself for the moments where you missed the mark?",
	    	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],

	    },
	    ]


	},
	{
		id: "circling_before",
		tags: "circling_before tools",
		title: "Before a Circle",
		subtitle: "Prep your mind"

	},


	{
		id: "byron_katie",
		tags: "byron_katie tool",
		title: "Byron Katies Inquiry",
		subtitle: "Question your painful thoughts and set yourself free" ,
		prompts: [
			// == == ==
			{

// question field... add  one...



title: "Run the clearing via text expander",
notes: "Do this for now, then check here when complete <br><br>",
question: "Have you done this yet?",
no_message: ["Do the clearing on the most stressful thought you are having"],
why: [""],
options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
prompt_extras: ""

} ,
{
	title: "Take it easy",
	notes: "Go easy on yourself rather then giving yourself a hard time. <br><br>",
	question: "Are you going easy on yourself?",
	no_message: ["Give yourself a break, perhaps some empathy"],
	why: ["Going hard on yourself raises cortisol levels, which increases stress, which inhibits the immune system and is not attractive to women, relaxed, laid back men are more attractive then stressed out men."],
	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
	prompt_extras: ""
} ,
{
	title: "Welcome Criticism",
	notes: "Welcome her criticisms as a gift<br><br>",
	question: "Are you accepting her criticism as a gift?",
	no_message: ["Run some byron katies work on this matter"],
	why: ["They show me authenticially where she is at and are orienting perspectives… thus a gift… they are also evidence of her needs, and they show me what she is needing, which she is unable to share until I listen to those criticisms due to emotional instability within… she is also able to be seen and heard in her frustration through her criticisms, this provides a means for emotional connection,"],
	options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
	prompt_extras: ""
}
]
},
{

	id: "down_regulate",
	tags: "down_regulate",
	title: "Down Regulate",
	subtitle: "When you get triggered, a natural fight/flight response happens, which has no place in intimate conversations, pause and down regulate your nervous system so you don't burn a bridge" ,
	prompts:[


	{
		title: "Pause the interaction",
		notes: "<h5>Do not simply leave!</h5>  Use a script like this. <br><br><div class='list-group-item'>My system is flooded and I need to calm down a bit.  I am going to take a couple minutes to myself and see if I can do that, and then I will be back to continue this conversation.</div><br>",
		question: "Have you completed this?",
		no_message: ["I want you to recommit to letting a woman know what is going on and to making sure she feels safe.  If you missed the mark, text her and let her know she is safe."],
		why: ["This tells the woman she is safe."],
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
		prompt_extras: ""

	},
	{
		title: "Count to 10",
		notes: "",
		question: "Have you completed this?",
		no_message: ["Recommit to remembering to count to 10 when you get flooded emotionally.  If its not too late, do it."],
		why: ["This tells the nervous system to do all the opposite things that happen in fight or flight"],
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
		prompt_extras: ""

	},
	{
		title: "Breathe Deeply",
		notes: "",
		question: "Have you completed this?",
		no_message: ["Recommit to breathing deeply when you get emotionally flooeded."],
		why: ["This tells the nervous system to do all the opposite things that happen in fight or flight"],
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
		prompt_extras: ""

	},
	{
		title: "Do 100 pushups" ,
		notes: "Channel that energy into something wholesome while calming your nervous system<br><br>",
		question: "Have you completed this?",
		no_message: ["Recommit to doing this when you get triggered."],
		why: ["This tells the nervous system to do all the opposite things that happen in fight or flight"],
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
		prompt_extras: ""

	},
	{
		title: "Drop your interpretations" ,
		notes: "The mind loses its interpretive functionality in fight/flight mode<br><br>",
		question: "Have you completed this?",
		no_message: ["Recommit to doing this when you get triggered."],
		why: ["This tells the nervous system to do all the opposite things that happen in fight or flight"],
		options: [{option: "Yes"},{option:"Somewhat"},{option:"No"} ],
		prompt_extras: ""

	}
		// end prompt list
		]
	// end tool
}




],

index: function() {
	return ++window['INDEX']||(window['INDEX']=0);
}
, resetIndex: function() {
	window['INDEX']=null;
	return;
}





}
