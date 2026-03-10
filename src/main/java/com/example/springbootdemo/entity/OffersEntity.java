package com.example.springbootdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name = "hstt_offerlist_food")
public class OffersEntity {
 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int elegiLityCreteria;
    private int discount;
    private boolean selected;
}
