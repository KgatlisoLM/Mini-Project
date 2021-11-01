using API.Data;
using API.Data.Models;
using API.Dtos;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class CompanyService 
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public CompanyService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task AddCompany(AddCompanyDto addCompany)
        {
            var company = _mapper.Map<AddCompanyDto, Company>(addCompany);
            _context.Companies.Add(company);
            await _context.SaveChangesAsync();

        }

        public async Task<List<Company>> GetCompaniesAsync()
        {
            var _company = await _context.Companies.ToListAsync();
            return _company;
        }

        public async Task<List<Company>> SearchCompany(string searchQuery)
        {
            if (string.IsNullOrWhiteSpace(searchQuery))
                return await GetCompaniesAsync();

            var collection = _context.Companies as IQueryable<Company>;

            if (!string.IsNullOrWhiteSpace(searchQuery))
            {
                searchQuery = searchQuery.Trim();
                collection = collection.Where(b => b.Name.Contains(searchQuery));
            }

            return await collection.ToListAsync();
        }
    }
}
