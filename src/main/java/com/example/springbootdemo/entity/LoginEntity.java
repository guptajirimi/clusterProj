package com.example.springbootdemo.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
@Entity
@Table(name = "gblt_user_mst")
public class LoginEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private long Userid;
private String password;
@CreationTimestamp
@Column(name="entryDate" ,updatable = false)
private Date  entryDate;
private String username;

public long getUserid() {
    return Userid;
}
public void setUserid(long userid) {
    Userid = userid;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public Date  getEntryDate() {
    return entryDate;
}
public void setEntryDate(Date  entryDate) {
    this.entryDate = entryDate;
}
public String getUsername() {
    return username;
}
public void setUsername(String username) {
    this.username = username;
}



}
