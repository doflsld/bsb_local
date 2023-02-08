package com.example.bsb_local.service;

import com.example.bsb_local.domain.entity.Batinfo;
import com.example.bsb_local.domain.repository.BatinfoRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BatinfoService {

    private BatinfoRepository batinfoRepository;

    public BatinfoService(BatinfoRepository batinfoRepository){this.batinfoRepository = batinfoRepository;}

    @Transactional()
    public List<Batinfo> getBatinfo(String batnum){
        List<Batinfo> batinfo = batinfoRepository.findAllByBatnum(batnum);
        return batinfo;
    }

    @Transactional
    public List<String> getBatnum(){
        List<String> batnums = batinfoRepository.findName();
        return batnums;
    }

}
