package com.sq.eportfolio.dto.oauth;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Oauth code")
public class OAuthCode {

    @ApiModelProperty("the code for oauth")
    private String code;
}
