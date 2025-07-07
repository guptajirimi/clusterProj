package com.example.springbootdemo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.FB.InvoiceDtlFB;
import com.example.springbootdemo.FB.InvoiceItemDtlFB;
import com.example.springbootdemo.entity.InvoiceDtlEntity;
import com.example.springbootdemo.entity.InvoiceItemDtlEntity;
import com.example.springbootdemo.repository.InvoiceDtlRepo;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceCNT {
@Autowired
private InvoiceDtlRepo invoiceRepo;

@PostMapping("/create")
public InvoiceDtlEntity createInvoice(@RequestBody InvoiceDtlFB fb) {
	InvoiceDtlEntity invoice=new InvoiceDtlEntity();
	invoice.setStrCostomerName(fb.getStrCostomerName());
	invoice.setStrInvoiceDate(fb.getStrInvoiceDate());
	invoice.setStrTotalAmount(fb.getStrTotalAmount());
	
	 List<InvoiceItemDtlEntity> items = new ArrayList<>();
     for (InvoiceItemDtlFB itemFB : fb.getItems()) {
         InvoiceItemDtlEntity item = new InvoiceItemDtlEntity();
         item.setStrItemName(itemFB.getStrItemName());
         item.setStrQuantity(itemFB.getStrQuantity());
         item.setStrPrice(itemFB.getStrPrice());
         item.setInvoice(invoice);
         items.add(item);
     }
     invoice.setItems(items);
     return invoiceRepo.save(invoice);
}

}
