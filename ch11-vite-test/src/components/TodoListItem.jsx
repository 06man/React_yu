import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';

// 추가1 
// 클래스 이름 쉽게 접근 및 조건부 렌더링 하는 도구 
import cn from 'classnames';
import './TodoListItem.scss';

// 추가1-2, { todo } ->  
// { id: 1, text: '리액트의 기초 알아보기',checked: true,},

// 추가 2-1 , onRemove
// 추가 3-1 , onToggle
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    // 추가 2-2, id
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                {/* 추가1-3 */}
                <div className={cn('checkbox', { checked })}
                    // 추가 3-2 , onToggle
                    onClick={() => onToggle(id)}>
                    {/* 추가1-4 */}
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    {/* 추가1-5 */}
                    <div className="text">{text}</div>
                </div>
                {/* 추가 2-3 */}
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);;