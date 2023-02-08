package com.example.bsb_local.domain.repository;

import com.example.bsb_local.domain.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StatusRepository extends JpaRepository<Status, Long>, JpaSpecificationExecutor<Status>{
    Long countByStatus(Integer status);
    @Query(value = "SELECT COUNT(status) FROM Status  WHERE regtime Like :regtime")
    Long count(@Param("regtime") String regtime);

//    @Query(value = "select count(b.status) from Status b where b.status = :status and '''b.regtime''' like :regtime")
    @Query(value = "SELECT COUNT(status) FROM Status WHERE regtime LIKE :regtime AND status = :status")
    Long findStatus(@Param("regtime") String regtime,@Param("status")  Integer status);
}
