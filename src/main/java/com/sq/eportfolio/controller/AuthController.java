package com.sq.eportfolio.controller;

import com.sq.eportfolio.dto.user.UserGetDto;
import com.sq.eportfolio.dto.user.UserPostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/signup")
    public UserGetDto signup(UserPostDto userPostDto) {
        return null;
    }

    @PostMapping("/login")
    public UserGetDto login(UserPostDto userPostDto) {
        return null;
    }

    @GetMapping("/oauth")
    public UserGetDto oauth(String token) {
        return null;
    }
}
