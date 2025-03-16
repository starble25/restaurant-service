INSERT INTO store (id, user_id, store_name) VALUES (store_pk.NEXTVAL, 2, 'Store A');
INSERT INTO store (id, user_id, store_name) VALUES (store_pk.NEXTVAL, 3, 'Store B');

INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 1, 4, TO_DATE('2025-03-12 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-15 18:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'FIN');
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 1, 2, TO_DATE('2025-03-12 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-16 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'FIN');
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 2, 5, TO_DATE('2025-03-12 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-17 20:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'CFM');
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 1, 2, TO_DATE('2025-03-12 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-18 17:30:00', 'YYYY-MM-DD HH24:MI:SS'), 'CFM');


UPDATE store
SET user_id = 3
WHERE user_id = 2
AND store_name = 'Store B';

select * from store;
select * from booking;


UPDATE store
SET 
    store_name = '달식당', 
    address = '충청남도 천안시 동남구 대흥로 215', 
    ceo_name = '박철수', 
    license_number = '1234567890', 
    spoon = 3, 
    rate_count = 15, 
    rate_total = 71
WHERE id = 1;


INSERT INTO store_detail ( id, store_id, tel, address_info, open_time, close_time, menu_desc, note, main_image ) 
VALUES (
    store_detail_pk.nextval, 
    1, 
    '010-1234-5678', 
    '충청남도 천안시 123번지', 
    900, 
    2100, 
    '일식', 
    '오마카세급 일식 전문. 제주도에서 직접 공수한 최고급 품질만 사용합니다.', 
    '/images/store_main.jpg' 
);