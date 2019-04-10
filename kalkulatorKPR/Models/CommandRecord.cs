using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kalkulatorKPR.Models
{
    public class CommandRecord
    {
        public int Id { get; set; }
        public int Tenor { get; set; }
        public double Harga { get; set; }
        public double Pokok { get; set; }
        public double Dp { get; set; }
        public double Bunga { get; set; }

    }
}
