﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using kalkulatorKPR.Models;

namespace kalkulatorKPR.Migrations
{
    [DbContext(typeof(KPRContext))]
    [Migration("20190412031325_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("kalkulatorKPR.Models.CommandRecord", b =>
                {
                    b.Property<int>("IdKPR")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Bunga");

                    b.Property<double>("Dp");

                    b.Property<double>("Harga");

                    b.Property<double>("Pokok");

                    b.Property<int>("Tenor");

                    b.HasKey("IdKPR");

                    b.HasIndex("IdKPR");

                    b.ToTable("CommandRecord");
                });

            modelBuilder.Entity("kalkulatorKPR.Models.DataRecord", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Angsuran");

                    b.Property<int>("Bulan");

                    b.Property<int>("IdKPR");

                    b.Property<double>("PembayaranPokok");

                    b.Property<double>("Pokok");

                    b.Property<double>("Sisa");

                    b.Property<double>("bunga");

                    b.HasKey("Id");

                    b.HasIndex("IdKPR");

                    b.ToTable("DataRecord");
                });

            modelBuilder.Entity("kalkulatorKPR.Models.DataRecord", b =>
                {
                    b.HasOne("kalkulatorKPR.Models.CommandRecord")
                        .WithMany("DataRecords")
                        .HasForeignKey("IdKPR")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
