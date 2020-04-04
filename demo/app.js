import React from 'react'
import ReactDom from 'react-dom'
import CardScroller from '../src/index'

import Img from './test.png'

const CardList = [
    {
        img:Img,
        category:"ANDROID",
        summary:"Bringing more people online and introducing Camera Go",
        dateAndAuthor:"By Arpit Midha & Joris van Mens - Mar 19,2020",
        onClick:function(){
            console.log("Do something")
        },
        activeBackgroundColor:"#00e5ff"
    },
    {
        img:Img,
        category:"ANDROID",
        summary:"Bringing more people online and introducing Camera Go",
        dateAndAuthor:"By Arpit Midha & Joris van Mens - Mar 19,2020",
        onClick:function(){
            console.log("Do something")
        },
        activeBackgroundColor:"#00e5ff"
    },
    {
        img:Img,
        category:"ANDROID",
        summary:"Bringing more people online and introducing Camera Go",
        dateAndAuthor:"By Arpit Midha & Joris van Mens - Mar 19,2020",
        onClick:function(){
            console.log("Do something")
        },
        activeBackgroundColor:"#00e5ff"
    },
    {
        img:Img,
        category:"ANDROID",
        summary:"Bringing more people online and introducing Camera Go",
        dateAndAuthor:"By Arpit Midha & Joris van Mens - Mar 19,2020",
        onClick:function(){
            console.log("Do something")
        },
        activeBackgroundColor:"#00e5ff"
    },
    {
        img:Img,
        category:"ANDROID",
        summary:"Bringing more people online and introducing Camera Go",
        dateAndAuthor:"By Arpit Midha & Joris van Mens - Mar 19,2020",
        onClick:function(){
            console.log("Do something")
        },
        activeBackgroundColor:"#00e5ff"
    }
]

const root = document.createElement('div');
window.document.body.appendChild(root);
ReactDom.render(
    <CardScroller CardList={CardList}/>,
    root
)