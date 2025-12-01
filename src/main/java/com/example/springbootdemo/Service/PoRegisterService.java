package com.example.springbootdemo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootdemo.repository.PoRegisterRepo;

@Service
public class PoRegisterService {
    @Autowired
    private PoRegisterRepo poRegisterRepo;
     
    public String getCircleCombo() {
         return poRegisterRepo.getAllCircleList();  
      }
}
