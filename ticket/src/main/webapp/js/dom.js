function myFunction() {
	var center = document.createElement("center");
	var x = document.createElement("h1");
	var x1 = document.createTextNode("Ticket Generate");
	x.appendChild(x1);
	x.setAttribute("class", "");
	center.appendChild(x);
	document.body.appendChild(center);

	var table = document.createElement("table");
	document.body.appendChild(table);
	center.appendChild(table);

	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var text = document.createTextNode("TicketId*:");
	td.setAttribute("class", "xx");
	td.appendChild(text);
	tr.appendChild(td);

	var td1 = document.createElement("td");
	var box = document.createElement("input");
	box.setAttribute("id", "ticketId");
	box.setAttribute("placeholder", "ticketId..");
	td1.appendChild(box);
	tr.appendChild(td1);
	table.appendChild(tr);

	var tr1 = document.createElement("tr");
	var td2 = document.createElement("td");
	var text1 = document.createTextNode("From*:");
	td2.setAttribute("class", "xx");
	td2.appendChild(text1);
	tr1.appendChild(td2);

	var td3 = document.createElement("td");
	var box1 = document.createElement("input");
	box1.setAttribute("id", "from");
	box1.setAttribute("placeholder", "fromAddrss");
	td3.appendChild(box1);
	tr1.appendChild(td3);
	table.appendChild(tr1);

	var tr2 = document.createElement("tr");
	var td4 = document.createElement("td");
	var text2 = document.createTextNode("To*:");
	td4.setAttribute("class", "xx");
	td4.appendChild(text2);
	tr2.appendChild(td4);

	var td5 = document.createElement("td");
	var box2 = document.createElement("input");
	box2.setAttribute("id", "to");
	box2.setAttribute("placeholder", "toAddress");
	td5.appendChild(box2);
	tr2.appendChild(td5);
	table.appendChild(tr2);

	var tr3 = document.createElement("tr");
	var td6 = document.createElement("td");
	var text3 = document.createTextNode("Cost *:");
	td6.setAttribute("class", "xx");
	td6.appendChild(text3);
	tr3.appendChild(td6);

	var td8 = document.createElement("td");
	var box5 = document.createElement("input");
	box5.setAttribute("id", "cost");
	box5.setAttribute("placeholder", "Cost");
	td8.appendChild(box5);
	tr3.appendChild(td8);
	table.appendChild(tr3);

	var tr5 = document.createElement("tr");
	var td10 = document.createElement("td");
	var button = document.createElement("button");
	// button.value='submit';
	// button.type='submit';
	// button.id="submit";
	button.setAttribute("id", "submit");
	var button1 = document.createTextNode("Submit");
	button.appendChild(button1);

	td10.appendChild(button);
	tr5.appendChild(td10);
	table.appendChild(tr5);

	var td11 = document.createElement("td");
	var button2 = document.createElement("button");
	var button3 = document.createTextNode("Update");
	button2.setAttribute("id", "update");
	button2.appendChild(button3);
	td11.appendChild(button2);
	tr5.appendChild(td11);
	table.appendChild(tr5);

	var ticket = document.createElement("h3");
	var ticketname = document.createTextNode("Person Ticket");
	ticket.appendChild(ticketname);
	ticket.setAttribute("id", "lists");
	document.body.appendChild(ticket);

	var table1 = document.createElement("table");
	var tablerow = document.createElement("tr");
	var tabledata = document.createElement("td");
	var t1 = document.createTextNode("ticketId");
	table1.setAttribute("class", "sellspace")
	tabledata.appendChild(t1);
	tablerow.appendChild(tabledata);
	table1.appendChild(tablerow);
	document.body.appendChild(table1);

	var tabledata1 = document.createElement("td");
	var t2 = document.createTextNode("From Address");
	tabledata1.appendChild(t2);
	tablerow.appendChild(tabledata1);
	table1.appendChild(tablerow);

	var tabledata2 = document.createElement("td");
	var t3 = document.createTextNode("To Address");
	tabledata2.appendChild(t3);
	tablerow.appendChild(tabledata2);
	table1.appendChild(tablerow);

	var tabledata3 = document.createElement("td");
	var t4 = document.createTextNode("Total Person");
	tabledata3.appendChild(t4);
	tablerow.appendChild(tabledata3);
	table1.appendChild(tablerow);

	var tabledata4 = document.createElement("td");
	var t5 = document.createTextNode("Cost");
	tabledata4.appendChild(t5);
	tablerow.appendChild(tabledata4);
	table1.appendChild(tablerow);

	var tabledata5 = document.createElement("td");
	var t6 = document.createTextNode("Total");
	tabledata5.appendChild(t6);
	tablerow.appendChild(tabledata5);
	table1.appendChild(tablerow);

	var dis = document.createElement("div");
	dis.setAttribute("class", "billing");
	document.body.appendChild(dis);

	var list = document.createElement("h3");
	var list1 = document.createTextNode("Display Cost List");
	list.setAttribute("id", "downs");
	list.appendChild(list1);
	document.body.appendChild(list);

	var display = document.createElement("div");
	display.setAttribute("class", "displayAll");
	document.body.appendChild(display);

	var print = document.createElement("button");
	var print1 = document.createTextNode("Print");
	print.setAttribute("value", "Print");
	print.setAttribute("id", "print");
	print.appendChild(print1);
	document.body.appendChild(print);

}
