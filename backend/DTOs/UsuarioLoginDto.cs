using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTOs
{
    public class UsuarioLoginDto
    {
        [Required(ErrorMessage = "O campo Email é obrigatório"), EmailAddress(ErrorMessage = "Email no formato inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório")]
        public string Senha { get; set; }
    }
}