using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace utServer
{
    public class SecurityContext : IdentityDbContext<IdentityUser>
    {
        public SecurityContext() { }
        public SecurityContext(DbContextOptions<SecurityContext> options) : base(options) { }
    }
}
