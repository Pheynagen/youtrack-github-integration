package valerkino.ru.backend.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Setter
@Getter
@EnableWebMvc
@Configuration
public class WebConfiguration implements WebMvcConfigurer {

	@Value("${web.front-protocol}")
	private String protocol;

	@Value("${web.front-host}")
	private String host;

	@Value("${web.front-port}")
	private String port;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
				.allowedOrigins("http://5.23.53.17", "http://5.23.53.17:4000", "http://localhost:3000",
						"http://127.0.0.1:3000", getOrigin(protocol, host, port))
				.allowedMethods("POST", "OPTIONS").maxAge(3600);
	}

	private String getOrigin(String protocol, String host, String port) {
		String urlTemplate = "%s://%s:%s";
		return String.format(urlTemplate, protocol, host, port);
	}

}
