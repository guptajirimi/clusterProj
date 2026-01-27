package com.example.springbootdemo.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootdemo.entity.InvoiceEntity;
import com.example.springbootdemo.entity.InvoiceItemEntity;
import com.example.springbootdemo.repository.IntrestRepo;
import com.example.springbootdemo.repository.InvoiceItemRepo;

@Service
public class InvoiceService {

    @Autowired
    IntrestRepo intrestRepo;

    @Autowired
    InvoiceItemRepo invoiceItemrepo;

    public List<InvoiceEntity> getGST() {
        return intrestRepo.getTax();
    }

    public Long getRandomInvoiceNo() {
        return intrestRepo.getRandomInvoiceNo();
    }

    public List<InvoiceItemEntity> getItemList() {

        return invoiceItemrepo.getItemList();
    }

 
}
    

