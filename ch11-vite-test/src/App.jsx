//추가2-1, useRef, useCallback
import { useRef, useCallback, useState } from 'react'

import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
  // 더미 데이터 추가1
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  //추가2-2, useRef
  // 고유 id로 사용될 값
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  //추가2-3, useCallback 이용해서, 한번만 생성후, 재사용.
  const onInsert = useCallback(
    (text) => {
      // 사용자가 입력한 일정, 객체
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 불변성 유지 하면서, 내장함수 concat , 기본 배열에 추가하기.
      setTodos((todos) => todos.concat(todo)); // 새로운 항목 추가
      nextId.current += 1; // nextId를 1씩 증가
    },
    []
  );

  // 추가 3-1,
  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    []
  );

  // 추가 4-1
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  //실습1, 
  const checkedCount =
    todos.filter((todo) => todo.checked).length

  //실습2, todos 배열 안의 객체 요소의 checked 부분 설정. 
  // 함수 안에, 다시 함수 형태로 넣게 되면, 
  // useCallback 사용시, 의존성 배열안에 빈 문자열을 넣어서, 
  // 함수를 한번 만 생성 후, 재사용하는 결과 와 같음. 
  const toggleAll = useCallback(() => {
    setTodos(
      (todos) =>
        todos.map((todo) => ({ ...todo, checked: !todo.checked }))
    )
  }, []);

  //실습3, 
  const checkedTodos = todos.filter((todo) => todo.checked);
  const uncheckedTodos = todos.filter((todo) => !todo.checked);

  //실습4,
  const removeChecked = useCallback(() => {
    setTodos(
      (todos) =>
        todos.filter((todo) => !todo.checked))
    }
    , []
  )

  //실습 5
  const [search, setSearch] = useState("");
  const searchedTodos = todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <>
      <h1 className='react'>ch10 일정관리 애플리케이션 예제</h1>
      <TodoTemplate>
        {/* Todo App을 만들자! */}
        {/* 추가2-4, 부모 -> 자식, props 전달, onInsert*/}
        <TodoInsert onInsert={onInsert} />
        <div>
          <input type='text' placeholder='검색어'
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <h3>검색된 목록</h3>
          <h3>검색된 갯수 : {searchedTodos.length}</h3>
          <TodoList todos={searchedTodos} onRemove={onRemove} onToggle={onToggle} />
          <button onClick={removeChecked}>완료된 항목 삭제</button>
        </div>
        <div>
          완료된 항목의 갯수 : {checkedCount}
        </div>
        <button onClick={toggleAll}>상태 체크 반전 모두하기.</button>
        {/* 더미 데이터 추가2  props 로 전달. */}
        {/* 추가 3-3, onRemove 부모 -> 자식, props 전달, onRemove */}
        {/* 추가 4-2, onToggle 부모 -> 자식, props 전달, onToggle */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <div>
          <h3>체크된 항목</h3>
          <TodoList todos={checkedTodos} onRemove={onRemove} onToggle={onToggle} />
          <h3>체크 안된 항목</h3>
          <TodoList todos={uncheckedTodos} onRemove={onRemove} onToggle={onToggle} />
        </div>
      </TodoTemplate>;

    </>
  )
}

export default App
