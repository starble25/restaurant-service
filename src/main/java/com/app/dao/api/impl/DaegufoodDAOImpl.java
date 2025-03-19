package com.app.dao.api.impl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Repository;

import com.app.dao.api.DaegufoodDAO;

@Repository
public class DaegufoodDAOImpl implements DaegufoodDAO{

	public String getDaegufood() {
		
		StringBuilder sb = new StringBuilder();
    	
        try {
            // API 호출 URL을 생성
            StringBuilder urlBuilder = new StringBuilder("https://www.daegufood.go.kr/kor/api/tasty.html");
            urlBuilder.append("?" + URLEncoder.encode("mode", "UTF-8") + "=json");
            urlBuilder.append("&" + URLEncoder.encode("addr", "UTF-8") + "=중구");

            // URL 객체 생성
            URI uri = new URI(urlBuilder.toString());
            URL url = uri.toURL();
            

            // API 요청을 위한 HttpURLConnection 설정
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");  // 응답 형식
//    		System.out.println("Response code: " + conn.getResponseCode());

            // 서버 응답 코드 확인
            int responseCode = conn.getResponseCode();
            BufferedReader rd;

            // 응답 코드가 200~300 사이면 정상 응답, 아니면 오류 응답
            if (responseCode >= 200 && responseCode <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            // 서버 응답을 StringBuilder에 저장
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();
            conn.disconnect();

            // 응답 결과 출력 (JSON 형태로 출력)
//            System.out.println("API Response: " + sb.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return sb.toString();
	}
}
