package com.example.bsb_local.controller;

import com.example.bsb_local.domain.entity.Batinfo;
import com.example.bsb_local.domain.entity.Status;
import com.example.bsb_local.domain.entity.Testm;
import com.example.bsb_local.dto.TestmDto;
import com.example.bsb_local.dto.TestsDto;
import com.example.bsb_local.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

@org.springframework.stereotype.Controller
@Slf4j
public class Controller {

    private TestsService testsService;
    private TestmService testmService;
    private StatusService statusService;
    private BatinfoService batinfoService;

    public Controller(TestsService testsService, TestmService testmService, StatusService statusService, BatinfoService batinfoService){
        this.testsService = testsService;
        this.testmService = testmService;
        this.statusService = statusService;
        this.batinfoService = batinfoService;
    }

    @GetMapping("/info_bat")
    public String info_bat(Model model, @RequestParam(value = "batnum", defaultValue = "bt_danigo01") String batnum){
        List<Batinfo> batinfoList = batinfoService.getBatinfo(batnum);
        model.addAttribute("batList", batinfoList);
        List<String> batnums = batinfoService.getBatnum();
        model.addAttribute("batnums", batnums);
        log.info(batnum);
        return "info_bat";
    }

    @GetMapping("/monitor")
    public String monitor(Model model){
        Long test0 = statusService.getStatus(0);
        model.addAttribute("test0", test0);
        Long test1 = statusService.getStatus(1);
        model.addAttribute("test1", test1);
        Long test2 = statusService.getStatus(2);
        model.addAttribute("test2", test2);

        String days[] = new String[10];
        Long status[] = new Long[10];
        Long count[] = new Long[10];
        for(int i = 0; i < days.length; i++){
            LocalDate now = LocalDate.now();
            String a = now.minusDays(i).toString();
            days[i] = a;
            status[i] = statusService.getStatusTime(days[i]+"%", 0);
            count[i] = statusService.getCountTime(days[i]+"%");
        }
        model.addAttribute("status", status);
        model.addAttribute("count", count);
        return "monitor";
    }

    @GetMapping("/")
    public String index(Model model) {
        TestmDto testmDto = testmService.getTestm();
        model.addAttribute("testm", testmDto);
        List<Testm> testmDtos = testmService.getTest();
        model.addAttribute("test", testmDtos);
        return "index";
    }

    @GetMapping("/main")
    public String main(Model model) {
//        TestmDto testmDto = testmService.getTestm();
//        model.addAttribute("testm", testmDto);
        return "redirect:/";
    }

    @GetMapping("/info")
    public String info(Model model){
        TestsDto testsDto = testsService.getTests();
        model.addAttribute("tests", testsDto);
        TestmDto testmDto = testmService.getTestm();
        model.addAttribute("testm", testmDto);
        List<Testm> testmDtos = testmService.getTest();
        model.addAttribute("test", testmDtos);
        return "index_info";
    }

    @RequestMapping(value = "/data_in")
    public String getdata(@RequestParam(name="key1") String val1, @RequestParam(name="key2") Integer val2){
        Status test = new Status();
        test.setBat_num(val1);
        test.setStatus(val2);
        statusService.save(test);
        System.out.println(val1);
        System.out.println(val2);
        return "datain";
    }

}
