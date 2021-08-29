package com.sq.eportfolio.dto.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "User Get Dto")
public class UserGetDto {
	@ApiModelProperty(value = "userId")
	private String userId;

	@ApiModelProperty(value = "user name", required = true)
	private String userName;

	@ApiModelProperty(value = "tags")
	private List<String> tags;

	@ApiModelProperty(value = "user password", required = true)
	private String email;

	@ApiModelProperty(value = "user full name", required = true)
	private String name;

	@ApiModelProperty(value = "user description")
	private String description;

	@ApiModelProperty(value = "indicate if users are verified")
	private Boolean isVerified;

	@ApiModelProperty(value = "JWT Token")
	private String token;
}
