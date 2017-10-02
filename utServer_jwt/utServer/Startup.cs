using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace utServer
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            services.AddSingleton(provider => Configuration);

            services.AddDbContext<SecurityContext>(options =>
                                                   options.UseSqlServer(Configuration.GetConnectionString("SecurityConnection"), sqlOptions
                                                                       => sqlOptions.MigrationsAssembly("utServer")));

            //services.AddIdentity<IdentityUser, IdentityRole>(cfg =>
            //{
            //    // If unauthorized request is made to /api endpoint, return Unauthorized instead of redirecting to login page.
            //    cfg.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents
            //    {
            //        OnRedirectToLogin = ctx =>
            //        {
            //            if (ctx.Request.Path.StartsWithSegments("/api"))
            //                ctx.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;

            //            return Task.FromResult(0);
            //        }
            //    };
            //}).AddEntityFrameworkStores<SecurityContext>()
            //.AddDefaultTokenProviders();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
            //app.UseIdentity();

            app.UseJwtBearerAuthentication(new JwtBearerOptions()
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = new TokenValidationParameters()
                {
                    //IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtSecurityToken:Key"])),
                    //ValidAudience = Configuration["JwtSecurityToken:Audience"],
                    //ValidateIssuerSigningKey = true,
                    //ValidateLifetime = true,
                    //ValidIssuer = Configuration["JwtSecurityToken:Issuer"]
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtSecurityToken:Key"])),
                    //ValidAudience = Configuration["JwtSecurityToken:Audience"],
                    ValidateIssuerSigningKey = false,
                    ValidateLifetime = false,
                    ValidIssuer = Configuration["JwtSecurityToken:Issuer"]
                }
            });
        }
    }
}
