package com.example.springbootdemo.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.Service.InvoiceService;
import com.example.springbootdemo.entity.InvoiceEntity;
import com.example.springbootdemo.entity.InvoiceItemEntity;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@RestController
@RequestMapping("/invoice")
public class InvoiceCNT {

    @Autowired
    InvoiceService invoiceService;

    @GetMapping("/getGST")
    public List<InvoiceEntity> getGST() {
        return invoiceService.getGST();
    }

    @GetMapping("/getRandomInvoiceNo")
    public Long getRandomInvoiceNo() {
        
        Long invoiceno= invoiceService.getRandomInvoiceNo();
        System.out.println(invoiceno);
        return invoiceno;
    }
    @GetMapping("/getItemList")
    public List<InvoiceItemEntity> getItemList() {
        
        return invoiceService.getItemList();
        
    }

    
}
