import { db } from "@/lib/db";

export async function getUsers() {
    const [rows] = await db.query("select * from users");
    return rows;
}

export default async function UsersPage() {
    const users: any = await getUsers();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users</h1>

            {users.map((user: any) => (
                <div key={user.id} className="p-4 border mb-2">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
}