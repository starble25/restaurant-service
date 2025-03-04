package com.app.dto.menu;

import lombok.Data;

@Data
public class Menu {
    private int id;
    private int storeId;
    private String menuName;
    private double price;
    private String description;
    private String menuType;
    private String state;
}
