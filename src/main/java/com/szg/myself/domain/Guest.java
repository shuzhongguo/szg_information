package com.szg.myself.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="tb_guest")
public class Guest {
	
	@Id
	@GeneratedValue
	private int id;
	
	@NotEmpty
	private String username;
	
	@Email
	@NotEmpty
	private String email;
	
	@NotEmpty
	private String message;
	
	@NotEmpty
	private String subject;
	
	private Date date;
	
	@NotEmpty
	private String tel;

	public Guest(String username, String email, String message, String subject,String tel) {
		this.username = username;
		this.email = email;
		this.message = message;
		this.subject = subject;
		this.date = new Date();
		this.tel = tel;
	}
}
