
import connectDb from "../../../../helper/connectDb";
import Todos from "../../../../models/todos";

export default async function handler(req, res) {

    await connectDb();

    if (req.method === "POST") {

        const { title } = req.body;

        await Todos.create({ title })
            .then((t) => {

                res.status(200).json(
                    {
                        status: "success",
                        message: "درخواست شما با موفقیت ثبت شد",
                        error: null,
                        _id: t._id,
                    }
                )
            }

            ).catch((c) => {
                res.status(400).json(
                    {
                        status: "failed",
                        message: "درخواست شما با خطا مواجه شد",
                        error: c,
                        _id: null
                    }
                )
            }

            )


    } else if (req.method === "GET") {

        const { viewmode } = req.query;
        console.log(viewmode);

        let searchBody = {};

        if (viewmode == 2) searchBody = { isCompleted: false };
        if (viewmode == 3) searchBody = { isCompleted: true };

        await Todos.find(searchBody)
            .then((t) => { res.status(200).json(t) })
            .catch((c) => {
                res.status(400).json(
                    {
                        status: "failed",
                        message: "درخواست شما با خطا مواجه شد",
                        error: c,
                    }
                )
            }
            )



    } else if (req.method === "DELETE") {

        const { id } = req.query;

        const result = await Todos.findOneAndDelete({ _id: id, isCompleted: false });

        if (result) {
            res.status(200).json(
                {
                    status: "success",
                    message: "درخواست شما با موفقیت حذف شد",
                    error: null,
                    _id: id,
                }
            )
        } else {
            res.status(400).json(
                {
                    status: "failed",
                    message: "درخواست شما با خطا مواجه شد",
                    error: null,
                    _id: null
                }
            )
        }
    } else if (req.method === "PUT") {


        const { id } = req.body;


        const result = await Todos.findByIdAndUpdate(id, {
            isCompleted: true,
            completedAt: Date.now()
        });
        console.log(result)
        if (result) {
            res.status(200).json(
                {
                    status: "success",
                    message: "درخواست شما با موفقیت بروز شد",
                    error: null,
                    _id: id,
                }
            )
        } else {
            res.status(400).json(
                {
                    status: "failed",
                    message: "درخواست شما با خطا مواجه شد",
                    error: null,
                    _id: null
                }
            )
        }
    }
}