import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        numTodo: state.numTodo,
        numFin: state.numFin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const CounterContainer =connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter) 

export default CounterContainer;