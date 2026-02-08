using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApiBloqueadaJwt : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<Response<string>> Surpresa()
        {
            Response<string> response = new Response<string>();
            response.Mensagem = "Você acessou o endpoint bloqueado!";
            response.Status = true;

            return Ok(response);
        }
    }
}