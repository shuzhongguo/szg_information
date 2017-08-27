package com.szg.myself.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.szg.myself.domain.Guest;
import com.szg.myself.repository.GuestRepository;
import com.szg.myself.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	GuestRepository guestRepository;
	
	@Override
	public void addGuest(Guest guest) {
		 guestRepository.save(guest);
	}

}
