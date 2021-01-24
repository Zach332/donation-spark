package com.donationspark.donationspark.pojo;

public class StockPriceChangeTrigger extends Trigger {
    public String ticker;
    public double percentChangeRequired;

    public StockPriceChangeTrigger(String title, String description, String image, String ticker, double percentChangeRequired) {
        super(title, description, image);
        this.type = "StockPriceChangeTrigger";
        this.ticker = ticker;
        this.percentChangeRequired = percentChangeRequired;
    }
}
