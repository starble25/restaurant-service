-- users 테이블 더미 데이터
INSERT INTO users (id, user_name, password, name, email, tel, user_type)
VALUES
  (USERS_PK.NEXTVAL, 'customer', 'customer', '홍길동', 'hong@example.com', '010-1234-5678', 'CUS'),
  (USERS_PK.NEXTVAL, 'store', 'store', '김철수', 'kim@example.com', '010-9876-5432', 'STR'),
  (USERS_PK.NEXTVAL, 'biz_user', 'pass456', '이상인', 'lee@example.com', '010-3210-4567', 'STR'),
  (USERS_PK.NEXTVAL, 'admin', 'admin', '관리자', 'kim@example.com', '010-0000-0000', 'ADM');

-- store 테이블 더미 데이터
INSERT INTO store (id, user_id, store_name, address, ceo_name, license_number, spoon, rate_total, rate_count)
VALUES
  (STORE_PK.NEXTVAL, 2, '김밥천국', '서울 강남구', '김철수', 12345678, 5, 45, 10),
  (STORE_PK.NEXTVAL, 3, '맛집식당', '서울 마포구', '이영희', 87654321, 4, 30, 7);

-- store_image 테이블 더미 데이터
INSERT INTO store_image (file_name, original_file_name, file_path, url_file_path, store_id)
VALUES
  ('img1.jpg', 'original1.jpg', '/images/', 'http://example.com/images/img1.jpg', 1),
  ('img2.jpg', 'original2.jpg', '/images/', 'http://example.com/images/img2.jpg', 2);

-- store_detail 테이블 더미 데이터
INSERT INTO store_detail (id, store_id, tel, address_info, open_time, close_time, menu_desc, note, main_image)
VALUES
  (STORE_DETAIL_PK.NEXTVAL, 1, '02-111-2222', '서울 강남구 OO동', 9, 22, '김밥, 라면', '주차 가능', 'main1.jpg'),
  (STORE_DETAIL_PK.NEXTVAL, 2, '02-333-4444', '서울 마포구 XX동', 10, 23, '한식, 고기', '예약 필수', 'main2.jpg');

-- menu 테이블 더미 데이터
INSERT INTO menu (id, store_id, menu_name, price, description, menu_type, state)
VALUES
  (MENU_PK.NEXTVAL, 1, '참치김밥', 4500, '참치가 들어간 김밥', 'korean', 'available'),
  (MENU_PK.NEXTVAL, 2, '불고기정식', 12000, '맛있는 불고기와 밥', 'korean', 'available');

-- booking 테이블 더미 데이터
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state)
VALUES
  (BOOKING_PK.NEXTVAL, 1, 1, 2, SYSDATE, TO_DATE('2024-03-10 19:00', 'YYYY-MM-DD HH24:MI'), 'confirmed'),
  (BOOKING_PK.NEXTVAL, 1, 2, 4, SYSDATE, TO_DATE('2024-03-11 18:30', 'YYYY-MM-DD HH24:MI'), 'pending');

-- news 테이블 더미 데이터
INSERT INTO news (id, user_id, image_url, title, content, creation_date, update_date)
VALUES
  (NEWS_PK.NEXTVAL, 2, 'http://example.com/news1.jpg', '새로운 메뉴 출시', '이번 주 신메뉴 출시!', SYSDATE, SYSDATE);

-- notice 테이블 더미 데이터
INSERT INTO notice (id, user_id, title, content, creation_date, update_date)
VALUES
  (NOTICE_PK.NEXTVAL, 2, '운영시간 변경 안내', '다음 주부터 영업시간이 변경됩니다.', SYSDATE, SYSDATE);

-- review 테이블 더미 데이터
INSERT INTO review (id, user_id, store_id, title, content, rate, creation_date, state)
VALUES
  (REVIEW_PK.NEXTVAL, 1, 1, '맛있어요!', '참치김밥이 정말 맛있었습니다.', 5, SYSDATE, 'approved');

-- review_image 테이블 더미 데이터
INSERT INTO review_image (file_name, original_file_name, file_path, url_file_path, review_id)
VALUES
  ('review1.jpg', 'review1_original.jpg', '/reviews/', 'http://example.com/reviews/review1.jpg', 1);

-- booking_menu 테이블 더미 데이터
INSERT INTO booking_menu (id, booking_id, menu_id, quantity)
VALUES
  (BOOKING_MENU_PK.NEXTVAL, 1, 1, 2),
  (BOOKING_MENU_PK.NEXTVAL, 2, 2, 1);
