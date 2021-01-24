package com.donationspark.donationspark.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DonationController {

    private final RestTemplate restTemplate;
    private final String IEX_API_TOKEN;

    public DonationController(@Value("${donationspark.iex_api_token}") String IEX_API_TOKEN) {
        this.restTemplate = new RestTemplate();
        this.IEX_API_TOKEN = IEX_API_TOKEN;
    }
    
    @GetMapping("/api/test")
    public String test() {
        String url = "https://cloud.iexapis.com/stable/stock/aapl/quote?token=" + IEX_API_TOKEN;

        return restTemplate.getForObject(url, String.class);
    }
}
