using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Usuario { get; set; }
        public byte[] SenhaHash { get; set; }
        public byte[] senhaSalt { get; set; }
        public bool Status { get; set; }
        public DateTime TokenDataCriacao { get; set; } = DateTime.Now;
    }
}