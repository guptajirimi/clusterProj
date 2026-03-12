package com.example.springbootdemo.controller;

 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.FB.FoodAppFB;
 
import com.example.springbootdemo.entity.CategoryListEntity;
import com.example.springbootdemo.entity.ItemListEntity;
import com.example.springbootdemo.entity.OffersEntity;
import com.example.springbootdemo.entity.OrderEntity;
import com.example.springbootdemo.entity.OrderItemEntity;
import com.example.springbootdemo.repository.CategoryListRepo;
import com.example.springbootdemo.repository.ItemListRepo;
import com.example.springbootdemo.repository.OffersRepo;
import com.example.springbootdemo.repository.OrderRepo;
 

 
@RestController
@RequestMapping("/foodAppList")
public class FoodAppListCNT {

    @Autowired
    ItemListRepo itemListRepo;
    @Autowired
    OffersRepo offersRepo;
    @Autowired
    CategoryListRepo categoryListRepo;
    @Autowired
    OrderRepo orderRepo;
    @GetMapping("/initialItemList")
    public FoodAppFB getInitialItemList() {
         List<ItemListEntity> items= itemListRepo.findAll();
         List<OffersEntity> offers= offersRepo.findAll();
         List<CategoryListEntity> categories= categoryListRepo.findAll();
          return new FoodAppFB(items,offers,categories);
    }
   
@PostMapping("/insertOrder")
public String insertOrder(@RequestBody OrderEntity order) {

    
    for(OrderItemEntity item : order.getItems()) {
        item.setOrder(order);
    }

    orderRepo.save(order);

    return "Order Saved Successfully";
}

    
}
