using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Response<T>
    {
        public T? Dados { get; set; }
        public string Mensagem { get; set; } = string.Empty;
    }
}