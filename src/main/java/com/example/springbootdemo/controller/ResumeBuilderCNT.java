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

        fb.setNameHolder((String) json.get("nameHolder"));
        fb.setShortNote((String) json.get("shortNote"));
        fb.setEmail((String) json.get("Email"));
        fb.setAddress((String) json.get("address"));
        fb.setPhoneno((String) json.get("phone"));

        // ---- LISTS FROM JSON ----
        List<Map<String, Object>> expList =
                (List<Map<String, Object>>) json.get("expList");

        List<Map<String, Object>> educationList =
                (List<Map<String, Object>>) json.get("educationList");

        List<String> skillList =
                (List<String>) json.get("skillList");

        List<String> personalprojectList =
                (List<String>) json.get("personalprojectList");

        List<String> achivementList =
                (List<String>) json.get("achivementList");

        List<String> languageList =
                (List<String>) json.get("languageList");

        // ---- EXPERIENCE HANDLING ----
        for (Map<String, Object> c : expList) {
            ExperienceEntity expEntity = new ExperienceEntity();
            expEntity.setOrganisation((String) c.get("organisation"));
            expEntity.setStartDate((String) c.get("joiningDate"));
            expEntity.setEndDate((String) c.get("endingDate"));

            List<String> accomplishmentList =
                    (List<String>) c.get("accomplishment");
            expEntity.setAccomplishmentList(accomplishmentList);
            expEntity.setResume(fb); // set parent

            fb.getExperienceList().add(expEntity);
        }

        // ---- EDUCATION HANDLING ----
        for (Map<String, Object> c : educationList) {
            EducationEntity eduEntity = new EducationEntity();
            eduEntity.setOrganisation((String) c.get("organisation"));
            eduEntity.setJoiningDate((String) c.get("joiningDateEdu"));
            eduEntity.setEndingDate((String) c.get("endingDateEdu"));
            eduEntity.setCourse((String) c.get("course"));
            eduEntity.setResume(fb); // set parent

            fb.getEducationList().add(eduEntity);
        }

        // ---- SKILLS HANDLING ----
        for (String s : skillList) {
            SkillEntity skillEntity = new SkillEntity();
            skillEntity.setSkillName(s);
            skillEntity.setResume(fb);
            fb.getSkillList().add(skillEntity);
        }

        // ---- PERSONAL PROJECTS HANDLING ----
        for (String p : personalprojectList) {
            PersonalProjectEntity pe = new PersonalProjectEntity();
            pe.setProjectName(p);
            pe.setResume(fb);
            fb.getPersonalProjectList().add(pe);
        }

        // ---- ACHIEVEMENTS HANDLING ----
        for (String a : achivementList) {
            AchivementEntity ach = new AchivementEntity();
            ach.setAchivementName(a);
            ach.setResume(fb);
            fb.getAchivementList().add(ach);
        }

        // ---- INTERESTS / LANGUAGES HANDLING ----
        for (String l : languageList) {
            IntrestEntity in = new IntrestEntity();
            in.setIntrestName(l);
            in.setResume(fb);
            fb.getIntrestList().add(in);
        }

        // ---- SAVE ALL TO DATABASE ----
        resumeRepo.save(fb);

        return "OK";
    }
}
