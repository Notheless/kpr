using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kalkulatorKPR.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;

namespace kalkulatorKPR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {
        private readonly KPRContext _context;

        public RecordController(KPRContext context)
        {

            _context = context;
            context.Database.EnsureCreated();
            if (context.CommandRecords.Any())
            {
                return;
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommandRecord>>> GetCommandRecords()
        {
            return await _context.CommandRecords.ToListAsync();
        }
        
        [HttpPost]
        public async Task<ActionResult<CommandRecord>> PostTodoItem(CommandRecord item)
        {
            _context.CommandRecords.Add(item);
            await _context.SaveChangesAsync();
            int lastIdKPR = _context.CommandRecords.Max(x => x.IdKPR);

            ProsesData(item.Tenor,item.Bunga,item.Harga,item.Pokok,item.Dp, lastIdKPR).GetAwaiter().GetResult();

            return CreatedAtAction(nameof(GetCommandRecords), new { id = item.IdKPR }, item);
        }


        static async Task ProsesData(int Tenor,double Bunga, double Harga, double Pokok, double Dp, int Id)
        {

            
            double bunga = Bunga;
            double jumlah = Pokok;
            int jankaWaktu = Tenor;
            int sisaDurasi;
            bunga /= 1200;
            jankaWaktu *= 12;
            sisaDurasi = jankaWaktu;
            
            double angsuran = 0;
            double pembagi = 1 + bunga;
            double temp = pembagi;

            for (int i = 1; i < jankaWaktu; i++)
            {
                pembagi *= temp;
            }

            angsuran = bunga * Pokok * pembagi;
            angsuran /= (pembagi - 1);

            while (sisaDurasi > 0)
            {
                jumlah = await perhitunganKPR(jumlah, bunga, angsuran, sisaDurasi,jankaWaktu,Id);
                sisaDurasi--;
            }

        }
        
        static async Task<double> perhitunganKPR(double jumlah, double bunga, double totalBulanan, int sisaDurasi, int jankaWaktu, int Id)
        {
            double sisaBulanan, bungaBulanan, pokokBulanan;

            bungaBulanan = jumlah * bunga;
            pokokBulanan = totalBulanan - bungaBulanan;
            sisaBulanan = jumlah - pokokBulanan;

            double total = pokokBulanan + bungaBulanan;

            try
            {
                DataRecord record = new DataRecord
                {
                    IdKPR = Id,
                    Bulan = jankaWaktu - sisaDurasi + 1,
                    Pokok = jumlah,
                    bunga = bunga,
                    PembayaranPokok = pokokBulanan,
                    Angsuran = totalBulanan,
                    Sisa = sisaBulanan
                };
                var url = await CreateProductAsync(record);
            }
            catch (Exception e)
            {

            }

            return sisaBulanan;
        }


        //Bikin record baru
        static async Task<Uri> CreateProductAsync(DataRecord record)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("http://localhost:8080/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = await client.PostAsJsonAsync(
                "api/data", record);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response.Headers.Location;
        }
    }
}