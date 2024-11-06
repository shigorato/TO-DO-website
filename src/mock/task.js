import { generateUniqueId } from '../model/utils.js';

export const tasks = [
    {
        'id':generateUniqueId(),
        'title':'Выучить Js',
        'status':'backlog'
    },
    {
        'id':generateUniqueId(),
        'title':'Найти утку',
        'status':'backlog'
    },
    {
        'id':generateUniqueId(),
        'title':'Основы React?',
        'status':'backlog'
    },
    {
        'id':generateUniqueId(),
        
        'status':'in-progress'
    },
    {
        'id':generateUniqueId(),
        
        'status':'in-progress'
    },
    {
        'id':generateUniqueId(),
        'title':'Выучить Js',
        'status':'done'
    },
    {
        'id':generateUniqueId(),
        'title':'Найти баг',
        'status':'done'
    },
    {
        'id':generateUniqueId(),
        'title':'Поспать',
        'status':'trash'
    },
    {
        'id':generateUniqueId(),
        'title':'Выпить энергетик',
        'status':'trash'
    },
]