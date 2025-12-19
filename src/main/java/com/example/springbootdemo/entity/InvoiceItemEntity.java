package com.example.springbootdemo.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hstt_drugbrand_mst")
public class InvoiceItemEntity {

     
    @Column(name = "entry_date", nullable = false)
    private LocalDate entryDate;

    @Column(name = "item_name")
    private String itemName;
    
    @Id
    @Column(name = "item_value")
    private String itemValue;

   

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemValue() {
        return itemValue;
    }

    public void setItemValue(String itemValue) {
        this.itemValue = itemValue;
    }
}
