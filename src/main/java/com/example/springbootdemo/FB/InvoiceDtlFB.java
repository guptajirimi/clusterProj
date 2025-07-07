package com.example.springbootdemo.FB;

import java.time.LocalDate;
import java.util.List;

public class InvoiceDtlFB {
	private Long id;
	private String strCostomerName;
	private LocalDate strInvoiceDate;
	private Double strTotalAmount;
	 private List<InvoiceItemDtlFB> items;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStrCostomerName() {
		return strCostomerName;
	}
	public void setStrCostomerName(String strCostomerName) {
		this.strCostomerName = strCostomerName;
	}
	public LocalDate getStrInvoiceDate() {
		return strInvoiceDate;
	}
	public void setStrInvoiceDate(LocalDate strInvoiceDate) {
		this.strInvoiceDate = strInvoiceDate;
	}
	public Double getStrTotalAmount() {
		return strTotalAmount;
	}
	public void setStrTotalAmount(Double strTotalAmount) {
		this.strTotalAmount = strTotalAmount;
	}
	public List<InvoiceItemDtlFB> getItems() {
		return items;
	}
	public void setItems(List<InvoiceItemDtlFB> items) {
		this.items = items;
	}
	
	
}
