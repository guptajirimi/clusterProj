package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springbootdemo.entity.CategoryListEntity;

public interface CategoryListRepo extends JpaRepository<CategoryListEntity,Object>{

   

}
