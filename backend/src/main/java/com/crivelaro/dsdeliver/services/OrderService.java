package com.crivelaro.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.crivelaro.dsdeliver.dto.OrderDTO;
import com.crivelaro.dsdeliver.entities.Order;
import com.crivelaro.dsdeliver.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository OrderRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = OrderRepository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
}
