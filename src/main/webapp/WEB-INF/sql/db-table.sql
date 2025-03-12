-- 테이블 생성
CREATE TABLE users (
  id NUMBER PRIMARY KEY, 
  user_name VARCHAR2(32) UNIQUE, 
  password VARCHAR2(128), 
  name VARCHAR2(32),
  email VARCHAR2(254),
  tel VARCHAR2(20),
  user_type VARCHAR2(20)
);

CREATE TABLE store (
  id NUMBER PRIMARY KEY, 
  user_id NUMBER, 
  store_name VARCHAR2(64), 
  address VARCHAR2(64), 
  ceo_name VARCHAR2(32), 
  license_number NUMBER, 
  spoon NUMBER, 
  rate_total NUMBER, 
  rate_count NUMBER
);

CREATE TABLE store_image (
  file_name VARCHAR2(256) PRIMARY KEY, 
  original_file_name VARCHAR2(256), 
  file_path VARCHAR2(256), 
  url_file_path VARCHAR2(256), 
  store_id NUMBER
);

CREATE TABLE store_detail (
  id NUMBER PRIMARY KEY, 
  store_id NUMBER, 
  tel VARCHAR2(20), 
  address_info VARCHAR2(255), 
  open_time NUMBER,
  close_time NUMBER, 
  menu_desc VARCHAR2(255), 
  note VARCHAR2(255), 
  main_image VARCHAR2(255)
);

CREATE TABLE menu (
  id NUMBER PRIMARY KEY, 
  store_id NUMBER, 
  menu_name VARCHAR2(64), 
  price NUMBER(10, 2), 
  description VARCHAR2(512), 
  menu_type VARCHAR2(12), 
  state VARCHAR2(12)
);

CREATE TABLE booking (
  id NUMBER PRIMARY KEY, 
  user_id NUMBER, 
  store_id NUMBER, 
  total_people NUMBER, 
  booking_reg_time DATE, -- 예약등록시간 
  booking_time DATE,     -- 예약시간 
  state VARCHAR2(12)
);

CREATE TABLE news (
  id NUMBER PRIMARY KEY, 
  user_id NUMBER, 
  image_url VARCHAR2(255), 
  title VARCHAR2(255), 
  content VARCHAR2(255), 
  creation_date DATE, 
  update_date DATE
);

CREATE TABLE notice (
  id NUMBER PRIMARY KEY, 
  user_id NUMBER, 
  title VARCHAR2(255), 
  content VARCHAR2(255), 
  creation_date DATE, 
  update_date DATE
);

CREATE TABLE review (
  id NUMBER PRIMARY KEY, 
  user_id NUMBER, 
  store_id NUMBER, 
  title VARCHAR2(255), 
  content VARCHAR2(255), 
  rate NUMBER, 
  creation_date DATE, 
  state VARCHAR2(12)
);

CREATE TABLE review_image (
  file_name VARCHAR2(256) PRIMARY KEY, 
  original_file_name VARCHAR2(256), 
  file_path VARCHAR2(256), 
  url_file_path VARCHAR2(256), 
  review_id NUMBER
);

CREATE TABLE booking_menu (
  id NUMBER PRIMARY KEY, 
  booking_id NUMBER, 
  menu_id NUMBER, 
  quantity NUMBER
);

--
--
--

-- 시퀀스 생성
CREATE SEQUENCE USERS_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE STORE_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE STORE_DETAIL_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE MENU_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE BOOKING_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE NEWS_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE NOTICE_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE REVIEW_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE BOOKING_MENU_PK
START WITH 1
INCREMENT BY 1
NOCYCLE;



-- users 테이블 조회
SELECT * FROM users;
-- store 테이블 조회
SELECT * FROM store;
-- store_image 테이블 조회
SELECT * FROM store_image;
-- store_detail 테이블 조회
SELECT * FROM store_detail;
-- menu 테이블 조회
SELECT * FROM menu;
-- booking 테이블 조회
SELECT * FROM booking;
-- news 테이블 조회
SELECT * FROM news;
-- notice 테이블 조회
SELECT * FROM notice;
-- review 테이블 조회
SELECT * FROM review;
-- review_image 테이블 조회
SELECT * FROM review_image;
-- booking_menu 테이블 조회
SELECT * FROM booking_menu;
