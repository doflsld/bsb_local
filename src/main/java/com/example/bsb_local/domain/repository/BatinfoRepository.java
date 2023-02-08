package com.example.bsb_local.domain.repository;

import com.example.bsb_local.domain.entity.Batinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BatinfoRepository extends JpaRepository<Batinfo, Long>, JpaSpecificationExecutor<Batinfo>{
    List<Batinfo> findAllByBatnum(String batnum);

    @Query(value = "SELECT batnum FROM Batinfo GROUP BY batnum")
    List<String> findName();
}
