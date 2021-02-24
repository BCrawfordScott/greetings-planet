import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreetings } from '../../store/greeting';


export default function GreetingIndex() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);

    const greetings = useSelector((store) => Object.values(store.greeting));

    return (
        <ul className="greeting-list">
            {greetings.map(greet => {
                return (
                    <Link to={`/greetings/${greet.id}`}>
                        <li key={greet.id} className="greet-list-item">{greet.body}</li>
                    </Link>
                );
            })}
        </ul>
    )
}
