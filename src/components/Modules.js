import React from 'react';

const Modules = () => {
    return (
        <section className="modules-section">
            <div className="modules-grid">
                <div className="module" id="module1">
                    <h3>Module 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="module" id="module2">
                    <h3>Module 2</h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                </div>
                <div className="module" id="module3">
                    <h3>Module 3</h3>
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                </div>
                <div className="module" id="module4">
                    <h3>Module 4</h3>
                    <p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula.</p>
                </div>
            </div>
        </section>
    );
};

export default Modules;
