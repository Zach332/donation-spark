package com.donationspark.donationspark.pojo;

import java.util.UUID;

public class Trigger {
    public String id;
    public String title;
    public String type;
    public String description;
    public String image;

    public Trigger(String title, String description, String image) {
        this.id = UUID.randomUUID().toString();
        this.title = title;
        this.type = "Trigger";
        this.description = description;
        this.image = image;
    }
}
