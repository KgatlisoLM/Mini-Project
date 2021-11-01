using API.Data.Models;
using API.Dtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Company, ReturnCompanyDto>();
            CreateMap<AddCompanyDto, Company>();


        }
    }
}
