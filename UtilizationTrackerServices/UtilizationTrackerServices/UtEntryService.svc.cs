using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Dapper;
using Dapper.Contrib.Extensions;
using System.Data;

namespace UtilizationTrackerServices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "UtEntryService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select UtEntryService.svc or UtEntryService.svc.cs at the Solution Explorer and start debugging.
    public class UtEntryService : IUtEntryService
    {
        public UtEntry[] GetUtEntries()
        {
            string conString = string.Format(@"server={0};Database={1};User Id={2};Trusted_Connection=True;",
                                               @"bass-phl-pen\sql2008r2", "DefectTracker", "matt.hensinger");

            IDbConnection db = new SqlConnection(conString);

            return db.Query<UtEntry>("SELECT * FROM time_tracker WHERE employee_id = 250 ORDER BY entry_date DESC").ToArray<UtEntry>();
        }

        public UtEntry CreateUtEntry(UtEntry entry)
        {
            string conString = string.Format(@"server={0};Database={1};User Id={2};Trusted_Connection=True;",
                                               @"bass-phl-pen\sql2008r2", "DefectTracker", "matt.hensinger");

            IDbConnection db = new SqlConnection(conString);

            db.Insert(entry);

            return new UtEntry();
        }

        public UtEntry UpdateUtEntry(string entryUid, UtEntry entry)
        {
            string conString = string.Format(@"server={0};Database={1};User Id={2};Trusted_Connection=True;",
                                               @"bass-phl-pen\sql2008r2", "DefectTracker", "matt.hensinger");

            IDbConnection db = new SqlConnection(conString);

            db.Update(entry);

            return new UtEntry();
        }
    }
}
