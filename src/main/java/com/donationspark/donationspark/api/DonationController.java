package com.donationspark.donationspark.api;

import java.util.List;

import com.donationspark.donationspark.InMemoryDatabase;
import com.donationspark.donationspark.pojo.StockPriceChangeTrigger;
import com.donationspark.donationspark.pojo.Trigger;
import com.donationspark.donationspark.pojo.ViewStockPriceChangeTrigger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
public class DonationController {

    private final RestTemplate restTemplate;
    private final String IEX_API_TOKEN;

    @Autowired
    private InMemoryDatabase database;

    public DonationController() {
        this.restTemplate = new RestTemplate();
        this.IEX_API_TOKEN = System.getenv("IEX_API_TOKEN");
    }

    @GetMapping("/api/triggers")
    public List<Trigger> getAllTriggers() {
        return database.getTriggers();
    }

    @GetMapping("/api/triggers/{triggerId}")
    public Trigger getTrigger(@PathVariable String triggerId) {
        Trigger trigger = database.getTrigger(triggerId);
        if (trigger instanceof StockPriceChangeTrigger) {
            StockPriceChangeTrigger stockPriceChangeTrigger = (StockPriceChangeTrigger) trigger;
            return new ViewStockPriceChangeTrigger(stockPriceChangeTrigger, getRecentStockPricesChange(stockPriceChangeTrigger.ticker));
        }
        return trigger;
    }

    @PostMapping("/api/triggers")
    public void createGenericTrigger(@RequestBody Trigger trigger) {
        database.addTrigger(trigger);
    }

    @PostMapping("/api/triggers/stocks")
    public void createStockTrigger(@RequestBody StockPriceChangeTrigger trigger) {
        database.addTrigger(trigger);
    }

    private static class IEXReturn {
        public double changePercent;
    }

    private double getRecentStockPricesChange(String ticker) {
        String url = "https://cloud.iexapis.com/stable/stock/" + ticker + "/quote?token=" + IEX_API_TOKEN;

        IEXReturn IEXData = restTemplate.getForObject(url, IEXReturn.class);
        return IEXData.changePercent * 100;
    }
}
