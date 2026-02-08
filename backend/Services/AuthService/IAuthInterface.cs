using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;

namespace backend.Services.AuthServices
{
    public interface IAuthInterface
    {
        Task<Response<UsuarioCriacaoDto>> Registrar(UsuarioCriacaoDto usuarioRegistro);
    
        Task<Response<UsuarioRespostaTokenDto>> Login(UsuarioLoginDto usuarioLogin);
    }
}