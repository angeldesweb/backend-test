import products from '../../data/products.json';

export const getProducts = async (req,res,next) => {
    const found = products.filter(el => el.name.includes(req.query.filter));

    const suggested = products.filter(el => el.category === found[0].category);

    return res.status(200).send({found,suggested});
}