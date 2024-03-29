import React, {FC, useState} from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageClick:(pageNumber: number) => void
    portionSize?: number
}
const Paginator: FC<PropsType> = ({totalUsersCount, pageSize,
                                 currentPage = 1, onPageClick = () => {},
                                 portionSize = 2}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages:Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize + 2

    return <>
        <div className={s.pagination}>
            <ul>
                {currentPage !== 1 && <Arrow currentPage={currentPage}
                                             whichPortionNumber={leftPortionPageNumber}
                                             portionNumber={portionNumber - 1}
                                             modifiedCurrentPage={currentPage - 1}
                                             onPageClick={onPageClick}
                                             setPortionNumber={setPortionNumber}
                                             text={'﹤'}
                                             className={s.btn}

                />}
                {portionNumber !== 1 && <>
                    <Arrow onPageClick={onPageClick}
                           modifiedCurrentPage={1}
                           portionNumber={1}
                           text={1}
                           setPortionNumber={setPortionNumber}
                           className={s.numb}
                    />
                    <Dots/>
                </>}


                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <li className={
                            cn({[s.active]: currentPage === p}, s.numb)}
                                   key={p}
                                   onClick={() => {
                                       onPageClick(p);
                                   }}>{p}</li>
                    })
                }

                {(portionNumber !== portionCount) &&
                <>
                    <Dots/>
                    <Arrow onPageClick={onPageClick}
                           setPortionNumber={setPortionNumber}
                           modifiedCurrentPage={pagesCount}
                           portionNumber={portionCount}
                           text={pagesCount}
                           className={s.numb}
                    /></>}
                {currentPage < pagesCount &&
                <Arrow currentPage={currentPage}
                       whichPortionNumber={rightPortionPageNumber}
                       portionNumber={portionNumber + 1}
                       modifiedCurrentPage={currentPage + 1}
                       onPageClick={onPageClick}
                       setPortionNumber={setPortionNumber}
                       text={'﹥'}
                       className={s.btn}
                />}
            </ul>
        </div>
    </>
}
type ArrowType = {
    modifiedCurrentPage: number
    currentPage?: number
    whichPortionNumber?: number
    portionNumber:number
    onPageClick: (pageNumber: number) => void
    setPortionNumber: (portionNumber: number) => void
    text: string | number
    className: string
}
const Arrow: FC<ArrowType> = ({modifiedCurrentPage, currentPage,
                   whichPortionNumber, portionNumber, onPageClick,
                   setPortionNumber, text, className}) => {
    return <li className={className} onClick={() => {
        if ((currentPage === whichPortionNumber)) {
            setPortionNumber(portionNumber)
            onPageClick(modifiedCurrentPage)
        } else onPageClick(modifiedCurrentPage)
    }}>{text}
    </li>
}
const Dots = () => {
    return <li className={s.dots}><span>  . . .  </span></li>
}
export default Paginator