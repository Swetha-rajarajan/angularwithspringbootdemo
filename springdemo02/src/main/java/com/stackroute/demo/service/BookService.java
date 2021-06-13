package com.stackroute.demo.service;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.stackroute.demo.model.Book;
import com.stackroute.demo.repository.BookRepository;

@Service
public class BookService{

	@Autowired
	private BookRepository bookRepository;
	
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
		
		
	}
	
	public boolean addBook(@RequestBody Book book){
		bookRepository.save(book);
		return true;
	}
	
	public boolean addToFavorite(Book book){
		Book book1 = bookRepository.findById(book.getId()).get();
		book1.setIsfavorite(true);
		System.out.println(bookRepository.save(book1));
		return true;
	}

	public boolean removefromFavorite(Book book){
		System.out.println(book.getAuthor());
		Book book1 = bookRepository.findById(book.getId()).get();
		book1.setIsfavorite(false);
		System.out.println("ssss"+bookRepository.save(book1));
		System.out.println(bookRepository.findAll().get(0).isIsfavorite());
		return true;
	}
	
	
}
