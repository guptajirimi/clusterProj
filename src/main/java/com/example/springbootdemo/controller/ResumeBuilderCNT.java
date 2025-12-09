package com.example.springbootdemo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/resumeBuilder")
public class ResumeBuilderCNT {

    @PostMapping("/insert")
    public String insert(@RequestBody String finalData) {
        System.out.println("✅ CONTROLLER HIT");
        System.out.println(finalData);
        return "OK";
    }
}
