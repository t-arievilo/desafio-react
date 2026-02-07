using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.DTOs;
using backend.Models;
using backend.Services.SenhaService;
using Microsoft.EntityFrameworkCore;
using Models;

namespace backend.Services.AuthServices
{
    public class AuthService : IAuthInterface
    {
        private ISenhaInterface _senhaInterface;
        private AppDbContext _context;

        public AuthService(AppDbContext context, ISenhaInterface senhaInterface)
        {
            _senhaInterface = senhaInterface;
            _context = context;
        }

        public async Task<Response<UsuarioCriacaoDto>> Registrar(UsuarioCriacaoDto usuarioRegistro)
        {
            Response<UsuarioCriacaoDto> respostaServico = new Response<UsuarioCriacaoDto>();

            if (!await VerificaSeEmaileUsuarioExiste(usuarioRegistro))
            {
                respostaServico.Dados = null;
                respostaServico.Mensagem = "Email ou Usuário já cadastrados";
                return respostaServico;
            }

            _senhaInterface.CriarSenhaHash(
                usuarioRegistro.Senha,
                out byte[] senhaHash,
                out byte[] senhaSalt
            );

            UsuarioModel usuario = new UsuarioModel()
            {
                Usuario = usuarioRegistro.Usuario,
                Email = usuarioRegistro.Email,
                SenhaHash = senhaHash,
                SenhaSalt = senhaSalt,
                Status = true
            };

            _context.Add(usuario);
            await _context.SaveChangesAsync();

            respostaServico.Mensagem = "Usuário criado com sucesso";

            return respostaServico;

        }

        public async Task<Response<string>> Login(UsuarioLoginDto usuarioLogin)
        {
            Response<string> respostaServico = new Response<string>();

            var usuario = await _context.Usuario.FirstOrDefaultAsync(usuarioBanco =>
                usuarioBanco.Email == usuarioLogin.Email);
            
            if (usuario == null)
            {
                SetCredencialInvalida();
                return respostaServico;
            }

            if (!_senhaInterface.VerificaSenhaHash(
                usuarioLogin.Senha,
                usuario.SenhaHash,
                usuario.SenhaSalt
            )); 
            {
                SetCredencialInvalida();
                return respostaServico;
            }


            void SetCredencialInvalida()
            {
                respostaServico.Mensagem = "Credenciais Inválidas";
            }
        }        public async Task<bool> VerificaSeEmaileUsuarioExiste(UsuarioCriacaoDto usuarioRegistro)
        {
            var usuario = await _context.Usuario.FirstOrDefaultAsync(
                usuarioBanco =>
                   usuarioBanco.Email == usuarioRegistro.Email || usuarioBanco.Usuario == usuarioRegistro.Usuario
            );

            if (usuario != null) return false;
            return true;
        }
    }
}