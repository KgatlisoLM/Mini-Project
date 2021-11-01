using System;
using System.Collections.Generic;
using System.Text;

namespace CORE.Entities
{
    public class Company : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Telehone_No { get; set; }
    }
}
