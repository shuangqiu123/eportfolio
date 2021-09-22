package com.sq.eportfolio.service;

import com.google.api.client.googleapis.auth.oauth2.*;
import com.sq.eportfolio.dto.user.UserGetDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final GoogleAuthorizationCodeFlow oauthClient;
    private final UserService userService;

    @Value("${oauth.google.redirectURL}")
    private String redirectURL;

    public String generateGoogleURL() {
        GoogleAuthorizationCodeRequestUrl url = oauthClient.newAuthorizationUrl();
        url.setRedirectUri(redirectURL);
        return url.toString();
    }

    public UserGetDto signInByGoogleToken(String code) throws IOException {
        GoogleAuthorizationCodeTokenRequest tokenRequest = oauthClient.newTokenRequest(code);
        System.out.println(tokenRequest);
        tokenRequest.setRedirectUri(redirectURL);

        GoogleTokenResponse response = tokenRequest.execute();
        GoogleIdToken googleIdToken = response.parseIdToken();
        GoogleIdToken.Payload payload = googleIdToken.getPayload();
        return userService.oauthSignIn(payload.getEmail());
    }
}
