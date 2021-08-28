package com.sq.eportfolio.dto.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "User Post Dto")
public class UserPostDto {

    @ApiModelProperty(value = "userId")
    private String userId;

    @ApiModelProperty(value = "user name", required = true)
    @NotEmpty
    private String userName;

    @ApiModelProperty(value = "preferred user name")
    private String preferredName;

    @ApiModelProperty(value = "user password", required = true)
    @NotBlank
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\\\S+$).{8,20}")
    private String password;

    @ApiModelProperty(value = "tags")
    private List<String> tags;

    @ApiModelProperty(value = "user password", required = true)
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\\\\.[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\\\.[a-zA-Z0-9-]+)*$")
    private String email;

    @ApiModelProperty(value = "user full name", required = true)
    @NotBlank
    private String name;

    @ApiModelProperty(value = "user description")
    private String description;
}
