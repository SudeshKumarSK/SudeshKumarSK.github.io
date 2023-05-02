import "./NoResults.css"

interface NoResultsProps{
  children : string;
}

const NoResults = ({children} : NoResultsProps) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10 col-12">
          <div className="no-results-container">
            <h3 id="error">{children}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
