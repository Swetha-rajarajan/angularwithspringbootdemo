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
import com.stackroute.demo.service.BookService;

@RestController
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookController{

	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/api/v1/books/all")
	public ResponseEntity<?> getAllBooks(){
		return new ResponseEntity<>(bookService.getAllBooks(),HttpStatus.OK);
	}
	
	@PostMapping("/api/v1/books/addbook")
	public ResponseEntity<?> addBook(
			@RequestBody Book book){
		bookService.addBook(book);
		return new ResponseEntity<>("New Book added",HttpStatus.CREATED);
	}
	
	@PutMapping("/api/v1/books/addtofavorite")
	public ResponseEntity<?> addBookToFavorite(@RequestBody Book book){
		bookService.addToFavorite(book);
		return new ResponseEntity<>("Book added to favorite",HttpStatus.OK);
	}
	
	@PutMapping("/api/v1/books/removefromfavorite")
	public ResponseEntity<?> removeBookFromfavorite(@RequestBody Book book){
		bookService.removefromFavorite(book);
		return new ResponseEntity<>("Book removed from favorite",HttpStatus.OK);
	}
	
	
}
