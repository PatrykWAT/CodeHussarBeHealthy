package com.behealthy.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProjectAppControler {
    @PostMapping("/savePulse")
    public void savePulse(BioMedicalValue bioMedicalValuel){
    }

    @PostMapping("/saveGSR")
    public void saveGSR(BioMedicalValue bioMedicalValue){

    }

    @PostMapping("/saveActivity")
    public void saveActivity(BioMedicalValue bioMedicalValue){

    }

    @PostMapping("/savePollResult")
    public void savePollResult(PollResult pollResult){

    }

    @GetMapping("/getPulse")
    public List<BioMedicalValue> getPulse(){
        return null;
    }

    @GetMapping("/getActivity")
    public List<BioMedicalValue> getActivity(){
        return null;
    }

    @GetMapping("/getStreessLevel")
    public int getStressLevel(){
        return 0;
    }

    @GetMapping("/getStress")
    public List<BioMedicalValue> getStress(){
        return null;
    }


}
