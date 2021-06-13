package com.stackroute.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.demo.model.Book;
import com.stackroute.demo.model.User;
import com.stackroute.demo.service.BookService;
import com.stackroute.demo.service.UserService;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController{

	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/api/v1/user/adduser")
	public ResponseEntity<?> addUser(
			@RequestBody User user){
		userService.addUser(user);
		return new ResponseEntity<>("New User added",HttpStatus.CREATED);
	}
	
	@PostMapping("/api/v1/user/login")
	public ResponseEntity<?> login(@RequestBody User user){
		System.out.println(userService.validate(user.getUsername(),user.getPassword()));
		if(userService.validate(user.getUsername(),user.getPassword())) {
			return new ResponseEntity<>("User logged in",HttpStatus.CREATED);
		}else {
			return new ResponseEntity<>("User not authorized",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
}
