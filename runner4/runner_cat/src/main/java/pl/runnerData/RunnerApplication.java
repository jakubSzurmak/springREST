package pl.runnerData;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
@EnableDiscoveryClient
public class RunnerApplication {
	public static void main(String[] args) {
		SpringApplication.run(RunnerApplication.class, args);
	}

	@Bean
	@LoadBalanced
	public RestTemplate restTemplate(@Value("${lab.shoe.url}") String baseUrl) {
		return new RestTemplateBuilder().rootUri(baseUrl).build();
	}
}
