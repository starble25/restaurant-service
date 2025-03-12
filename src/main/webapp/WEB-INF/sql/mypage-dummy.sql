INSERT INTO store (id, user_id, store_name) VALUES (store_pk.NEXTVAL, 2, 'Store A');
INSERT INTO store (id, user_id, store_name) VALUES (store_pk.NEXTVAL, 2, 'Store B');

INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 1, 4, TO_DATE('2025-03-12 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-15 18:00:00', 'YYYY-MM-DD HH24:MI:SS'), '예약완료');
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 1, 2, TO_DATE('2025-03-12 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-16 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), '예약완료');
INSERT INTO booking (id, user_id, store_id, total_people, booking_reg_time, booking_time, state) VALUES
(booking_pk.nextval, 1, 2, 5, TO_DATE('2025-03-12 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2025-03-17 20:00:00', 'YYYY-MM-DD HH24:MI:SS'), '예약중');

