package com.example.springbootdemo.controller;

 
import java.util.List;
import java.util.Map;

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
import com.example.springbootdemo.entity.WishListEntity;
import com.example.springbootdemo.repository.CategoryListRepo;
import com.example.springbootdemo.repository.ItemListRepo;
import com.example.springbootdemo.repository.OffersRepo;
import com.example.springbootdemo.repository.OrderItemRepo;
import com.example.springbootdemo.repository.OrderRepo;
import com.example.springbootdemo.repository.WishListRepo;

import jakarta.servlet.http.HttpSession;
 

 
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
     @Autowired
    OrderItemRepo orderItemRepo;
    @Autowired
    WishListRepo wishListRepo;
    @GetMapping("/initialItemList")
    public FoodAppFB getInitialItemList() {
         List<ItemListEntity> items= itemListRepo.findAll();
         List<OffersEntity> offers= offersRepo.findAll();
         List<CategoryListEntity> categories= categoryListRepo.findAll();
          return new FoodAppFB(items,offers,categories);
    }
   
@PostMapping("/insertOrder")
public String insertOrder(@RequestBody OrderEntity order, HttpSession session) {

    Long userId = (Long) session.getAttribute("userId");
    System.out.println("userId"+userId);  
      order.setUserId(userId);

    for(OrderItemEntity item : order.getItems()) {
        item.setOrder(order);
         item.setUserId(userId);
    }

    orderRepo.save(order);

    return "Order Saved Successfully";
}
@GetMapping("/hotListFoodItem")
    public List<Object[]> hotListFoodItem() {  
         return orderItemRepo.getPopularItemList();      
    }
    @GetMapping("/leastOderedListFoodItem")
    public List<Object[]> leastOderedListFoodItem() {
         return orderItemRepo.leastOderedListFoodItem();    
    }
    @GetMapping("/yourOdersList")
    public List<Object[]> yourOdersList(HttpSession session) { 
        Long userId = (Long) session.getAttribute("userId"); 
        System.out.println("UserId from session: " + userId);
         return orderItemRepo.yourOdersList(userId);      
    }
    
    @PostMapping("/addToWishList")
public String addToWishList(HttpSession session, @RequestBody Map<String, Object> map) {

    Long userId = (Long) session.getAttribute("userId");
    Long itemId = Long.valueOf(map.get("id").toString());

    WishListEntity wishList = new WishListEntity();
    wishList.setItemid(itemId);
    wishList.setUserId(userId);

    wishListRepo.save(wishList);

    return "Added To WishList";
}
@GetMapping("/getWishListUserWise")
    public List<Object[]> getWishListUserWise(HttpSession session) { 
        Long userId = (Long) session.getAttribute("userId"); 
         
         return wishListRepo.getWishList(userId);      
    }
}
