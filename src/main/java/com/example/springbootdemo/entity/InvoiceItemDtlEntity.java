package com.example.springbootdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "hstt_invoice_item_dtl")
public class InvoiceItemDtlEntity {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY) // or GenerationType.AUTO
	    private Long id;
	private String strItemName;
    private Integer strQuantity;
    private Double StrPrice;
    @ManyToOne
    @JoinColumn(name = "invoice_id")
    private InvoiceDtlEntity invoice;

    
	public String getStrItemName() {
		return strItemName;
	}
	public void setStrItemName(String strItemName) {
		this.strItemName = strItemName;
	}
	public Integer getStrQuantity() {
		return strQuantity;
	}
	public void setStrQuantity(Integer strQuantity) {
		this.strQuantity = strQuantity;
	}
	public Double getStrPrice() {
		return StrPrice;
	}
	public void setStrPrice(Double strPrice) {
		StrPrice = strPrice;
	}
    
	public void setInvoice(InvoiceDtlEntity invoice) {
	    this.invoice = invoice;
	}
	public InvoiceDtlEntity getInvoice() {
	    return invoice;
	}

    

}
