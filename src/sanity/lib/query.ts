export const query =
 `*[_type == "product"]{
    _id,
    img,
    name,
    price
}`;
export const four = `*[_type == "product"] | order(_createdAt desc) [0...4]`;