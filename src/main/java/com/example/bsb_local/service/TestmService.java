package com.example.bsb_local.service;

import com.example.bsb_local.domain.entity.Testm;
import com.example.bsb_local.domain.repository.TestmRepository;
import com.example.bsb_local.dto.TestmDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TestmService {
    private TestmRepository testmRepository;

    public TestmService(TestmRepository testmRepository){
        this.testmRepository = testmRepository;
    }

    @Transactional
//    @Scheduled(cron = "5 * * * * *")
    public TestmDto getTestm(){

        Testm testm = testmRepository.findAllByOrderByIdDesc().get(0);

        TestmDto testmDto = TestmDto.builder()
                .id(testm.getId())
                .lat(testm.getLat())
                .lng(testm.getLng())
                .build();

        return testmDto;
    }

    public List<Testm> getTest(){

        List<Testm> testm = testmRepository.findAllByOrderByIdAsc();

        return testm;
    }

}
