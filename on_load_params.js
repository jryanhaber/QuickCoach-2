
// show or hide column functions
function show_col(column_name){

	$("#"+column_name).show();

}

function hide_col(column_name){

	$("#"+column_name).hide();

}

$("#relating_time").click();

$("#relating_natural_check").click();


// set intial params
var user_params = {
	// which columns are visible by default
	context_col_visible : true,
	feed_col_visible   : false,
	tools_col_visible   : true,
	action_col_visible  : true,
	journal_col_visible : true
}


// for each column, show or hide as appropriate
console.log("loading initial user col params:");
if (user_params.context_col_visible){
	show_col("context_col");
	console.log("showing");
} else {
	hide_col("context_col");
	console.log("hiding");
}

if (user_params.feed_col_visible){
	show_col("feed_col");
	console.log("showing");
} else {
	hide_col("feed_col");
	console.log("hiding");
}

if (user_params.tools_col_visible){
	show_col("tools_col");
	console.log("showing");
} else {
	hide_col("tools_col");
	console.log("hiding");
}

if (user_params.action_col_visible){
	show_col("act_col");
	console.log("showing");
} else {
	hide_col("act_col");
	console.log("hiding");
}

if (user_params.journal_col_visible){
	show_col("journal_col");
	console.log("showing");
} else {
	hide_col("journal_col");
	console.log("hiding");
}