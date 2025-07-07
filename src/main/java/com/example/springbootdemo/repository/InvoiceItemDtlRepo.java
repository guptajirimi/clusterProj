package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootdemo.entity.InvoiceItemDtlEntity;

@Repository
public interface InvoiceItemDtlRepo extends JpaRepository<InvoiceItemDtlEntity, Long>{

}
