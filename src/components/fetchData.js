import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/actionsCreater.js';

function FetchData() {
    const { loading, users, error } = useSelector(state => state.thunkAPI);
    const dispatch = useDispatch();

    return (
        <div>
          <h1>redux-thunk middleware</h1>
          <button onClick={() => dispatch(fetchUsers())}>fetch some users</button>
          <ul>
            {
                loading
                ? "loading ..."
                : error
                ? error
                : users.map((user, idx) => {
                    return <li key={idx}>{user}</li>;
                  })
            }
          </ul>
        </div>
    )
}

export default FetchData;
