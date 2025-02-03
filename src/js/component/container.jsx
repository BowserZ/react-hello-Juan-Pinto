import React from 'react';

const Container= () => {
return (
<section>
    <div className="container d-flex justify-content-center myContainer">
        <div className="container-fluid my-4 p-4 bg-light rounded">
            <h1 className="text-center text-danger fw-bold">Not a Ponzi Scheme Website</h1>
            <div className="mb-4">
                <h3 className="text-primary fw-bold mb-2">Our values:</h3>
                <p className="text-muted">
                    Don't worry! This page is so legit that even my grandma uses it to look up recipes (and not to sell
                    you a pyramid scheme disguised as a 'unique opportunity').
                    There are no promises of making you rich while you sleep... but there is a nice design with
                    Bootstrap.
                </p>
            </div>

            {/* Steps without map */}
            <ul className="list-group mb-4">
                <li className="list-group-item border-0">
                    <h5 className="text-success fw-bold">Step 1:</h5>
                    <p className="text-muted">
                        Find a "unique" opportunity – You know, something that no one else has discovered yet, but will
                        totally change your life (and probably theirs too).
                        Just make sure it's exclusive, so only a handful of people can "take advantage" of it.
                    </p>
                </li>

                <li className="list-group-item border-0">
                    <h5 className="text-success fw-bold">Step 2:</h5>
                    <p className="text-muted">
                        Invest all your savings – Take that money you've been saving for a rainy day, or that emergency
                        fund, and put it all into this amazing opportunity.
                        The more you put in, the faster the rewards... right?
                    </p>
                </li>

                <li className="list-group-item border-0">
                    <h5 className="text-success fw-bold">Step 3:</h5>
                    <p className="text-muted">
                        Share with everyone – The secret to unlocking the real wealth? It’s simple: tell your friends,
                        family, and even strangers on social media.
                        The more people you get in, the more successful it will be... trust me, it works.
                    </p>
                </li>
            </ul>

            {/* Disclaimer */}
            <div className="p-3 bg-light border rounded">
                <h6 className="text-danger fw-bold d-inline">Disclaimer:</h6>
                <p className="text-muted mb-0 d-inline"> Subscribe to a limited-time course and start making a lot of
                    money without having any fucking skill and become the next Jeff Bezzos!</p>
                <a class="btn btn-primary ms-5" href="#" role="button">Click me!</a>
            </div>
        </div>
    </div>
</section>
);
};

export default Container

/*<div className="p-3 bg-light border rounded">
      <h6 className="text-danger fw-bold d-inline">Disclaimer:</h6>
      <p className="text-muted mb-0 d-inline"> Definitely don't follow this advice unless you're just dumb.</p>
    </div>*/