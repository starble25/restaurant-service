package com.app.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class LoginManager {

	public static final String SESSION_LOGIN_KEY = "loginUserId";
	
	public static void setSessionLogin(HttpSession session, String id) {
		session.setAttribute(SESSION_LOGIN_KEY, id);
	}
	
	public static void setSessionLogin(HttpServletRequest request, String id) {
		setSessionLogin(request.getSession(), id);
	}
	
	public static boolean isLogin(HttpSession session) {
		if( session.getAttribute(SESSION_LOGIN_KEY) != null ) {
			return true;
		}
		
		return false;
		// 잘못 로그인 되면 안되기때문에 기본적으로 return false
		// != null 일때만 return true
	}
	
	public static boolean isLogin(HttpServletRequest request) {
		return isLogin(request.getSession());
	}
	
	public static String getLoginUserId(HttpSession session) {
		return (String) session.getAttribute(SESSION_LOGIN_KEY);
	}
	
	public static String getLoginUserId(HttpServletRequest request) {
		return getLoginUserId(request.getSession());
	}
	
	public static void logout(HttpSession session) {
		session.invalidate();
	}
	
	public static void logout(HttpServletRequest request) {
		logout(request.getSession());
	}
	
}
