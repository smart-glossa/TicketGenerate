package com.smartglossa.ticket;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

public class TicketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String username = "root";
		String password = "root";
		String url = "jdbc:mysql://localhost:3306/ticketgenerate";
		String operation = request.getParameter("operation");
		if (operation.equals("addcost")) {
			int ticketId = Integer.parseInt(request.getParameter("ticketId"));
			String from = request.getParameter("from");
			String to = request.getParameter("to");
			float cost = Float.parseFloat(request.getParameter("cost"));
			JSONObject add = new JSONObject();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection connection = DriverManager.getConnection(url, username, password);
				Statement statement = connection.createStatement();
				String query = "insert into ticket(ticketId,fromjourney,tojourney,cost)values(" + ticketId + ",'" + from
						+ "','" + to + "'," + cost + ")";
				statement.execute(query);
				add.put("status", 1);
			} catch (Exception e) {
				
					add.put("status", 0);
					add.put("Message", "Internal Error occur");
					e.printStackTrace();
					response.getWriter().print(add);
				

			}
		} else if (operation.equals("update")) {
			int ticketId = Integer.parseInt(request.getParameter("ticketId"));
			String from = request.getParameter("from");
			String to = request.getParameter("to");
			float cost = Float.parseFloat(request.getParameter("cost"));
			JSONObject update = new JSONObject();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection connection = DriverManager.getConnection(url, username, password);
				Statement statement = connection.createStatement();
				String query = "update ticket set fromjourney ='" + from + "',tojourney='" + to + "',cost=" + cost
						+ " where ticketId=" + ticketId;
				statement.executeUpdate(query);
				update.put("status", 1);
			} catch (Exception e) {
				// TODO: handle exception
				
					update.put("states", 0);
					update.put("Message", "Internal Error Occur");
					response.getWriter().print(update);
					e.printStackTrace();
				

			}

		} else if (operation.equals("Delete")) {

			int ticketId = Integer.parseInt(request.getParameter("ticketId"));
			JSONObject delete = new JSONObject();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection connection = DriverManager.getConnection(url, username, password);
				Statement statement = connection.createStatement();
				String query = "Delete from ticket where ticketId=" + ticketId;
				statement.execute(query);
				delete.put("status", 1);

			} catch (Exception e) {
				
					delete.put("Message", "Internal Error Occur");
				
				response.getWriter().print(delete);
			}
		} else if (operation.equals("get")) {
			int ticketId = Integer.parseInt(request.getParameter("ticketId"));
			JSONObject get = new JSONObject();
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection connection = DriverManager.getConnection(url, username, password);
				Statement statement = connection.createStatement();
				String query = "select * from ticket where ticketId=" + ticketId;
				ResultSet rs = statement.executeQuery(query);
				if (rs.next()) {
					get.put("from", rs.getString("fromjourney"));
					get.put("to", rs.getString("tojourney"));
					get.put("cost", rs.getFloat("cost"));
				}
				response.getWriter().print(get);

			} catch (Exception e) {
				// TODO: handle exception
				JSONObject error = new JSONObject();
				
					error.put("message", "Internal Error Occur");
					e.printStackTrace();
				
				response.getWriter().print(error);
			}
		}
	}

}
