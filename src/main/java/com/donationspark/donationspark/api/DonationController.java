package com.donationspark.donationspark.api;

import java.util.List;

import com.donationspark.donationspark.InMemoryDatabase;
import com.donationspark.donationspark.pojo.StockPriceChangeTrigger;
import com.donationspark.donationspark.pojo.Trigger;
import com.donationspark.donationspark.pojo.ViewStockPriceChangeTrigger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

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
    
    @GetMapping("/api/test")
    public IEXReturn test() {
        String url = "https://cloud.iexapis.com/stable/stock/aapl/quote?token=" + IEX_API_TOKEN;

        return restTemplate.getForObject(url, IEXReturn.class);
    }

    @GetMapping("/api/triggers")
    public List<Trigger> getAllTriggers() {
        List<Trigger> triggers = database.getTriggers();

        for (int i = 0; i < triggers.size(); i += 1) {
            Trigger trigger = triggers.get(i);
            if (trigger instanceof StockPriceChangeTrigger) {
                StockPriceChangeTrigger stockPriceChangeTrigger = (StockPriceChangeTrigger) trigger;
                triggers.set(i, new ViewStockPriceChangeTrigger(stockPriceChangeTrigger, 0.0));
            }
        }

        return triggers;
    }

    @GetMapping("/api/triggers/{triggerId}")
    public Trigger getTrigger(@PathVariable String triggerId) {
        return database.getTrigger(triggerId);
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
}
