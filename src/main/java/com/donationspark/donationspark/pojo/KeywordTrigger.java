package com.donationspark.donationspark.pojo;

public class KeywordTrigger extends Trigger {
    public String username;
    public String keywordRequired;

    public KeywordTrigger(String title, String description, String image, String username, String keywordRequired) {
        super(title, description, image);
        this.type = "KeywordTrigger";
        this.username = username;
        this.keywordRequired = keywordRequired;
    }
}
