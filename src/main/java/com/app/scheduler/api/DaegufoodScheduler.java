package com.app.scheduler.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;


import com.app.service.api.DaegufoodService;

public class DaegufoodScheduler {
	
	@Autowired
	DaegufoodService daegufoodService;
	
	@Scheduled(cron = "0 0 0 ? * 5")
	public void saveDaegufoodSchedule() {
		
		System.out.println("대구food api스케줄러 실행");		

		//매월 금요일 밤12시 스케줄러 실행 -> 공공데이터 api값 db에 저장
		daegufoodService.saveDaegufoodStores();
		
	}
	
}
