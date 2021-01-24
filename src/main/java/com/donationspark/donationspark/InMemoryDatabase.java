package com.donationspark.donationspark;

import java.util.ArrayList;
import java.util.List;

import com.donationspark.donationspark.pojo.Trigger;

import org.springframework.stereotype.Component;

@Component
public class InMemoryDatabase {
    
    private List<Trigger> triggers;

    public InMemoryDatabase() {
        this.triggers = new ArrayList<>();
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
