package com.example.springbootdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/invoice")
public class InvoiceCNT {
    
    @GetMapping("/getGST")
    public String getGST(HttpServletResponse res,HttpServletRequest req){
        InvoiceEntity fb= new InvoiceEntity();
        return "gst";
    }
}
