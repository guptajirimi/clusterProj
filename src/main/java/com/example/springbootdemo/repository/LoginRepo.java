package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springbootdemo.entity.LoginEntity;

@Repository
public interface  LoginRepo extends JpaRepository<LoginEntity, Long> {
      LoginEntity findByUsername(String username);
}
