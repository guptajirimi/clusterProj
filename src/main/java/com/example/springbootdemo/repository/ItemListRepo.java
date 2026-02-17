package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootdemo.entity.ItemListEntity;

public interface ItemListRepo extends JpaRepository<ItemListEntity,Object> {
    

}
