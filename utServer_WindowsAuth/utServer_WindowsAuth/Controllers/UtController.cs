using Dapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace utServer_WindowsAuth.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UtController : Controller
    {
        //[AcceptVerbs("OPTIONS")]
        [HttpOptions("userName")]
        public HttpResponseMessage Options()
        {
            var resp = new HttpResponseMessage(HttpStatusCode.OK);
            resp.Headers.Add("Access-Control-Allow-Origin", "*");
            resp.Headers.Add("Access-Control-Allow-Methods", "GET,DELETE,OPTIONS");

            return resp;
        }

        private readonly IOptions<ConnectionStrings> _connectionStrings;

        private string _userName { get { return User.Identity.Name.Substring(User.Identity.Name.IndexOf("\\") + 1); } }

        public UtController(IOptions<ConnectionStrings> connectionStrings)
        {
            _connectionStrings = connectionStrings;
        }

        [HttpGet("utEntries")]
        public JsonResult/*UtEntry[]*/ Get()
        {
            IDbConnection db = new SqlConnection(_connectionStrings.Value.UtConnection);

            string query = @"SELECT     time_tracker.* 
                              FROM      time_tracker
                              INNER JOIN  users ON users.dt_user_uid = time_tracker.employee_id
                              WHERE     users.id = @user_id";

            return Json(db.Query<UtEntry>(query, new { user_id = _userName }).ToArray<UtEntry>());
            //return Json("test");
        }

        [HttpGet("userName")]
        public JsonResult/*string*/ GetUserName()
        {
            return Json(_userName);
        }
    }
}
