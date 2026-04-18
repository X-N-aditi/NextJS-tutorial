// export default async function ProductDetail() {
//     return (
//         <h2>product detail page here</h2>
//     )
// }



//-----------------------------------------
export default async function ProductDetails({
    params,
}:{
    params: Promise<{ productID: string }>;
}) {
    const productID = (await params).productID;
    return <h1> Deatils about product {productID}</h1>;
}