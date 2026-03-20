package com.example.springbootdemo.repository;

 

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springbootdemo.entity.WishListEntity;

public interface WishListRepo extends JpaRepository<WishListEntity,Long>{
@Query(value = "SELECT wish.itemid, it.name, it.image, wish.entrydate FROM hstt_wishlist_user_wise wish JOIN hstt_itemlist_food it ON it.id = wish.itemid WHERE wish.userid = :userId ORDER BY it.name", nativeQuery = true)
List<Object[]> getWishList(@Param("userId") Long userId);
     
 

}
