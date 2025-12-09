package com.example.springbootdemo.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.example.springbootdemo.entity.ResumeBuilderEntity;

@RestController
@RequestMapping("/resumeBuilder")
public class ResumeBuilderCNT {

    @PostMapping("/insert")
    public String insert(@RequestBody Map<String, Object> json) {
     
        ResumeBuilderEntity fb= new ResumeBuilderEntity();
        String nameHolder = (String) json.get("nameHolder");
        String shortNote=(String) json.get("shortNote");
        String Email=(String) json.get("Email");
        String address=(String) json.get("address");
        String phone=(String) json.get("phone");
        
        
        return "OK";
    }
}
