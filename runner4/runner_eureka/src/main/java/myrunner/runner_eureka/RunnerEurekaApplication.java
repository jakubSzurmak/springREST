package myrunner.runner_eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;


@SpringBootApplication
@EnableEurekaServer
public class RunnerEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(RunnerEurekaApplication.class, args);
    }

}
