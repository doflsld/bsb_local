package com.example.bsb_local.service;

import com.example.bsb_local.domain.entity.Status;
import com.example.bsb_local.domain.repository.StatusRepository;
import org.springframework.stereotype.Service;

@Service
public class StatusService {
    private StatusRepository statusRepository;

    public StatusService(StatusRepository statusRepository){
        this.statusRepository = statusRepository;
    }
    public void save(Status status){
        statusRepository.save(status);
    }

    public Long getStatus(Integer a){
        Long status = statusRepository.countByStatus(a);
        return status;
    }

    public Long getStatusTime(String a, Integer b){
        Long status = statusRepository.findStatus(a,b);
        return status;
    }

    public Long getCountTime(String a){
        Long count = statusRepository.count(a);
        return count;
    }

}
