    <%@ page language="java" contentType="text/html; charset=utf-8"
        pageEncoding="utf-8"%>
    <%@ page import="com.rongdu.manage.action.UploaderAction" %>
    <%
    	request.setCharacterEncoding("utf-8");
    	response.setCharacterEncoding("utf-8");
        UploaderAction up = new UploaderAction(request);
        up.setSavePath("/data/upfiles");
        String[] fileType = {".gif" , ".png" , ".jpg" , ".jpeg" , ".bmp" , "pdf"};
        up.setAllowFiles(fileType);
        up.setMaxSize(10000); //单位KB
        up.upload();
        String ret="{'original':'"+up.getOriginalName()+"','url':'"+up.getUrl()+"','title':'"+up.getTitle()+"','tmpId':'"+up.getTmpId()+"','state':'"+up.getState()+"'}";
        response.getWriter().print(ret);
    %>
