package com.donationspark.donationspark.pojo;

public class ViewStockPriceChangeTrigger extends StockPriceChangeTrigger {
    public double mostRecentPriceChange;

    public ViewStockPriceChangeTrigger(StockPriceChangeTrigger trigger, double mostRecentPriceChange) {
        super(trigger.title, trigger.description, trigger.image, trigger.ticker, trigger.percentChangeRequired);
        this.mostRecentPriceChange = mostRecentPriceChange;
    }
}
