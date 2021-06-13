package com.stackroute.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.demo.model.Book;
import com.stackroute.demo.model.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
	List<User> findByUsernameAndPassword(String username,String password);
}
