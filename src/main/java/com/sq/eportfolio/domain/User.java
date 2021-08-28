package com.sq.eportfolio.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String userId;

    private String userName;

    private String preferredName;

    private String password;

    private List<String> tags;

    private String email;

    private String name;

    private String description;
}
