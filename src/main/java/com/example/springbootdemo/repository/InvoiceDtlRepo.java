package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootdemo.entity.InvoiceDtlEntity;

@Repository
public interface InvoiceDtlRepo extends JpaRepository<InvoiceDtlEntity, Long>{

}
