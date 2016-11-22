$(document).ready(function(){
	 addNewLine();
     displayTicket();
	$(document).on('click','#submit',function(key){
		var ticketId=$('#ticketId').val();
		var from =$('#from').val();
		var to=$('#to').val();
		var cost=$('#cost').val();
		   if(ticketId=="")
		    {
		        alert("Enter ticketId..");
		        $('#ticketId').focus().css("outline-color","red");
		        return;
			}else if(from==""){
				alert("Enter fromAddress");
				$('#from').focus().css("outline-color","red");
				return
			}else if(to==""){
				alert("Enter to Address");
				$('#to').focus().css("outline-color","red");
				return;
			}else if(cost==""){
				alert("Enter cost..");
				$('#cost').focus().css("outline-color","red");
				return;
			}
		var url = "http://localhost:8080/Ticket/ticket?operation=addcost&ticketId=" + 
		ticketId + "&from=" + from + "&to=" + to +"&cost=" + cost;
        $.ajax({
            url: url,
            type: 'POST'
        }).done(function(result) {
            if (result == "") {
                alert("Added SuccessFully");
                $('#ticketId').val("");
                $('#from').val("");
                $('#to').val("");
                $('#cost').val("");
            } else {
                result = JSON.parse(result);
                if (result.Message == "Error") {
                    alert("Error occurs");
                }
            }
            displayTicket();

        }).fail(function(result) {
            console.log(result);
        });
    });
        // get and update//
     $(document).on("keyup", "#ticketId", function() {
        var ticketId = $('#ticketId').val();
        if (ticketId != "") {
        	// http://localhost:8080/Ticket/ticket?operation=get&ticketId=3
            var getTicketUrl = "/Ticket/ticket?operation=get&ticketId=" + ticketId;
            $.ajax({
                    url: getTicketUrl,
                    type: "POST"
                })
                .done(function(result) {
                    result = JSON.parse(result);
                    var from = result.from;
                    var to=result.to;
                    var cost = result.cost;
                    $("#from").val(from);
                    $("#to").val(to);
                    $("#cost").val(cost);
                })
                .fail(function(result) {
                    alert("Some Errors Please Enter correct value");
                });
        } else {
            $("#from").val("");
            $("#to").val("");
            $("#cost").val("");
        }

    });
    $(document).on("keypress", ".add", function(key) {
        if (key.which == 13) {
            $("#submit").click();
        }
    })
    $(document).on("click", "#update", function() {
        var ticketId = $('#ticketId').val();
        var from = $('#from').val();
        var to=$('#to').val();
        var cost = $('#cost').val();
        if (ticketId == "") {
            alert("Please Enter ticketId");
            $("#ticketId").focus().css("outline-color", "#ff0000");
            return;
        }
        if (from == "") {
            alert("Please Enter From Address");
            $("#from").focus().css("outline-color", "#ff0000");
            return;
        }
        if (to == "") {
            alert("Please Enter To Address");
            $("#to").focus().css("outline-color", "#ff0000");
            return;
        }
        if (cost == "") {
            alert("Please Enter cost");
            $("#cost").focus().css("outline-color", "ff0000");
            return;
        }// http://localhost:8080/Ticket/ticket?operation=update&ticketId=3&from=ljhhh&to=parambur&cost=10.00
        var url = "/Ticket/ticket?operation=update&ticketId=" + ticketId + "&from=" + from + "&to=" + to + "&cost=" + cost;
        $.ajax({
                url: url,
                type: 'POST'
            })
            .done(function(result) {
                if (result == "") {
                    alert("Updated SuccessFully");
                    $('#ticketId').val("");
                    $('#to').val("");
                    $('#from').val("");
                    $('#cost').val("");
                } else {
                    result = JSON.parse(result);
                    if (result.Message == "Error") {
                        alert("Error occurs");
                    }
                }
                displayProducts();
            }).fail(function(result) {
                console.log(result);
            });

    })// http://localhost:8080/Ticket/ticket?operation=Delete&ticketId=33
       $(document).on("keyup", ".ticketId", function(key) {
        var div = $(this).parent();
       if (key.which == 39) {
            div.children(".person").focus();
        }
       if(key.which==13){
           div.children(".nextLine").click();
       }
       if (key.which == 40) {
           div.next().children(".person").focus();
       }
       if (key.which == 38) {
           div.prev().children(".person").focus();
       }
       var div = $(this).parent();
       if($(this).val()==""){
           div.children(".from").val("")
           div.children(".to").val("");
           div.children(".person").val("");
           div.children(".cost").val("");
           div.children(".lineTotal").val(0);
           calculateBillAmount();
           balanceAmount();
        }
       
       
        var getProductUrl = "/Ticket/ticket?operation=get&ticketId=" + $(this).val();
        $.ajax({
                url: getProductUrl,
                type: "POST"
            })
            .done(function(result) {
                result = JSON.parse(result);
                if (jQuery.isEmptyObject(result)) {
                    div.children(".from").val("");
                    div.children(".to").val("");
                    div.children(".person").val("");
                    div.children(".cost").val("");
                    div.children(".lineTotal").val(0);
                    calculateBillAmount();
                    balanceAmount();
                    return false;
                }else{
                     var from=result.from;
                     var to=result.to;
                     var person = result.person;
                     var cost = result.cost;
                     div.children(".from").val(from)
                     div.children(".to").val(to)
                     div.children(".person").val(1);
                     div.children(".cost").val(cost)
                     var a = div.children(".person").val();
                     var b = div.children(".cost").val();
                     var c = a * b;
                     div.children(".lineTotal").val(c);
                     calculateBillAmount();
                  // balanceAmount();
                    }
               
            })
    });
        $(document).on("keyup", ".person", function(key) {
        var div = $(this).parent();
        if (key.which == 37) {
            div.children(".ticketId").focus();
        }
        if (key.which == 13) {
               div.children(".nextLine").click();
        }
        if (key.which == 40) {
            div.next().children(".person").focus();
        }
        if (key.which == 38) {
            div.prev().children(".person").focus();
        }
        var a = div.children(".person").val();
        var b = div.children(".cost").val();
        var c = a * b;
        div.children(".lineTotal").val(c);
        calculateBillAmount();
        balanceAmount();

    })
    
     $(document).on("click", ".delete", function() {
        var tag = $(this).parent().parent();
        var ticketid = tag.children(".ticketId")[0].innerHTML;
        var url = "/Ticket/ticket?operation=Delete&ticketId=" + ticketid;
        $.ajax({
            url: url,
            type: 'POST'
        }).done(function(result) {
            tag.remove();
        }).fail(function(result) {
            console.log("")
        });
    })

   });