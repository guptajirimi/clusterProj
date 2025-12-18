package com.example.springbootdemo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootdemo.entity.InvoiceEntity;
import com.example.springbootdemo.repository.IntrestRepo;

@Service
public class InvoiceService {

@Autowired
IntrestRepo  intrestRepo;

    public  List<InvoiceEntity>  getGST() {
     return   intrestRepo.getTax();
    }

    public Long getRandomInvoiceNo() {
          return   intrestRepo.getRandomInvoiceNo();
    }

    
    
}
