package com.example.springbootdemo.entity;

import java.util.List;

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

   @OneToMany(mappedBy="order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItemEntity> items;
     
}