package com.example.springbootdemo.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="hstt_tax_dtl")
public class InvoiceEntity {
    @Id
    private int SNO;

    @Column(nullable=false)
    private LocalDateTime entry_date;

    private String Tax_name;

    @Column(columnDefinition=" int defult 0")
    private int Tax_value;

    public int getSNO() {
        return SNO;
    }

    public void setSNO(int SNO) {
        this.SNO = SNO;
    }

    public LocalDateTime getEntry_date() {
        return entry_date;
    }

    public void setEntry_date(LocalDateTime entry_date) {
        this.entry_date = entry_date;
    }

    public String getTax_name() {
        return Tax_name;
    }

    public void setTax_name(String Tax_name) {
        this.Tax_name = Tax_name;
    }

    public int getTax_value() {
        return Tax_value;
    }

    public void setTax_value(int Tax_value) {
        this.Tax_value = Tax_value;
    }

     

    
}
