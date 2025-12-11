package com.example.springbootdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "gblt_resume_intrest_dtl")
public class IntrestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String intrestName;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    private ResumeBuilderEntity resume;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIntrestName() {
        return intrestName;
    }

    public void setIntrestName(String intrestName) {
        this.intrestName = intrestName;
    }

    public ResumeBuilderEntity getResume() {
        return resume;
    }

    public void setResume(ResumeBuilderEntity resume) {
        this.resume = resume;
    }

    /* getters & setters */
    
}
