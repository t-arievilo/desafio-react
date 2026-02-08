using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTOs
{
    public class UsuarioCriacaoDto
    {
        [Required(ErrorMessage = "O campo usuário é obrigatório")]
        public string Usuario { get; set; }

        [Required(ErrorMessage = "O campo email é obrigatório"), EmailAddress(ErrorMessage = "Formato de Email inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo senha é obrigatório")]
        public string Senha { get; set; }

        [Compare("Senha", ErrorMessage = "As senhas não são iguais")]
        public string ConfirmaSenha { get; set; }  
        public bool Status { get; set; } 

    }
}