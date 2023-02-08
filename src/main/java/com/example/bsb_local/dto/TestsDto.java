package com.example.bsb_local.dto;

import com.example.bsb_local.domain.entity.Tests;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class TestsDto {
    private Long id;
    private Float temp;
    private Float humi;
    private Float co;
    private Float h2;
    private Date regtime;

    public Tests toEntity(){
        Tests build = Tests.builder()
                .id(id)
                .temp(temp)
                .humi(humi)
                .co(co)
                .h2(h2)
                .regtime(regtime)
                .build();
        return build;
    }

    @Builder
    public TestsDto(Long id, Float temp, Float humi, Float co, Float h2, Date regtime){
        this.id = id;
        this.temp = temp;
        this.humi = humi;
        this.co = co;
        this.h2 = h2;
        this.regtime = regtime;
    }

}
