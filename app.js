var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var info = {};

$(document).ready(function() {
	showAll();

	$("#show-all").on("click", function() {
		$(".streaming").show();
		$(".offline").show();
	});

	$("#show-on").on("click", function() {
		$(".offline").hide();
		$(".streaming").show();
	});

	$("#show-off").on("click", function() {
		$(".offline").show();
		$(".streaming").hide();
	});

	$("#refresh").on("click", function() {
		showAll();
	});
});

function showAll() {
	$.each(streamers, function(i,val) {
		$("#twitchers").html("");
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ val +'?callback=?', function(json) {
			console.log(json);
			if (json.stream !== null) {	
				var channel = json.stream.channel.display_name;
				var logo = json.stream.channel.logo;
				var url = json.stream.channel.url;
				var status = json.stream.channel.status;
				$("#twitchers").append("<tr class='bg-success streaming' id='"+ val +"'><td width='16%'><img class='img-fluid rounded-circle' width='65%' alt='"+ channel +"' src='"+ logo +"'/></td><td><a href='" + url +"' target='_blank'>"+ channel +"</a></td><td class='status'>"+ status +"</td></tr>");
			}
			else {
				$("#twitchers").append("<tr id='"+ val +"' class='offline'><td width='16%'><img class='img-fluid rounded-circle' width='65%' alt='"+ val +"' src='https://pbs.twimg.com/profile_images/979092312553750528/2ejlMVyG_400x400.jpg'/></td><td><a href='https://www.twitch.tv/"+ val +"' target='_blank'>"+ val +"</a></td><td class='status'>Offline</td></tr>");
			}
		});
	});
}