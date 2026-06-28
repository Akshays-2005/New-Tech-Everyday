import React from 'react'
import { Outlet, Link,useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers=searchParams.get('active')==='true';
    return (
        <>
            <div className="users">
                <Link to="1">User 1</Link>
                <Link to="2">User 2</Link>
                <Link to="3">User 3</Link>
            </div>
            <Outlet />
            <div>
                <button onClick={()=>setSearchParams({active: 'true'})}>Active users</button>
                <button onClick={()=>setSearchParams({})}>Reset filters</button>
            </div>
            {
                showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
        </>
    )
}
