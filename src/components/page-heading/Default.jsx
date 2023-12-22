import PropTypes from 'prop-types';
import React from 'react';

const Default = ({title, extraMessage}) => {
    return (
        <React.Fragment>
            <section>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='s6-h1-bold'>{title}</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 text-center">
                        <p>{extraMessage}</p>
                    </div>
                </div>
            </section>
            <hr/>
        </React.Fragment>
    );
}

Default.propTypes = {
    title: PropTypes.string.isRequired,
    extraMessage: PropTypes.string
}

export default Default;