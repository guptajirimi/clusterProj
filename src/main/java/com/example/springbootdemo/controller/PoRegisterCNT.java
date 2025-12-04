package com.example.springbootdemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.springbootdemo.FB.PoRegisterFB;
import com.example.springbootdemo.Service.PoRegisterService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/poRegister")
public class PoRegisterCNT {
    @Autowired
    private PoRegisterService poRegisterService;

    @RequestMapping("/init")
    public PoRegisterFB init( HttpServletRequest req,HttpServletResponse res)
    {
        PoRegisterFB fb=new PoRegisterFB();
        fb.setStrCircleCombo(poRegisterService.getCircleCombo());
        return fb;
    }
}
