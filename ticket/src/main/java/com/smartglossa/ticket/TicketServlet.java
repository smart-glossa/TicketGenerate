package com.smartglossa.ticket;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;


public class TicketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	    doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String operation = request.getParameter("operation");
		if(operation.equals("add")){
		    int ticketId = Integer.parseInt(request.getParameter("tid"));
		    String fromjourney = request.getParameter("from");
		    String tojourney = request.getParameter("to");
		    float cost = Float.parseFloat(request.getParameter("cost"));
		    JSONObject obj = new JSONObject();
            try {
                Class.forName("com.mysql.jdbc.Driver") ;
                Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ticketgenerate", "root", "root") ;
                Statement stmt = conn.createStatement() ;
                String query = "Insert into ticket values(" + ticketId + ", '" + fromjourney + "', '" + tojourney +"'," + cost + ")";
                stmt.execute(query) ;
                obj.put("Status","Success");
                response.getWriter().print(obj);
		}catch (Exception e) {
            obj.put("Message","Error");
            response.getWriter().print(obj);
        }
		
	}

	}
}
