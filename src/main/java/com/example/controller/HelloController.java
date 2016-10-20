package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by THINK on 2016/10/20.
 */
@RestController
@RequestMapping("api")
public class HelloController {
    @RequestMapping("index")
    public String hello(){
        return "hello world";
    }
}
