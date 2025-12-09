package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootdemo.entity.ResumeBuilderEntity;
@Repository
public interface ResumeBuilderRepo extends JpaRepository<ResumeBuilderEntity, Long> {
    
}
