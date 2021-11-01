using CORE.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CORE.Interfaces
{
    public interface ICompanyRepo
    {
        Task<IReadOnlyList<Company>> GetCompaniesAsync();
    }
}
