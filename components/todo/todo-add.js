import axios from "axios";
import react, { useContext, useState } from "react";
import { TodoContext } from './todo-context';
import { message, notification } from "antd/es";

const TodoAdd = () => {

    const { setTodos } = useContext(TodoContext);
    const defaultForm = { title: "" };

    const [form, setForm] = useState(defaultForm);
    const [api, contextHolder] = notification.useNotification();
    const submitHandler = () => {
        event.preventDefault();

        axios.post('/api/todo', form)
            .then((res) => {
                setForm(defaultForm);

                api['success']({
                    message: 'تبریک', duration: 1.4, pauseOnHover: false, showProgress: true,
                    description:
                        'اطلاعات با موفقیت درج شد',
                });



                setTodos((prevTodos) => [...prevTodos, res.data]);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    // const { refetch } = useQuery({
    //     queryKey: ['todoList'],
    //     queryFn: async () => {
    //         const response = await fetch('/api/todo',)

    //         return await response.json()
    //     },
    // })


    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }



    return (
        <div>
            <div>
                {contextHolder}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-row gap-6 items-center">
                        <p className="text-nowrap  text-sm  text-gray-900">عنوان کار</p>
                        <input onChange={changeHandler} type="text" value={form.title} name="title"
                            className="bg-transparent border border-gray-300  text-gray-700 text-sm rounded-lg  block w-full p-2.5 font-bold " placeholder="عنوان" required
                        />
                        <button className="bg-slate-100 w-32 hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm  px-5 py-2 text-center">درج</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default TodoAdd;
