package com.exe.cozy.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.exe.cozy.domain.CustomerDto;

@Mapper
public interface CustomerMapper {
	
	public int emailChk(String customerEmail);
	
	public void insertData(CustomerDto dto);
	public CustomerDto getLogin(String customerEmail);
	public CustomerDto forgot(String customerEmail);
	public void updatePwd(CustomerDto dto);
	
	public CustomerDto getReadData(String customerEmail);
	public void updateData(CustomerDto dto);
	public void deleteData(String customerEmail);
}
