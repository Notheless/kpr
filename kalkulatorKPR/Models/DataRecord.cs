using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kalkulatorKPR.Models
{
    public class DataRecord
    {
        public int Id { get; set; }
        public int IdKPR { get; set; }
        public int Bulan { get; set; }
        public double Pokok { get; set; }
        public double bunga { get; set; }
        public double PembayaranPokok { get; set; }
        public double Angsuran { get; set; }
        public double Sisa { get; set; }

        public CommandRecord CommandRecord { get; set; }
    }
}
