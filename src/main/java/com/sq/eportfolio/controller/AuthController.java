package com.sq.eportfolio.controller;

import com.sq.eportfolio.dto.user.UserGetDto;
import com.sq.eportfolio.dto.user.UserLoginDto;
import com.sq.eportfolio.dto.user.UserPostDto;
import com.sq.eportfolio.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	private final UserService userService;

	@ApiOperation("Sign up")
	@ApiResponses({
			@ApiResponse(code = 200, message = "successful sign up", response = UserGetDto.class),
			@ApiResponse(code = 400, message = "unsuccessful sign up")
	})
	@PostMapping("/signup")
	public ResponseEntity<UserGetDto> signup(@RequestBody @Valid UserPostDto userPostDto) {
		UserGetDto userGetDto = userService.signup(userPostDto);
		if (userGetDto == null) {
			return ResponseEntity
					.status(400)
					.body(null);
		}
		return ResponseEntity
				.ok()
				.body(userGetDto);
	}

	@ApiOperation("Log in")
	@ApiResponses({
		@ApiResponse(code = 200, message = "successful login", response = UserGetDto.class),
		@ApiResponse(code = 400, message = "unsuccessful login")
	})
	@PostMapping("/login")
	public ResponseEntity<UserGetDto> login(@RequestBody @Valid UserLoginDto userLoginDto) {
		UserGetDto userGetDto = userService.login(userLoginDto);
		if (userGetDto == null) {
			return ResponseEntity
					.status(400)
					.body(null);
		}

		return ResponseEntity
				.ok()
				.header("Authorization", " " + userGetDto.getToken())
				.body(userGetDto);
	}

	@GetMapping("/oauth/{token}")
	public UserGetDto oauth(@RequestParam String token) {
		return null;
	}
}
