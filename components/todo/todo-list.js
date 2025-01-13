import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import { SyncLoader } from "react-spinners";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./todo-context";
import { Button, Popconfirm, Radio } from "antd/es";
import { DeleteOutlined, ScheduleFilled } from "@ant-design/icons";


const queryClient = new QueryClient()

function TodoRows() {


    const [viewMode, setViewMode] = useState(1);


    const { isPending, error, data, isFetching, refetch } = useQuery({
        queryKey: ['todoList'],

        queryFn: async () => {
            const response = await fetch(`/api/todo?viewmode=${viewMode}`,)

            return await response.json()
        },
    });


    const onChange = (e) => {

        setViewMode(e.target.value);

    };

    const deleteTodoHandler = async (id) => {

        axios.delete(`/api/todo?id=${id}`)
            .then(response => {
                refetch();
            })
            .catch(error => {
                // console.log(error)
            })
    }
    const { todos } = useContext(TodoContext);

    useEffect(() => { refetch() }, [todos, viewMode]);

    const setCompletedHandler = async (id) => {

        axios.put(`/api/todo`, { id: id })
            .then(() => {
                refetch();
            })
            .catch(() => {

            })
    }




    if (isPending) return (
        <>
            <div className="text-center my-24">
                <SyncLoader size={10} />
            </div>
        </>
    )

    if (error) return (
        <>
            <div className="text-center my-24 text-red-500 ">
                {error.message}
            </div>
        </>
    )

    return (
        <div >

            <div className="flex flex-row gap-3  items-center text-xs text-nowrap">
                <div>وضعیت نمایش :</div>


                <Radio.Group onChange={onChange} value={viewMode}>
                    <Radio value={1}>همه</Radio>
                    <Radio value={2}>در حال انجام</Radio>
                    <Radio value={3}>پایان یافته</Radio>
                </Radio.Group>

            </div>

            <div style={{ height: `calc(100vh - 370px)`, overflowY: 'auto' }}>
                {
                    data?.map((todo) => (
                        <div key={todo._id} className="flex flex-row items-center justify-between  my-4 p-2 hover:bg-slate-50 border border-gray-400 rounded-lg w-full transform transition duration-500 ">
                            <div>
                                <span className="font-bold">   {todo.title}</span>
                            </div>
                            <div className="flex flex-row gap-2">

                                {todo.isCompleted ? '' : <ScheduleFilled className="text-green-600 text-2xl" onClick={() => { setCompletedHandler(todo._id) }} />}

                                {todo.isCompleted ? '' : (<>
                                    <Popconfirm
                                        title="حذف تسک"
                                        description="از حذف کامل تسک اطمینان دارید؟"
                                        onConfirm={() => { deleteTodoHandler(todo._id) }}
                                        okText="بله"
                                        cancelText="نه!"
                                    >
                                        <Button type="text"><DeleteOutlined className="text-red-600 text-2xl" /></Button>
                                    </Popconfirm>
                                </>)
                                }
                                {/* {todo.isCompleted ? '' : <DeleteOutlined className="text-red-600 text-2xl" onClick={() => { deleteTodoHandler(todo._id) }} />} */}
                            </div>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}


export default function TodoList() {



    return (
        <div >
            <hr className="my-8" />
            <div>
                <QueryClientProvider client={queryClient}>
                    <TodoRows />
                </QueryClientProvider>

            </div>






        </div>
    );
}
