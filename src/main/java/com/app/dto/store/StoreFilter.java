package com.app.dto.store;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoreFilter {

	//필터에 개수보여주는 객체
	private int spoon;
	private int count;
	
	private int rate;
	private int rateCount;
	
	private String menuType;
	private int menuCount;
}
