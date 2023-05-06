export const ErrorMiddleware = (err,req,res,next) => {
    console.log(err);
    return res.status(500).send(err);
}