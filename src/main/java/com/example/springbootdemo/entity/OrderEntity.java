package com.example.springbootdemo.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="hstt_orders_dtls")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double subTotal;
    private double deliveryCharges;
    private double govCharges;
    private double discount;
    private double grandTotal;
    private Long userId;

    @CreationTimestamp
    @Column(name = "entrydate")
    private LocalDateTime entrydate;
    
   @OneToMany(mappedBy="order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItemEntity> items;
     
}