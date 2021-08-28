package com.sq.eportfolio.security;

import com.sq.eportfolio.utils.JWTUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

/**
 * if the request contains token. Use the token to log in.
 */
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationTokenFilter.class);

    @Autowired
    private JWTUtil jwtUtil;
    @Value("${jwt.tokenHeader}")
    private String tokenHeader;
    @Value("${jwt.tokenHead}")
    private String tokenHead;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        String authHeader = httpServletRequest.getHeader(this.tokenHeader);
        if (authHeader != null && authHeader.startsWith(tokenHead)) {
            String authToken = authHeader.substring(this.tokenHead.length() + 1);// The part after "Bearer "
            String uid = jwtUtil.getUidFromToken(authToken);
            LOGGER.info("checking uid:{}", uid);
            if (uid != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                if (jwtUtil.validateToken(authToken)) {
                    Set<SimpleGrantedAuthority> grantedAuthorities = Set.of(new SimpleGrantedAuthority("user"));
                    Authentication authentication = new PreAuthenticatedAuthenticationToken(uid, null, grantedAuthorities);
                    LOGGER.info("authenticated user:{}", uid);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    httpServletRequest.setAttribute("userId", uid);
                }
            }

        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
