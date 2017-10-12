using Dapper.Contrib.Extensions;
using System;
using System.Runtime.Serialization;

namespace utServer_WindowsAuth
{
    [DataContract]
    [Table("time_tracker")]
    public class UtEntry
    {
        [DataMember]
        [Key]
        public int time_tracker_uid { get; set; }
        [DataMember]
        public int project_number { get; set; }
        [DataMember]
        public DateTime entry_date { get; set; }
        [DataMember]
        public int work_type { get; set; }
        [DataMember]
        public int minutes { get; set; }
        [DataMember]
        public int action_type { get; set; }
        [DataMember]
        public string comments { get; set; }
        [DataMember]
        public string bad_work { get; set; }
        [DataMember]
        public int employee_id { get; set; }
        [DataMember]
        public DateTime date_created { get; set; }
        [DataMember]
        public string created_by { get; set; }
        [DataMember]
        public DateTime date_last_modified { get; set; }
        [DataMember]
        public string last_maintained_by { get; set; }
    }

    public enum WorkType
    {
        NewDev = 107619,
        Rework = 107620
    };

    public enum ActionType
    {
        Coding = 107621,
        Testing = 107622,
        MovingCode = 107623,
        Deploying = 107624,
        SpecDocu = 107625,
        Quoting = 107626,
        Meeting = 107627,
        Other = 107632,
        General = 107640,
        Training = 107774
    };
}