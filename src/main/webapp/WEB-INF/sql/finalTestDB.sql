INSERT INTO store (id, user_id, store_name, address, ceo_name, license_number, spoon, rate_count, rate_total, bookingState)
VALUES (store_pk.nextval, 2, '달식당', '충청남도 천안시 동남구 대흥로 215', '박철수', '1234567890', 3, 15, 71, '가능');

select * from store;



INSERT INTO store_detail ( id, store_id, tel, address_info, open_time, close_time, menu_desc, note, main_image, runtime ) 
VALUES (
    store_detail_pk.nextval, 
    1, 
    '010-1234-5678', 
    '충청남도 천안시 123번지', 
    900, 
    2100, 
    '오마카세급 일식 전문. 제주도에서 직접 공수한 최고급 품질만 사용합니다.',
    '세상에서 제일 맛있는 일식을 선보입니다. 산지직송 재료를 활용한 한국에서 유일하게 맛 볼 수 있습니다.',
    '/images/store_main.jpg',
    '09:00 ~ 18:00'
);





INSERT INTO menu (id, store_id, menu_name, price, description, menu_type, state) 
VALUES (menu_pk.nextval, 1, '매콤우동', 8000, '매콤한 일본식 우동', '일식', 'SALE');

INSERT INTO menu (id, store_id, menu_name, price, description, menu_type, state) 
VALUES (menu_pk.nextval, 1, '새우튀김', 7500, '제주도산 바삭바삭한 킹새우튀김', '일식', 'SALE');

INSERT INTO menu (id, store_id, menu_name, price, description, menu_type, state) 
VALUES (menu_pk.nextval, 1, '초밥', 15000, '제철 생선으로 만드는 초밥', '일식', 'SALE');



select * from store;

select * from store_detail;
select * from menu;