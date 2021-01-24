package com.donationspark.donationspark;

import java.util.ArrayList;
import java.util.List;

import com.donationspark.donationspark.pojo.KeywordTrigger;
import com.donationspark.donationspark.pojo.StockPriceChangeTrigger;
import com.donationspark.donationspark.pojo.Trigger;

import org.springframework.stereotype.Component;

@Component
public class InMemoryDatabase {
    
    private List<Trigger> triggers;

    public InMemoryDatabase() {
        this.triggers = new ArrayList<>();

        Trigger stockMarketTrigger = new StockPriceChangeTrigger("Stock Market", "Whenever the S&P 500 goes up 2% in one day.", "https://blog.galvanize.com/wp-content/uploads/2020/01/Can-data-science-predict-the-stock-market-.jpg", "VOO", 2.0);
        stockMarketTrigger.stars = 3209;
        triggers.add(stockMarketTrigger);

        Trigger starbucksTrigger = new Trigger("Starbucks", "Whenever you buy something at Starbucks.", "https://cdn.vox-cdn.com/thumbor/KFoJMZYDtwzhn3aOEFL__xRq838=/0x0:6000x4000/1200x800/filters:focal(1514x1652:2474x2612)/cdn.vox-cdn.com/uploads/chorus_image/image/64700799/shutterstock_1075910024.0.jpg");
        starbucksTrigger.stars = 6548;
        triggers.add(starbucksTrigger);

        Trigger elonMuskTrigger = new KeywordTrigger("Elon Musk", "Whenever Elon Musk tweets about Mars.", "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", "@elonmusk", "Mars");
        elonMuskTrigger.stars = 4278;
        triggers.add(elonMuskTrigger);

        Trigger aaplTrigger = new StockPriceChangeTrigger("Apple Stock", "Whenever Apple stock goes up 1% in one day.", "https://i.insider.com/5cf672a311e205334626ab19?width=750&format=jpeg&auto=webp", "AAPL", 1.0);
        aaplTrigger.stars = 9875;
        triggers.add(aaplTrigger);

        Trigger gasTrigger = new Trigger("Gasoline", "Whenever you fill up your car with gas.", "https://cdn.abcotvs.com/dip/images/4471641_101218-kgo-gas-station-img_Image_17-33-24,22.jpg?w=1600");
        gasTrigger.stars = 4021;
        triggers.add(gasTrigger);
    }

    public List<Trigger> getTriggers() {
        return triggers;
    }

    public Trigger getTrigger(String triggerId) {
        return triggers.stream().filter(trigger -> trigger.id.equals(triggerId)).findFirst().get();
    }

    public void addTrigger(Trigger trigger) {
        triggers.add(trigger);
    }
}
