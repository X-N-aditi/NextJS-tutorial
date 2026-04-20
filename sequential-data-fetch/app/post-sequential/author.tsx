type Author = {
    id: number;
    name: string;
};

export async function Author({userId}: {userId: number}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: Author = await response.json();

    return (
        <div className="text-sm text-black">
            Written By: {" "}
            <span className="font-semibold text-black hover:text-grey-900 transition-color-blue">
                {user.name}
            </span>
        </div>
    )
}