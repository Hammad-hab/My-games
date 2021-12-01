$(document).ready(function () {
	$("button").click(function () {
		// var time = $("#time").val()
		// switch ($("#select").val()) {
		// 	case "Increase letter spacing":
		// 		$("#hhe").animate({ "letterSpacing": "50" }, Number(time))
		// 		break
		// 	case "Increase word spacing":
		// 		$("#hhe").animate({ "wordSpacing": "50" }, Number(time))
		// 		break
		// 	case "Fade out":
		// 		$("#hhe").animate({ "opacity": "-=50" }, Number(time))
		// 		break
		// 	case "Fade in":
		// 		$("#hhe").animate({ "opacity": "+=50" }, Number(time))
		// 		break
		// 	case "Increase font size":
		// 		$("#hhe").animate({ "fontSize": "+=50" }, Number(time))
		// 		break
				
		// }
		var types = ["number", "date", "color", "datetime", "search", "radio"]
		var types_Random = types[Math.floor(Math.random()*6)]
$("input").attr("type", types_Random)

	})
	// $("#tt").change(function () {

	// 	$("#hhe").text($(this).val())
	// })

})