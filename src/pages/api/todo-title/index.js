const titleList = [
    { id: 1, title: 'لورم ایپسوم متن ساختگی با ', todos: 10, inProgress: 6, done: 3, suspended: 0, createAt: '' },
    { id: 2, title: 'لورم ایپسوم متن ساختگی با ', todos: 9, inProgress: 5, done: 3, suspended: 0, createAt: '' },
    { id: 3, title: 'لورم ایپسوم متن ساختگی با ', todos: 8, inProgress: 4, done: 3, suspended: 0, createAt: '' },
    { id: 4, title: 'لورم ایپسوم متن ساختگی با ', todos: 7, inProgress: 4, done: 3, suspended: 0, createAt: '' },
    { id: 5, title: 'لورم ایپسوم متن ساختگی با ', todos: 6, inProgress: 3, done: 3, suspended: 0, createAt: '' },
    { id: 6, title: 'لورم ایپسوم متن ساختگی با ', todos: 5, inProgress: 2, done: 3, suspended: 0, createAt: '' },
    { id: 7, title: 'لورم ایپسوم متن ساختگی با ', todos: 4, inProgress: 1, done: 3, suspended: 0, createAt: '' },
]

const todoList = [
    { id: 1, title: 'لورم ایپسوم متن ساختگی با ',checked : false , createAt: '' },
    { id: 2, title: 'لورم ایپسوم متن ساختگی با ',checked : false , createAt: '' },

]

export default function handler(req, res) {

    if (req.method === 'GET')
        res.status(200).json(titleList);


    if (req.method === 'POST')
        res.status(200).json(titleList);
}
