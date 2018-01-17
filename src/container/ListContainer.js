import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { removeTodo } from '../action/actions';

const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onTodoClick: id => {
            dispatch(removeTodo(id))
        },

        // onTodoChange: (text, id) => {
        //     dispatch(changeTodo(text, id))
        // }
    }
}
//ASK: Do both mapStateToProps and mapDispatchToProps pass their return value as props??
const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default ListContainer;