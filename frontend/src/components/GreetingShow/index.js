import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGreeting } from '../../store/greeting';

export default function GreetingShow() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchGreeting(id));
    }, [dispatch, id]);

    const greeting = useSelector((store) => store.greeting[id]);

    return (
        <div className="greeting-show">
        {greeting && (
            <h3>
                {greeting.body}
            </h3>
        )}    
        </div>
    )
}
