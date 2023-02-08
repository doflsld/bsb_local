package com.example.bsb_local.domain.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name="bat_info")
public class Batinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column(name="bat_num")
    private String batnum;

    @Column
    private Float voltage;

    @Column
    private Float current;

    @Column
    private String regtime;

    @Builder
    public Batinfo(Long id, String batnum, Float voltage, Float current, String regtime){
        this.id = id;
        this.batnum = batnum;
        this.voltage = voltage;
        this.current = current;
        this.regtime = regtime;
    }
}
