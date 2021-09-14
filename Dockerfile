FROM openjdk:11

WORKDIR /workspace/app

VOLUME /tmp

ADD /target/eportfolio-0.0.1-SNAPSHOT.jar /workspace/app/app.jar

ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=prod"]