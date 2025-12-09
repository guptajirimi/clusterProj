package com.example.springbootdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="gblt_resume_mst")
public class ResumeBuilderEntity {
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private long  id;
}
