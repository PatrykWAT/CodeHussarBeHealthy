package com.behealthy.demo;

import java.io.Serializable;
import java.util.Date;


public class BioMedicalValue implements Serializable {
    private Date date;git addd
    private int value;

    public Date getDate() {
        return date;
    }

    public BioMedicalValue() {
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public BioMedicalValue(Date date, int value) {

        this.date = date;
        this.value = value;
    }
}
