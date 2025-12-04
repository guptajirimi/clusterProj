package com.example.springbootdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.springbootdemo.entity.PoRegisterEntity;

@Repository
public interface PoRegisterRepo extends JpaRepository<PoRegisterEntity, String> {
    @Query(value = "Select circle name,ciclevalue from hstt_circle mst where gnum_isvalid=1 order y circle_name")
    String getAllCircleList();
}
