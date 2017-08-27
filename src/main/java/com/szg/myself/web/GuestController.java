package com.szg.myself.web;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.szg.myself.domain.Guest;
import com.szg.myself.service.Impl.UserServiceImpl;

@RestController
@RequestMapping("/")
public class GuestController {
	
	@Resource
	UserServiceImpl userService;
	
	@RequestMapping
	public ModelAndView toIndex(){
		return new ModelAndView("guest/index");
	}
	@RequestMapping("/guest/addGeust")
	public void addGuest(
			@RequestParam(name="username",required=true)String username,
			@RequestParam(name="subject",required=true)String subject,
			@RequestParam(name="message",required=true)String message,
			@RequestParam(name="tel",required=true)String tel,
			@RequestParam(name="email",required=true)String email
			){
		Guest guest = new Guest(username, email, message, subject,tel);
		userService.addGuest(guest);
	}
}
