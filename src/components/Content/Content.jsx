import image1 from "../../assets/1.png";
export const Content = () => {
  return (
    <main className="container">
      <div className="col-lg-4 mt-4 mt-lg-0 text-center">
        <span className="text-primary font-weight-bold">
          Unhappy with your website?
        </span>
        <h2 className="h3 font-weight-bold">
          We create beautiful and fast web services
        </h2>
      </div>
      <div className="col-12 text-center">
        <img src={image1} alt="" className="img-fluid" />
      </div>
      <div className="mt-4 mt-lg-0">
        <div className="card" style={{ width: "18rem", border: "none" }}>
          <div className="card-body">
            <h2 className="card-title">Story, emotion, and purpose</h2>
            <p className="card-text">
              We help! transform your ideas into real-world applications that
              will outperform your toughest competition and help you achieve
              your strategic goals in a short period of time.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
