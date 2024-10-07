import { useEffect, useState } from "react";

export const User = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.map((user: {name: string}) => user.name)))
        .catch(() => setError("Error in fethcing the data"));
    }, []);
    return(
        <>
            <div>
                <h1>Users</h1>
                {error && <p>{error}</p>}
                <ul>
                    {users.map((user) => (
                        <li key={user} style={{listStyle: 'none'}}>{user}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}