package com.stackroute.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.stackroute.demo.model.User;
import com.stackroute.demo.repository.UserRepository;

@Service
public class UserService{

	@Autowired
	private UserRepository userRepository;
	
	
	public User addUser(@RequestBody User user){
		return userRepository.save(user);
	}
	
		

	public boolean validate(String username, String password) {
		return (!(userRepository.findByUsernameAndPassword(username, password).isEmpty()));
	}
	
		
}
