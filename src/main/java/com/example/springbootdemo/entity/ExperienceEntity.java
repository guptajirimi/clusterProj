package com.example.springbootdemo.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "gblt_resume_exp_dtl")
public class ExperienceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String organisation;
    private String startDate;
    private String endDate;
    private String responsibility;
    List<String> accomplishmentList=new ArrayList<>();
    
    @ManyToOne
    @JoinColumn(name = "resume_id")
    private ResumeBuilderEntity resume;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrganisation() {
        return organisation;
    }

    public void setOrganisation(String organisation) {
        this.organisation = organisation;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getResponsibility() {
        return responsibility;
    }

    public void setResponsibility(String responsibility) {
        this.responsibility = responsibility;
    }

    public ResumeBuilderEntity getResume() {
        return resume;
    }

    public void setResume(ResumeBuilderEntity resume) {
        this.resume = resume;
    }

    public List<String> getAccomplishmentList() {
        return accomplishmentList;
    }

    public void setAccomplishmentList(List<String> accomplishmentList) {
        this.accomplishmentList = accomplishmentList;
    }

     

}
