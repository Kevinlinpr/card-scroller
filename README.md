# Card Scroller

[![npm](https://img.shields.io/npm/v/card-scroller?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/card-scroller) [![GitHub stars](https://img.shields.io/github/stars/kevinlinpr/card-scroller-card?color=ff4569&logo=github&style=for-the-badge)](https://github.com/Kevinlinpr/card-scroller)

![Twitter Follow](https://img.shields.io/twitter/follow/Tvierrousjan?style=social)

a light-weight React full screen Card Scroller Component.

<div align=center>

![](./doc/card-scroller.gif)

</div>


## Installation

```sh
npm i card-scroller
```
## Usage

```js
import CardScroller from '../src/index'
import Img from './test.png'

const CardList = [{...},{...},{...}] //{...} is CardObject

const MyCard = () => {
    <CardScroller CardList={CardList}/>
}
```
## API
| param                 | detail                                | type                 | require* |
| --------------------- | --------------------------------------| -------------------- | -------- |
| CardList              | card object list (only static card)   | CardObject[ ]        |   true   |

> CardList - Example

```js
const CardList = [{...},{...},{...}]

const MyCard = () => {
    <CardScroller CardList={CardList}/>
}
```

### CardObject

| param                 | detail                                         | type     | require* |
| --------------------- | ---------------------------------------------- | -------- | -------- |
| img                   | card image which always display                | object   |   true   |
| category              | card category of the detail                    | string   |   true   |
| summary               | summary of the card                            | string   |   true   |
| dateAndAuthor         | the detail of this card's creation             | string   |   true   |
| onClick               | onClick Event handler                          | function |   false  |
| activeBackgroundColor | active background color when mouse over it     | string   |   true   |

> CardObject - Example

```js
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
```