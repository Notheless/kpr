using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace kalkulatorKPR.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CommandRecord",
                columns: table => new
                {
                    IdKPR = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Tenor = table.Column<int>(nullable: false),
                    Harga = table.Column<double>(nullable: false),
                    Pokok = table.Column<double>(nullable: false),
                    Dp = table.Column<double>(nullable: false),
                    Bunga = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommandRecord", x => x.IdKPR);
                });

            migrationBuilder.CreateTable(
                name: "DataRecord",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IdKPR = table.Column<int>(nullable: false),
                    Bulan = table.Column<int>(nullable: false),
                    Pokok = table.Column<double>(nullable: false),
                    bunga = table.Column<double>(nullable: false),
                    PembayaranPokok = table.Column<double>(nullable: false),
                    Angsuran = table.Column<double>(nullable: false),
                    Sisa = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataRecord", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DataRecord_CommandRecord_IdKPR",
                        column: x => x.IdKPR,
                        principalTable: "CommandRecord",
                        principalColumn: "IdKPR",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CommandRecord_IdKPR",
                table: "CommandRecord",
                column: "IdKPR");

            migrationBuilder.CreateIndex(
                name: "IX_DataRecord_IdKPR",
                table: "DataRecord",
                column: "IdKPR");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataRecord");

            migrationBuilder.DropTable(
                name: "CommandRecord");
        }
    }
}
