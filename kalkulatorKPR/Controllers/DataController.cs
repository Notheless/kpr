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
    public class DataController : ControllerBase
    {
        private readonly KPRContext _context;
        
        public DataController(KPRContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DataRecord>>> GetCommandRecords()
        {
            return await _context.DataRecords.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<DataRecord>>> GetDataRecords(long id)
        {
            var todoItem = await _context.DataRecords.Where(i=>i.IdKPR==id).ToListAsync();

            if (todoItem.Count() == 0)
            {
                return NotFound();
            }

            return todoItem;
        }

        [HttpPost]
        public async Task<ActionResult<DataRecord>> PostDataRecords(DataRecord item)
        {
            _context.DataRecords.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCommandRecords), new { id = item.Id }, item);
        }

    }
    
}