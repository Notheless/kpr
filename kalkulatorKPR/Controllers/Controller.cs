using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kalkulatorKPR.Models;
using Excel.FinancialFunctions;

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

            if (_context.CommandRecords.Count() == 0)
            {
                _context.CommandRecords.Add(new CommandRecord { Tenor = 1, Bunga = 1, Harga = 1, Pokok = 1, Dp = 1 });
                _context.CommandRecords.Add(new CommandRecord { Tenor = 2, Bunga = 2, Harga = 2, Pokok = 2, Dp = 2 });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommandRecord>>> GetCommandRecords()
        {
            return await _context.CommandRecords.ToListAsync();
        }
        
        [HttpPost]
        public async Task<ActionResult<CommandRecord>> PostCommandRecords(CommandRecord item)
        {
            _context.CommandRecords.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCommandRecords), new { id = item.Id }, item);
        }
    }
    
}