using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutenticacaoAPI.Migrations
{
    /// <inheritdoc />
    public partial class RenameSennhaSalt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "senhaSalt",
                table: "Usuario",
                newName: "SenhaSalt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SenhaSalt",
                table: "Usuario",
                newName: "senhaSalt");
        }
    }
}
