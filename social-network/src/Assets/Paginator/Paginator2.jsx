import React, {useState} from "react";
import s from './Paginator2.module.css';
import cn from "classnames"
const Paginator = ({totalUsersCount, pageSize, currentPage, onPageClick, portionSize = 2}) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize + 2;

    return <div className={s.pagination}>
        <ul>
            {currentPage !== 1 &&
            <li className={s.btn} onClick={() => {
                if((currentPage === leftPortionPageNumber)){
                    setPortionNumber(portionNumber - 1)
                    onPageClick(currentPage - 1);
                } else onPageClick(currentPage - 1)
            }}>{'<'}
            </li>}
            {portionNumber!== 1 &&
            <li className={s.numb}> <span onClick={() => {
                onPageClick(1);
                setPortionNumber(1);
            }}>{1}</span>
            </li>}
            {portionNumber!== 1 &&
            <li className={s.dots}><span> . . . </span></li>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return<li className={
                       cn({[s.active]: currentPage === p}, s.numb)}
                             key={p}
                             onClick={(e) => {
                                 onPageClick(p);
                             }}>{p}</li>
                })
            }
            {portionNumber!== portionCount &&
            <li className={s.dots}><span>  . . .  </span></li>}
            {portionNumber!== portionCount &&
            <li className={s.numb}> <span onClick={() => {
                onPageClick(pagesCount);
                setPortionNumber(portionCount)
            }}> {pagesCount}</span>
            </li>}
            {currentPage < pagesCount && <li className={s.btn} onClick={() => {
                if((currentPage === rightPortionPageNumber)){
                    setPortionNumber(portionNumber + 1)
                    onPageClick(currentPage + 1);
                } else onPageClick(currentPage + 1);
            }}>
            {'>'}
        </li>}
        </ul>
  </div>
}
export default Paginator