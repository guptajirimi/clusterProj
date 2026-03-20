package com.example.springbootdemo.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "hstt_wishlist_user_wise")
public class WishListEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long slno;    

    @Column(name = "itemid")
    private Long itemid;

    @Column(name = "userid")
    private Long userId;

    @Column(name = "entrydate")
    private LocalDate entrydate;

    @PrePersist
    public void prePersist() {
        this.entrydate = LocalDate.now();
    }
}