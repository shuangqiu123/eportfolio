package com.sq.eportfolio.config;

import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.MemoryDataStoreFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.util.List;

@Configuration
public class GoogleApiConfig {

    @Value("${oauth.google.clientId}")
    private String clientId;

    @Value("${oauth.google.clientSecret}")
    private String clientSecret;

    @Bean
    public GoogleAuthorizationCodeFlow oauthClient() throws IOException {
        return new GoogleAuthorizationCodeFlow.Builder(
                new NetHttpTransport(), GsonFactory.getDefaultInstance(),
                clientId, clientSecret,
                List.of("https://www.googleapis.com/auth/userinfo.profile",
                        "https://www.googleapis.com/auth/userinfo.email"))
                .setDataStoreFactory(MemoryDataStoreFactory.getDefaultInstance())
                .build();
    }
}
