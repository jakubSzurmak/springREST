package pl.runnerData;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;


@SpringBootApplication
@EnableDiscoveryClient
public class SimpleGatewayApp {

	public static void main(String[] args) {
		SpringApplication.run(SimpleGatewayApp.class, args);
	}

	@Bean
	public RouteLocator routeLocator(
			RouteLocatorBuilder builder
	){
		return builder
				.routes()
				.route("shoes", route -> route
						.path(
								"/api/shoes/{id}",
								"/api/shoes",
								"/api/runners/{id}/shoes"
						)
						.uri("lb://isa-element")
				)
				.route("runners", route -> route
						.path(
								"/api/runners",
								"/api/runners/{id}"
						)
						.uri("lb://isa-category")
				)
				.build();
	}




}
