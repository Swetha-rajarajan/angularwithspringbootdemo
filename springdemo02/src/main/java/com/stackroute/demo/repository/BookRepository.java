package com.stackroute.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.demo.model.Book;

@Transactional
@Repository
public interface BookRepository extends JpaRepository<Book,String>{

}
