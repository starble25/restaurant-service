package com.app.dto.booking;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class Booking {
    private int id;
    private int userId;
    private int storeId;
    private int totalPeople;
    private Date bookingRegTime; // 예약등록시간
    private Date bookingTime;    // 예약시간
    private String state;
    
    private List<BookingMenu>menuItems;
}
