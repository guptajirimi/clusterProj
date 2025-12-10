package com.example.springbootdemo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.example.springbootdemo.entity.EducationEntity;
import com.example.springbootdemo.entity.ExperienceEntity;
import com.example.springbootdemo.entity.ResumeBuilderEntity;

@RestController
@RequestMapping("/resumeBuilder")
public class ResumeBuilderCNT {

    @PostMapping("/insert")
    public String insert(@RequestBody Map<String, Object> json) {

        // ---- BASIC FIELDS ----
        ResumeBuilderEntity fb = new ResumeBuilderEntity();

        String nameHolder = (String) json.get("nameHolder");
        String shortNote  = (String) json.get("shortNote");
        String email      = (String) json.get("Email");
        String address    = (String) json.get("address");
        String phone      = (String) json.get("phone");

        fb.setNameHolder(nameHolder);
        fb.setShortNote(shortNote);
        fb.setEmail(email);
        fb.setAddress(address);
        fb.setPhoneno(phone);

        // ---- LISTS FROM JSON ----
        List<Map<String, Object>> expList =
                (List<Map<String, Object>>) json.get("expList");

        List<Map<String, Object>> educationList =
                (List<Map<String, Object>>) json.get("educationList");

        List<Map<String, Object>> skillList =
                (List<Map<String, Object>>) json.get("skillList");

        List<Map<String, Object>> personalprojectList =
                (List<Map<String, Object>>) json.get("personalprojectList");

        List<Map<String, Object>> achivementList =
                (List<Map<String, Object>>) json.get("achivementList");

        List<Map<String, Object>> languageList =
                (List<Map<String, Object>>) json.get("languageList");

        // ---- EXPERIENCE HANDLING ----
        List<String> allAccomplishments = new ArrayList<>();

        for (Map<String, Object> c : expList) {
                ExperienceEntity expEntity=new ExperienceEntity();
            String organisation = (String) c.get("organisation");
            String joiningDate  = (String) c.get("joiningDate");
            String endingDate   = (String) c.get("endingDate");

            List<String> accomplishmentList =
                    (List<String>) c.get("accomplishment");

            if (accomplishmentList != null) {
                allAccomplishments.addAll(accomplishmentList);
            }
            expEntity.setOrganisation(organisation);
            expEntity.setStartDate(joiningDate);
            expEntity.setEndDate(endingDate);

            expEntity.setAccomplishmentList(accomplishmentList);
            
        }

        String[] arr = allAccomplishments.toArray(new String[0]);

        // ---- EDUCATION HANDLING ----
        for (Map<String, Object> c : educationList) {
                EducationEntity eduEntity=new EducationEntity();
            String organisation    = (String) c.get("organisation");
            String joiningDateEdu  = (String) c.get("joiningDateEdu");
            String endingDateEdu   = (String) c.get("endingDateEdu");
            String course          = (String) c.get("course");

             eduEntity.setOrganisation(organisation);
             eduEntity.setJoiningDate(joiningDateEdu);
             eduEntity.setCourse(course);
             eduEntity.setEndingDate(endingDateEdu);

        }

        return "OK";
    }
}
