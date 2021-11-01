using API.Dtos;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly CompanyService _companyService;
        private readonly IMapper _mapper;

        public CompanyController(CompanyService companyService, IMapper mapper)
        {
            _companyService = companyService;
            _mapper = mapper;
        }


        [HttpPost]
        public async Task<IActionResult> AddCompany(AddCompanyDto addCompany)
        {
            await _companyService.AddCompany(addCompany);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReturnCompanyDto>>> GetCompanies([FromQuery] string searchQuery)
        {
            var search = await _companyService.SearchCompany(searchQuery);
            return Ok(_mapper.Map<IEnumerable<ReturnCompanyDto>>(search));
        }
    }
}
