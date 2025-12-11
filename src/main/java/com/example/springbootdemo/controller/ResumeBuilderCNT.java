package com.example.springbootdemo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springbootdemo.entity.AchivementEntity;
import com.example.springbootdemo.entity.EducationEntity;
import com.example.springbootdemo.entity.ExperienceEntity;
import com.example.springbootdemo.entity.IntrestEntity;
import com.example.springbootdemo.entity.PersonalProjectEntity;
import com.example.springbootdemo.entity.ResumeBuilderEntity;
import com.example.springbootdemo.entity.SkillEntity;
import com.example.springbootdemo.repository.ResumeBuilderRepo;

@RestController
@RequestMapping("/resumeBuilder")
public class ResumeBuilderCNT {

    @Autowired
    private ResumeBuilderRepo resumeRepo; // Inject repository

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
        List<ExperienceEntity> experienceEntities = new ArrayList<>();
        for (Map<String, Object> c : expList) {
            ExperienceEntity expEntity = new ExperienceEntity();
            String organisation = (String) c.get("organisation");
            String joiningDate  = (String) c.get("joiningDate");
            String endingDate   = (String) c.get("endingDate");

            List<String> accomplishmentList =
                    (List<String>) c.get("accomplishment");

            expEntity.setOrganisation(organisation);
            expEntity.setStartDate(joiningDate);
            expEntity.setEndDate(endingDate);
            expEntity.setAccomplishmentList(accomplishmentList);
            expEntity.setResume(fb); // set parent

             fb.getExperienceList().add(expEntity);
        }
         

        // ---- EDUCATION HANDLING ----
        List<EducationEntity> educationEntities = new ArrayList<>();
        for (Map<String, Object> c : educationList) {
            EducationEntity eduEntity = new EducationEntity();
            String organisation    = (String) c.get("organisation");
            String joiningDateEdu  = (String) c.get("joiningDateEdu");
            String endingDateEdu   = (String) c.get("endingDateEdu");
            String course          = (String) c.get("course");

            eduEntity.setOrganisation(organisation);
            eduEntity.setJoiningDate(joiningDateEdu);
            eduEntity.setCourse(course);
            eduEntity.setEndingDate(endingDateEdu);
            eduEntity.setResume(fb); // set parent
            fb.getEducationList().add(eduEntity);
            educationEntities.add(eduEntity);
        }
         

        // ---- SKILLS HANDLING ----
        List<SkillEntity> skillEntities = new ArrayList<>();
        for (Map<String, Object> c : skillList) {
            SkillEntity skillEntity = new SkillEntity();
            String skillName = (String) c.get("skillName");
            skillEntity.setSkillName(skillName);
            skillEntity.setResume(fb); // set parent
            fb.getSkillList().add(skillEntity);

        }
        // ---personal proj
        List<PersonalProjectEntity> personalProjectEntities=new ArrayList<>();
        for(Map<String,Object> c:personalprojectList){
            PersonalProjectEntity personalProjectEntity=new PersonalProjectEntity();
            personalProjectEntity.setProjectName((String) c.get("personalprojectList"));
            personalProjectEntity.setResume(fb);
             fb.getPersonalProjectList().add(personalProjectEntity);
        }
        List<AchivementEntity> achivementEntitiy=new ArrayList<>();
        for(Map<String,Object> c:achivementEntitiy){
            
        }
        List<IntrestEntity> intrestEntitiy=new ArrayList<>();
         

            fb.setExperienceList(experienceEntities);
            fb.setEducationList(educationEntities);
            fb.setSkillList(skillEntities);
            resumeRepo.save(fb);  

        return "OK";
    }
}
