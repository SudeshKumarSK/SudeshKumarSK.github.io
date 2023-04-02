import "./Table.css";

interface SearchDetails {
  event: string | null;
  localDate: string | null;
  localTime: string | null;
  genre: string | null;
  venue: string | null;
  icon: string | null;
  id: string | null;
}

interface TableProps {
  searchDetails: SearchDetails[];
  onSelectEvent: (eventId: string | null, eventName: string | null) => void;
}

const Table = ({ searchDetails, onSelectEvent }: TableProps) => {
  const sortedSearchDetails = searchDetails.sort((a, b) => {
    if (a.localDate && b.localDate) {
      return new Date(a.localDate).getTime() - new Date(b.localDate).getTime();
    }
    return 0;
  });

  const handleEventClick = async (eventDetail: SearchDetails) => {
    console.log("Detected Click of the below event in the Table Component!");
    console.log(eventDetail);

    const eventId = eventDetail.id;
    const eventName = eventDetail.event;
    
    /* */
    onSelectEvent(eventId, eventName);
  };

  return (
    <div className="container" style={{marginTop: "100px", marginBottom: "50px"}}>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-10 col-12">
          <div className="table-responsive-md ">
            <table className="table table-dark table-striped rounded-table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Date/Time
                  </th>
                  <th scope="col" className="text-center">
                    Icon
                  </th>
                  <th scope="col" className="text-center">
                    Event
                  </th>
                  <th scope="col" className="text-center">
                    Genre
                  </th>
                  <th scope="col" className="text-center">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedSearchDetails.map((searchDetail, index) => (
                  <tr
                    key={index}
                    onClick={() => handleEventClick(searchDetail)}
                  >
                    <td id="td-date" className="text-center">
                      <div> {searchDetail.localDate || "-"} </div>
                      {/* <div> {eventDetail.localTime || "-"} </div> */}
                      {searchDetail.localTime ? (
                        <div> {searchDetail.localTime || "-"} </div>
                      ) : null}
                    </td>
                    <td id="td-icon" className="text-center">
                      {searchDetail.icon ? (
                        <img src={searchDetail.icon} alt="icon" />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td id="td-event" className="text-center">
                      {searchDetail.event || "-"}
                    </td>
                    <td id="td-genre" className="text-center">
                      {searchDetail.genre || "-"}
                    </td>
                    <td id="td-venue" className="text-center">
                      {searchDetail.venue || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
