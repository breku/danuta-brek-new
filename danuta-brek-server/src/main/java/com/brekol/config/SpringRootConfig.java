package com.brekol.config;

import com.brekol.config.security.SpringSecurityConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Created by brekol on 23.01.16.
 */
@Configuration
@ComponentScan({"com.brekol.server"})
@Import({SpringSecurityConfig.class})
public class SpringRootConfig {

}
