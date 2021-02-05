import React from "react";

const Portfolio = () => {
  return (
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div class="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/cabin.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Portfolio Item 2--> */}
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal2"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/cake.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Portfolio Item 3--> */}
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal3"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/circus.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Portfolio Item 4--> */}
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal4"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/game.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Portfolio Item 5--> */}
          <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal5"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/safe.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Portfolio Item 6--> */}
          <div class="col-md-6 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal6"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="assets/img/portfolio/submarine.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal1Label"
                    >
                      Log Cabin
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cabin.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal2Label"
                    >
                      Tasty Cake
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cake.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 3--> */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal3Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal3Label"
                    >
                      Circus Tent
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/circus.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 4--> */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal4Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal4Label"
                    >
                      Controller
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/game.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 5--> */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal5"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal5Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal5Label"
                    >
                      Locked Safe
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/safe.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 6--> */}
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal6"
        tabindex="-1"
        role="dialog"
        aria-labelledby="portfolioModal6Label"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button
              class="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i class="fas fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal6Label"
                    >
                      Submarine
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      class="img-fluid rounded mb-5"
                      src="assets/img/portfolio/submarine.png"
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button class="btn btn-primary" data-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
