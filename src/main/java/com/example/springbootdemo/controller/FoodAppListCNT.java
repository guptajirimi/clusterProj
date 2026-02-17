package com.example.springbootdemo.controller;

 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.FB.FoodAppFB;
 
import com.example.springbootdemo.entity.CategoryListEntity;
import com.example.springbootdemo.entity.ItemListEntity;
import com.example.springbootdemo.entity.OffersEntity;
import com.example.springbootdemo.repository.CategoryListRepo;
import com.example.springbootdemo.repository.ItemListRepo;
import com.example.springbootdemo.repository.OffersRepo;
 

 
@RestController
@RequestMapping("/foodAppList")
public class FoodAppListCNT {

    @Autowired
    ItemListRepo itemListRepo;
    @Autowired
    OffersRepo offersRepo;
    @Autowired
    CategoryListRepo categoryListRepo;

    @GetMapping("/initialItemList")
    public FoodAppFB getInitialItemList() {
         List<ItemListEntity> items= itemListRepo.findAll();
         List<OffersEntity> offers= offersRepo.findAll();
         List<CategoryListEntity> categories= categoryListRepo.findAll();
          return null;
    }
     

    
}
