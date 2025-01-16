import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새 항목의 ID
  const [deletedItem, setDeletedItem] = useState(null); // 최근 삭제된 항목 저장

  // 중복 항목 추가 방지 및 공백 방지
  const onAdd = () => {
    if (inputText.trim() === '') {
      alert('항목을 입력해주세요.');
      return;
    }

    if (names.some((name) => name.text === inputText.trim())) {
      alert('중복된 항목은 추가할 수 없습니다.');
      return;
    }

    const newNames = names.concat({ id: nextId, text: inputText.trim() });
    setNames(newNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  // 항목 삭제
  const onRemove = (id) => {
    const itemToRemove = names.find((name) => name.id === id);
    if (itemToRemove) {
      setDeletedItem(itemToRemove);
    }
    setNames(names.filter((name) => name.id !== id));
  };

  // 항목 수정
  const onEdit = (id) => {
    const itemToEdit = names.find((name) => name.id === id);
    const newText = prompt('수정할 내용을 입력하세요:', itemToEdit?.text);
    if (newText?.trim()) {
      setNames(
        names.map((name) => (name.id === id ? { ...name, text: newText.trim() } : name))
      );
    }
  };

  // 항목 ID 표시
  const onShowId = (id) => {
    alert(`항목 ID: ${id}`);
  };

  // 항목 정렬
  const onSortAscending = () => {
    setNames([...names].sort((a, b) => a.text.localeCompare(b.text)));
  };

  const onSortDescending = () => {
    setNames([...names].sort((a, b) => b.text.localeCompare(a.text)));
  };

  // 삭제 취소
  const onUndoDelete = () => {
    if (deletedItem) {
      setNames(names.concat(deletedItem));
      setDeletedItem(null);
    } else {
      alert('복원할 항목이 없습니다.');
    }
  };

  // 렌더링할 리스트 항목
  const namesList = names.map((name) => (
    <li
      key={name.id}
      onClick={() => onShowId(name.id)} // ID 표시
      onDrag={() => onRemove(name.id)} // 삭제
      onContextMenu={(e) => {
        e.preventDefault();
        onEdit(name.id); // 수정
      }}
    >
      {name.text}
    </li>
  ));

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새 항목 입력"
      />
      <button onClick={onAdd}>추가</button>
      <button onClick={onSortAscending}>오름차순 정렬</button>
      <button onClick={onSortDescending}>내림차순 정렬</button>
      <button onClick={onUndoDelete}>삭제 복원</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default IterationSample;
