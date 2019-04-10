using Microsoft.EntityFrameworkCore;

namespace kalkulatorKPR.Models
{
    public class KPRContext : DbContext
    {
        public KPRContext(DbContextOptions<KPRContext> options) : base(options)
        {
        }

        public DbSet<DataRecord> DataRecords { get; set; }
        public DbSet<CommandRecord> CommandRecords { get; set; }

    }
}
