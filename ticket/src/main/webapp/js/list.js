function addNewLine() {
	var nextURL = "img/1.jpg";
	var div = document.createElement("div");
	div.className = 'lineProduct';
	div.innerHTML = "<input type=text class='ticketId'>"
			+ "<input type=text class='from' readonly>"
			+ "<input type=text class='to' readonly>"
			+ "<input type=text class='person'>"
			+ "<input type=text class='cost' readonly>"
			+ "<input type=text class='lineTotal' value=0 readonly>"
			+ "<img class='nextLine' alt='next' width='25px' height='25px' src='"
			+ nextURL + "'/>";

	$(".billing")[0].appendChild(div);
	calculateBillAmount();
}

function displayTicket() {
	var url = "http://localhost:8080/Ticket/ticket?operation=getAllTicket";
	var imgURL = "img/1.jpg";
	$
			.ajax({
				url : url,
				type : 'POST'
			})
			.done(
					function(result) {
						var array = JSON.parse(result);
						var query = "<table style='border: 1px solid black'>"
						query += "<tr><th>TicketId</th> <th>FromAddress</th>  <th>ToAddress</th><th>Cost</th><th>Delete</th></tr>"
						for (var i = 0; i < array.length; i++) {
							query += "<tr class='productRow'><td class='ticketId'>"
									+ array[i].ticketId + "</td>";
							query += "<td>" + array[i].from + "</td>";
							query += "<td>" + array[i].to + "</td>";
							query += "<td>" + array[i].cost + "</td>";
							query += "<td> <img class='delete' src='"
									+ imgURL
									+ "' width='25px' height='25px'/></td></tr>"
						}
						query += "</table>"
						$(".displayAll")[0].innerHTML = query;

					}).fail(function() {

			});

}
function calculateLineTotal(div) {
	var a = div.children(".person").val();
	var b = div.children(".cost").val();
	var c = a * b;
	div.children(".lineTotal").val(c);
	calculateBillAmount();
	balanceAmount();
}

function calculateBillAmount() {
	var count = $("div.lineProduct").length;
	var sum = 0;
	for (var i = 0; i < count; i++) {
		var div = $("div.lineProduct")[i];
		sum += parseInt($($("div.lineProduct")[i]).find(".lineTotal").val());
	}
	$("h2").text(sum);
}
function balanceAmount() {
	var sum = $("h2").text();
	var balance = 0;
	if ($("#cash").val().trim() == "") {
		$("#balance").val("");
	} else {
		var cash = $("#cash").val();
		balance = cash - sum;
		$("#balance").val(balance);
	}

}
