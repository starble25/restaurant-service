--메뉴테이블 타입 수정
ALTER TABLE menu
MODIFY menu_type VARCHAR2(100);

ALTER TABLE menu
MODIFY menu_name VARCHAR2(500);

--storeDetail 테이블 타입 수정
ALTER TABLE store_detail
MODIFY menu_desc VARCHAR2(1000);


--runtime 컬럼 추가
ALTER TABLE store_detail ADD runtime VARCHAR2(255);

--예약가능여부 컬럼 추가
ALTER TABLE store ADD bookingState VARCHAR2(255);

--유니크키 설정
ALTER TABLE store
ADD CONSTRAINT store_name_unique UNIQUE (store_name);

--유니크키 설정
ALTER TABLE store_detail
ADD CONSTRAINT store_tel_unique UNIQUE (store_id, tel);

--유니크키 설정
ALTER TABLE menu
ADD CONSTRAINT menu_store_name_unique UNIQUE (store_id, menu_name);