package com.sq.eportfolio.repository;

import com.sq.eportfolio.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findUserByUserId(String userId);

    User findUserByEmail(String email);

    User findUserByUserName(String userName);
}
