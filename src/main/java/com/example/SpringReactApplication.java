package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringReactApplication {

	org.springframework.boot.logging.LoggingSystem loggingSystem;
	org.springframework.boot.logging.logback.LogbackLoggingSystem logbackLoggingSystem;
	public static void main(String[] args) {
		SpringApplication.run(SpringReactApplication.class, args);
	}
}
