package com.behealthy.demo;

import org.springframework.stereotype.Component;
import sun.rmi.runtime.Log;

import javax.servlet.*;
import java.io.IOException;
import java.util.logging.Filter;

@Component
public class FiltrSecure implements javax.servlet.Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println(servletRequest.getParameter("Ja"));
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
