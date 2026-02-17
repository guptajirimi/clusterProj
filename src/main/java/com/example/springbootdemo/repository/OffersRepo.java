package com.example.springbootdemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springbootdemo.entity.OffersEntity;

public interface OffersRepo extends JpaRepository<OffersEntity,Object>{

    

}
