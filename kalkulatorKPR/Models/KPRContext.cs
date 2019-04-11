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
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DataRecord>().ToTable("DataRecord").HasKey(c => new { c.Id });
            modelBuilder.Entity<CommandRecord>().ToTable("CommandRecord").HasIndex(c=>c.IdKPR);
        }
    }
}
