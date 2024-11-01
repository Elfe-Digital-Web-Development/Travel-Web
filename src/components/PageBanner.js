import Link from "next/link";

const PageBanner = ({ pageTitle }) => {
  return (
    <section
      className="page-banner overlay pt-170 pb-220 bg_cover"
      style={{ backgroundImage: "url(assets/images/bg/page-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="page-banner-content text-center text-white">
              <h1 className="page-title">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
