package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by THINK on 2016/10/22.
 */
@Controller
public class SinglePageAppDispacher {
    @RequestMapping({"/","/{anything}"})
    public String redirect(){
        return "redirect:/content/index.html";
    }
}
