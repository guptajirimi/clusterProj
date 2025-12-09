package com.example.springbootdemo.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "gblt_resume_mst")
public class ResumeBuilderEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long resumeid;

  private String nameHolder;
  private String shortNote;
  private String Email;
  private String address;
  private String phoneno;

  // mapped by resume field inn
  // different etity claas and cascade
  // means if some activity is
  // performent to the mai enty it will
  // automatically update linked tables
  // and orphanremoval if something is
  // remove from froentend it wil
  // automatically removed from the
  // backend
  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<ExperienceEntity> experienceList;

  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<EducationEntity> educationList;

  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<SkillEntity> skillList;

  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<PersonalProjectEntity> personalProjectList;

  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<AchivementEntity> achivementList;

  @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<IntrestEntity> intrestList;

  public long getResumeid() {
    return resumeid;
  }

  public void setResumeid(long resumeid) {
    this.resumeid = resumeid;
  }

  public String getNameHolder() {
    return nameHolder;
  }

  public void setNameHolder(String nameHolder) {
    this.nameHolder = nameHolder;
  }

  public String getShortNote() {
    return shortNote;
  }

  public void setShortNote(String shortNote) {
    this.shortNote = shortNote;
  }

  public String getEmail() {
    return Email;
  }

  public void setEmail(String email) {
    Email = email;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhoneno() {
    return phoneno;
  }

  public void setPhoneno(String phoneno) {
    this.phoneno = phoneno;
  }

}
