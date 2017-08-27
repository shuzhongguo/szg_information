package com.szg.myself.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.szg.myself.domain.Guest;

@Transactional
public interface GuestRepository extends PagingAndSortingRepository<Guest, Integer> {
	
}
