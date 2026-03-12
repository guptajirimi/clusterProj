package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springbootdemo.entity.OrderItemEntity;

public interface OrderItemRepo extends JpaRepository<OrderItemEntity,Long>{}
 
