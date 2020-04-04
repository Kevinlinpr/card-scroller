import React, { useState } from 'react'
import './style.css'
import StaticCard from 'static-card'


function Card (props){
    return (
    <div className="Card">
        <StaticCard
            img={props.img}
            category={props.category}
            summary={props.summary}
            dateAndAuthor={props.dateAndAuthor}
            onClick={props.onClick}
            activeBackgroundColor={props.activeBackgroundColor}
        />
    </div>
    )
}


export default function CardScroller(props){
    const [viewIndex,setViewIndex] = useState(0);
    const CardList = props.CardList;
    return (
        <>
            <div style={{width:'100%',height:'480px',overflow:'hidden',marginTop:'200px'}}>
            <div 
                className="CardScrollerWrapper"
                style={{marginLeft:(viewIndex*-502 + 486)<=((CardList.length-2)*-502 + 486)?((CardList.length-2)*-502 + 486):(viewIndex*-502 + 486),width:CardList.length*440+440}}
            >
               {
                   CardList.map((value,index,Array)=>{
                       return(
                           <Card
                                key={index}
                                img={value.img}
                                category={value.category}
                                summary={value.summary}
                                dateAndAuthor={value.dateAndAuthor}
                                onClick={value.onClick}
                                activeBackgroundColor={value.activeBackgroundColor}
                           />
                       )
                   })
               }
            </div>
            <div className="CardScrollerSelector">
                {
                   CardList.map((value,index,Array)=>{
                       return(
                        <div className="Selector"
                            key={index}
                            onClick={()=>{
                                setViewIndex(index);
                            }}
                            style={{backgroundColor:viewIndex==index?'#dadce0':'white'}}
                        ></div>
                       )
                   })
                }
            </div>
            <div
                className="CardScrollerAttach"
                
            >
            {
                viewIndex<=0?
                <div
                className="CardScrollerPreviousNull"
                onClick={()=>{
                    setViewIndex(viewIndex-1)
                }}
                >
                </div>:
                <div
                className="CardScrollerPrevious"
                onClick={()=>{
                    setViewIndex(viewIndex-1)
                }}
                >
                    <div className="Previous">

                    </div>
                </div>
            }
            {
                viewIndex>=(CardList.length-1)||(viewIndex*-502 + 486)<=((CardList.length-2)*-502 + 486)?
                <div 
                className="CardScrollerAfterNull"
                onClick={()=>{
                    setViewIndex(viewIndex+1)
                }}
                ></div>:
                <div 
                    className="CardScrollerAfter"
                    onClick={()=>{
                        setViewIndex(viewIndex+1)
                    }}
                >
                    <div className="After">

                    </div>
                </div>
            }
            </div>
            </div>
            
        </>
    )
} 