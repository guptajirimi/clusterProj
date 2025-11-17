package com.example.springbootdemo.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.springbootdemo.entity.LoginEntity;
import com.example.springbootdemo.repository.LoginRepo;

@Controller
@RequestMapping("authentication")
public class Login {

    @Autowired
    private LoginRepo loginRepo;

     
    @ResponseBody
    @RequestMapping("/login/{username}/{password}")
    public String login(@PathVariable String username, @PathVariable String password) {

        // Find user by username
        LoginEntity user = loginRepo.findByUsername(username);

        if (user == null) {
            return "  Username does not exist";
        }

        if (user.getPassword().equals(password)) {
            return "  Login Successfully";
        } else {
            return "  Invalid password";
        }
    }

    
    @ResponseBody
    @RequestMapping("/signup/{username}/{password}")
    public String signup(@PathVariable String username, @PathVariable String password) {

        // Check if username already exists
        LoginEntity existing = loginRepo.findByUsername(username);

        if (existing != null) {
            return "  Username already taken";
        }

        LoginEntity user = new LoginEntity();
        user.setUsername(username);
        user.setPassword(password);
        user.setEntryDate(new Date());

        loginRepo.save(user);

        return "  User Successfully Registered";
    }
}
