package com.example.springbootdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "gblt_resume_achivement_dtl")
public class AchivementEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String achivementName;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    private ResumeBuilderEntity resume;

    /* getters & setters */
}
