import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PattRender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.patts) {
            const { patts } = this.props;
            const patt = patts(patts.keys()[0]).default;

            const Component = patt.components[0].component;

            return (
                <div>
                    <Component />
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => {
    return ({
        patts: state.patt.patts
    });
};

export default connect(mapStateToProps, null)(PattRender);