package com.example.bsb_local.domain.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name="bsb_location")
public class Testm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @Column
    private BigDecimal lat;

    @Column
    private BigDecimal lng;

    @Column
    private Date regtime;

    @Builder
    public Testm(Long id, BigDecimal lat, BigDecimal lng, Date regtime){
        this.id = id;
        this.lat = lat;
        this.lng = lng;
        this.regtime = regtime;
    }

}
