package com.sq.eportfolio.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

	@MongoId
	private String userId;

	@Indexed(unique = true)
	private String userName;

	private String password;

	private List<String> tags;

	@Indexed(unique = true)
	private String email;

	private String name;

	private String description;

	private Boolean isVerified;
}
