const Portfolio = ({
  isPortrait,
  selectedCategory,
  setSelectedCategory,
  renderComponent,
}) => {
  return (
    <>
      <div className="portfolio-block">
        <div className="title-wrapper">
          <h1 className="main-title">
            <span className="title">Планируется</span>
          </h1>
        </div>

        <div className={isPortrait ? "" : "filter-scrollbar"}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <p
              className={`tag ${selectedCategory === "All" ? "selected" : ""}
                   ${isPortrait ? "" : "mobile"}`}
              onClick={() => setSelectedCategory("All")}
            >
              Все курсы
            </p>

            <p
              className={`tag ${
                selectedCategory === "Banners" ? "selected" : ""
              }
                      ${isPortrait ? "" : "mobile"}`}
              onClick={() => setSelectedCategory("Banners")}
            >
              Планируемые курсы
            </p>
          </div>
        </div>

        <div
          className="content"
          style={{ marginLeft: "-5vw", marginRight: "-5vw" }}
        >
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
