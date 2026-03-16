package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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
@Query(value = """
SELECT 
o.grand_total,
oi.item_id,
oi.qty,
oi.name,
o.entrydate,
oi.image
FROM hstt_orders_item_dtls oi
JOIN hstt_orders_dtls o 
ON oi.order_id = o.id
WHERE oi.user_id = :userId
ORDER BY o.entrydate DESC
""", nativeQuery = true)
List<Object[]> yourOdersList(@Param("userId") Long userId);
   }
 
