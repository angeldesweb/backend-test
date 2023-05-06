import products from '../../data/products.json';

export const getProducts = async (req,res,next) => {
    let found = [];
    let suggested = []
    if(req.query?.filter) {
        found = products.filter(el => el.name.includes(req.query.filter));
        suggested = products
        .filter(el => el.category === found[0].category && JSON.stringify(el) !== JSON.stringify(found[0])).slice(0,2);

        return res.status(200).send({found:found[0],suggested});
    }

    return res.status(200).send(products);
}