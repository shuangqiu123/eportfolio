package com.sq.eportfolio.service;

import com.sq.eportfolio.domain.User;
import com.sq.eportfolio.dto.user.UserGetDto;
import com.sq.eportfolio.dto.user.UserLoginDto;
import com.sq.eportfolio.dto.user.UserPostDto;
import com.sq.eportfolio.repository.UserRepository;
import com.sq.eportfolio.utils.JWTUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JWTUtil jwtUtil;

	public UserGetDto signup(UserPostDto userPostDto) {
		User user = new User();
		BeanUtils.copyProperties(userPostDto, user);
		String email = user.getEmail();
		String username = user.getUserName();

		if (userRepository.findUserByEmail(email) != null || userRepository.findUserByUserName(username) != null) {
			return null;
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User savedUser = userRepository.save(user);
		UserGetDto userGetDto = new UserGetDto();
		BeanUtils.copyProperties(savedUser, userGetDto);
		return userGetDto;
	}

	public UserGetDto login(UserLoginDto userLoginDto) {
		String userName = userLoginDto.getUserName();
		String email = userLoginDto.getEmail();
		String password = userLoginDto.getPassword();

		User user;
		if (userName != null) {
			user = userRepository.findUserByUserName(userName);
		}
		else {
			user = userRepository.findUserByEmail(email);
		}
		if (user == null) return null;
		if (passwordEncoder.matches(password, user.getPassword())) {
			UserGetDto userGetDto = new UserGetDto();
			BeanUtils.copyProperties(user, userGetDto);
			userGetDto.setToken(jwtUtil.generateToken(user));
			return userGetDto;
		}
		return null;
	}

	public UserGetDto oauthSignIn(String email) {
		User user = userRepository.findUserByEmail(email);
		UserGetDto userGetDto = new UserGetDto();
		if (user == null) {
			user = new User();
			user.setEmail(email);
		}
		BeanUtils.copyProperties(user, userGetDto);
		return userGetDto;
	}
}
