using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace backend.Middleware
{
    public class TratamentoDeErro
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<TratamentoDeErro> _logger;

        public TratamentoDeErro(RequestDelegate next, ILogger<TratamentoDeErro> logger)
        {
            _next = next;
            _logger = logger;   
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);

            }catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);

                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Response.ContentType = "application/json";

                var response = new
                {
                    mensagem = "Tivemos um problema interno. Tente novamente mais tarde."
                };

                var json = JsonSerializer.Serialize(response);
                await context.Response.WriteAsync(json);
            }
        }
    }
}