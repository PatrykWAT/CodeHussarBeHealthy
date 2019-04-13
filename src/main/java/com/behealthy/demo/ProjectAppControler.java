package com.behealthy.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ProjectAppControler {
    @PostMapping("/savePulse")
    public void savePulse(BioMedicalValue bioMedicalValue){
    }

    @PostMapping("/saveGSR")
    public void saveGSR(){

    }

    @PostMapping("/saveActivity")
    public void saveActivity(){

    }

    @PostMapping("/savePollResult")
    public void savePollResult(){

    }
}
