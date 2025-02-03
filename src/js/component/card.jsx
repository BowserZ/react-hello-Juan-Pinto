import React from 'react';

const Card = () => {
  return (
    <section className="border-bottom">
            <div className="m-3 p-3 bg-light rounded">
                <h1>Portfolio</h1>
                <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatem eveniet
                    repudiandae ipsam id accusantium dolor ad facere quibusdam laboriosam autem, enim possimus sequi
                    laudantium mollitia nostrum harum at asperiores?</p>
            </div>

            <div className="row">
               
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                    <div className="m-3 p-3">
                        <div className="card border-0">
                            <img className="card-img-top w-100 spring-seattle"
                                src="https://cdn.tripster.com/travelguide/wp-content/uploads/2024/08/seattle-washington-fall-skyline.jpg?auto=webp&optimize=medium"
                                alt="Autumn-Seattle"/>
                            <div className="card-body">
                                <h4 className="card-title d-flex justify-content-center">Work with us this spring!</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quidem sequi labore impedit et molestias quaerat eaque, vitae, ex natus, officia nihil laboriosam? Cupiditate explicabo, ab repellendus reiciendis totam expedita!</p>
                            </div>
                            <div className="p-3 d-flex justify-content-center">
                                <a class="btn btn-primary ms-5" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-4">
                    <div className="m-3 p-3">
                        <div className="card border-0">
                            <img className="card-img-top w-100 autumn-seattle"
                                src="https://dostuff-assets.s3.amazonaws.com/property_asset/50481/walk-01.jpg"
                                alt="Winter-Seattle"/>
                            <div className="card-body">
                                <h4 className="card-title d-flex justify-content-center">Or maybe on Autumn!</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut ab nemo! Officia, odit laborum quaerat ad unde autem deserunt quis sed voluptate maiores cumque ratione laboriosam voluptas dolor impedit.</p>
                            </div>
                            <div className="p-3 d-flex justify-content-center">
                                <a class="btn btn-primary ms-5" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
                
              
                <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-4">
                    <div className="m-3 p-3">
                        <div className="card border-0">
                            <img className="card-img-top w-100 winter-seattle"
                                src="https://smalltownwashington.com/wp-content/uploads/2020/11/Seattle-winter-snow-shutterstock_353407586.jpg"
                                alt="Winter-Seattle"/>
                            <div className="card-body">
                                <h4 className="card-title d-flex justify-content-center">Someone will meet Santa!</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae labore, alias velit dolorum assumenda quibusdam fugit eum nulla quas suscipit rem. Eaque corrupti fugiat voluptas voluptate quas quia quaerat.</p>
                            </div>
                            <div className="p-3 d-flex justify-content-center">
                                <a class="btn btn-primary ms-5" href="#" role="button">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Card;