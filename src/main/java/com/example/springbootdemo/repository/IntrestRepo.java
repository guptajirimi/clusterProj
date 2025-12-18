package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springbootdemo.entity.InvoiceEntity;

@Repository
public interface IntrestRepo extends JpaRepository< InvoiceEntity,Integer>{
    @Query("Select i from InvoiceEntity i")
    List<InvoiceEntity> getTax();

    @Query(value = "Select get_random_invoice_no()",nativeQuery=true)
    Long getRandomInvoiceNo();
    
}
