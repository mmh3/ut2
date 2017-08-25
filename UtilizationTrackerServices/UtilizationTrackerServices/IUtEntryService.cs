using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace UtilizationTrackerServices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IUtEntryService" in both code and config file together.
    [ServiceContract]
    public interface IUtEntryService
    {
        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json, UriTemplate = "GetUtEntries")]
        UtEntry[] GetUtEntries();

        //[OperationContract]
        //[WebGet(UriTemplate = "{}")]
        //UtEntry[] GetUtEntries();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, UriTemplate = "")]
        UtEntry CreateUtEntry(UtEntry entry);

        [OperationContract]
        [WebInvoke(Method = "PUT", ResponseFormat = WebMessageFormat.Json, UriTemplate = "{entryUid}")]
        UtEntry UpdateUtEntry(string entryUid, UtEntry entry);
    }
}
