package com.example.springbootdemo.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "hstt_invoice_dtl")
public class InvoiceDtlEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long id;
private String strCostomerName;
private LocalDate strInvoiceDate;
private Double strTotalAmount;
@OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
private List<InvoiceItemDtlEntity> items;
private String strStoreName;
private String strIssuerName;
private String strAddress;
private String strPhonenumber;


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
public void setItems(List<InvoiceItemDtlEntity> items) {
    this.items = items;
}
public List<InvoiceItemDtlEntity> getItems() {
    return items;
}
public String getStrStoreName() {
	return strStoreName;
}
public void setStrStoreName(String strStoreName) {
	this.strStoreName = strStoreName;
}
public String getStrIssuerName() {
	return strIssuerName;
}
public void setStrIssuerName(String strIssuerName) {
	this.strIssuerName = strIssuerName;
}
public String getStrAddress() {
	return strAddress;
}
public void setStrAddress(String strAddress) {
	this.strAddress = strAddress;
}
public String getStrPhonenumber() {
	return strPhonenumber;
}
public void setStrPhonenumber(String strPhonenumber) {
	this.strPhonenumber = strPhonenumber;
}

}
