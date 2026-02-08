using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Services.AuthServices;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private IAuthInterface _authInterface;

        public AuthController(IAuthInterface authInterface)
        {
            _authInterface = authInterface;
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Registrar(UsuarioCriacaoDto usuarioRegistro)
        {
            var resposta = await _authInterface.Registrar(usuarioRegistro);
            return Ok(resposta);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UsuarioLoginDto usuarioLogin)
        {
            var resposta = await _authInterface.Login(usuarioLogin);
            return Ok(resposta);
        }
    }
}