using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace kalkulatorKPR.Models
{
    public class CommandRecord
    {
        [Key]
        public int IdKPR { get; set; }
        public int Tenor { get; set; }
        public double Harga { get; set; }
        public double Pokok { get; set; }
        public double Dp { get; set; }
        public double Bunga { get; set; }

        public List<DataRecord> DataRecords { get; set; }
    }
}
