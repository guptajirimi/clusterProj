package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springbootdemo.entity.OrderEntity;

public interface OrderRepo extends JpaRepository<OrderEntity, Long> {

}