package com.stackroute.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {


	@Id
	private String id;
	private String name;
	private String author;
    @Column(columnDefinition = "boolean default false")
	private boolean isfavorite;
	
	public Book() {
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public boolean isIsfavorite() {
		return isfavorite;
	}

	public void setIsfavorite(boolean isfavorite) {
		this.isfavorite = isfavorite;
	}
	
	
	
	
	
	
}
