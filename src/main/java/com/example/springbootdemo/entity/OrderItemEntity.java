package com.example.springbootdemo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="hstt_orders_item_dtls")
public class OrderItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long itemId;
    private String name;
    private double cost;
    private int qty;
    private double total;
   private String image; 
    @ManyToOne
    @JoinColumn(name="order_id")
    private OrderEntity order;

}
