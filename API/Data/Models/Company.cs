using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Telephone { get; set; }
    }
}
