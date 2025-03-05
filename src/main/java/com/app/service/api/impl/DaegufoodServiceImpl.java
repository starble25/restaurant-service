package com.app.service.api.impl;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.api.DaegufoodDAO;
import com.app.dao.store.StoreDAO;
import com.app.dto.menu.Menu;
import com.app.dto.store.Store;
import com.app.dto.store.StoreDetail;
import com.app.service.api.DaegufoodService;

@Service
public class DaegufoodServiceImpl implements DaegufoodService {

	@Autowired
	DaegufoodDAO daegufoodDAO;
	
	@Autowired
	StoreDAO storeDAO;

	public List<Store> saveDaegufoodStores() {

		String jsonText = daegufoodDAO.getDaegufood();
		List<Store> storeList = new ArrayList<>();

		try {

			JSONParser jsonParser = new JSONParser();
			JSONObject jsonObj = (JSONObject) jsonParser.parse(jsonText);
			JSONArray dataArr = (JSONArray) jsonObj.get("data");

			for (Object obj : dataArr) {
				JSONObject item = (JSONObject) obj;

				// store 테이블
				Store store = new Store();
				store.setStoreName(convertValueToString(item.get("BZ_NM")));
				store.setAddress(convertValueToString(item.get("GNG_CS")));
				store.setBookingState(convertValueToString(item.get("BKN_YN")));
				
				storeDAO.saveDaegufoodStores(store);

				// storeDetail 테이블
				StoreDetail storeDetail = new StoreDetail();
				
//				System.out.println("디테일입니다");
//				System.out.println(store.getId());
				
				storeDetail.setStoreId(store.getId());
				storeDetail.setTel(convertValueToString(item.get("TLNO")));
				storeDetail.setAddressInfo(convertValueToString(item.get("SBW")));
				storeDetail.setRuntime(convertValueToString(item.get("MBZ_HR")));
				storeDetail.setMenuDesc(convertValueToString(item.get("SMPL_DESC")));

				// 오픈시간, 마감시간 구분
				String mbzHr = convertValueToString(item.get("MBZ_HR"));
				int openTime = -1;
				int closeTime = -1;

				if (mbzHr != null && mbzHr.contains("~")) {
					String[] times = mbzHr.split(" ~ ");
					if (times.length == 2) {
						try {
							openTime = Integer.parseInt(times[0].split(":")[0]); // "09:00" -> "09"
							closeTime = Integer.parseInt(times[1].split(":")[0]); // "21:00" -> "21"
						} catch (NumberFormatException e) {
							e.printStackTrace();
						}
					}
				}

				storeDetail.setOpenTime(openTime);
				storeDetail.setCloseTime(closeTime);

				storeDAO.saveDaegufoodStoreDetail(storeDetail);
				
				
				// 메뉴 리스트 저장
				String menuRaw = convertValueToString(item.get("MNU"));

				if (menuRaw != null && !menuRaw.isEmpty()) {
					String[] menuItems = menuRaw.split("<br />");

					for (String menuItem : menuItems) {
						menuItem = menuItem.trim();

						if (!menuItem.isEmpty()) {
							String[] splitMenuItem = menuItem.split("\\s+(?=\\d)");
							
							 String menuName = splitMenuItem[0];
					         double price = 0.0;

							// 배열의 길이가 2 이상일 때만 메뉴와 가격을 처리
							if (splitMenuItem.length > 1) {
								
								try {
									price = parsePrice(splitMenuItem[1]);
									
									if(price < 2000) {
										price = 0.0;
									}
								} catch (NumberFormatException e) {
									price = 0.0;
								}
							}

							Menu menu = new Menu();
							menu.setStoreId(store.getId());
							menu.setMenuName(menuName);
							menu.setPrice(price);
							menu.setMenuType(convertValueToString(item.get("FD_CS")));
							
//							System.out.println("메뉴입니다");
//							System.out.println(store.getId());
							
							storeDAO.saveDaegufoodMenu(menu);
						}									
					}
				}
				storeList.add(store);
			}

		}catch(

	Exception e)
	{
		e.printStackTrace();
	}

	return storeList;

	}

	private String convertValueToString(Object value) {
		return value != null ? value.toString() : "0";
	}

	private double parsePrice(String priceStr) {
		if (priceStr == null || priceStr.isEmpty()) {
			return 0.0;
		}

		// 가격 범위 처리 (ex: "23,000원 ~ 30,000원" → "23,000원")
		if (priceStr.contains("~")) {
			priceStr = priceStr.split("~")[0].trim();
		}

		// 숫자만 남기고 변환
		priceStr = priceStr.replaceAll("[^0-9]", "");
		return priceStr.isEmpty() ? 0.0 : Double.parseDouble(priceStr);
	}
}
