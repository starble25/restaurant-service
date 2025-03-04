package com.app.dto.booking;

import lombok.Data;

@Data
public class BookingMenu {
    private int id;
    private int bookingId;
    private int menuId;
    private int quantity;
}
