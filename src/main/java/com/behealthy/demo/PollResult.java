package com.behealthy.demo;

import java.io.Serializable;
import java.util.Date;

public class PollResult implements Serializable {

        private int number;
        private Date date;
        private int value;

    public PollResult() {
    }

    public PollResult(int number, Date date, int value) {
        this.number = number;
        this.date = date;
        this.value = value;
    }

    public int getNumber() {

        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getDate() {
        return date;
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
}
