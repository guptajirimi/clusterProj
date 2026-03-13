package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootdemo.entity.OrderItemEntity;

public interface OrderItemRepo extends JpaRepository<OrderItemEntity,Long>{

  @Query(value = """
SELECT 
COALESCE(item_id,0) as id,
COALESCE(name,'') as name,
COALESCE(image,'') as image,
SUM(COALESCE(qty,0)) as totalQty
FROM hstt_orders_item_dtls
GROUP BY item_id,name,image
ORDER BY totalQty DESC
LIMIT 5
""", nativeQuery = true)
List<Object[]> getPopularItemList();

  @Query(value = """
SELECT 
COALESCE(a.id,0) AS id,
COALESCE(a.name,'') AS name,
COALESCE(a.image,'') AS image
FROM hstt_itemlist_food a
WHERE a.id NOT IN (
    SELECT b.item_id 
    FROM hstt_orders_item_dtls b
)
LIMIT 5
""", nativeQuery = true)
List<Object[]> leastOderedListFoodItem();
   }
 
