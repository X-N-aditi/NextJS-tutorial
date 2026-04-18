
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Second() {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading pages")
    }
    return (
        <h1>Second Blog Page</h1>
    );
}