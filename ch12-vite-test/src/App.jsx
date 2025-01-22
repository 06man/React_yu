import { useRef, useCallback, useState } from 'react';
import './App.css'
import { produce } from 'immer';


const App = () => {
  const nextId = useRef(1); // 다음 ID를 저장하는 Ref
  const [form, setForm] = useState({ name: '', username: '' }); 
  // 입력 폼 상태
  const [data, setData] = useState({
    array: [], // 항목 배열
    uselessValue: null, // 필요 없는 값
  });
  // 기존.
  // // 교체 전
  // // 입력값 변경을 처리하는 함수
  // // const onChange = useCallback(
  // //   (e) => {
  // //     const { name, value } = e.target;
  // //     setForm(
  // //       produce(form,(draft) => {
  // //         draft[name] = value;
  // //       })
  // //     );
  // //   },
  // //   [form]
  // // );
  // // immer 교체
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
	//확인1
      produce((draft) => {
        draft[name] = value;
      })
	  //확인1
    );
  }, []);

  // // 폼 제출을 처리하는 함수
  // const onSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault(); // 새로고침 방지
  //     const info = {
  //       id: nextId.current, // 고유 ID
  //       name: form.name,
  //       username: form.username,
  //     };

  //     // 배열에 새 항목 추가
  //     // setData(
  //     //   produce(data,(draft) => {
  //     //     draft.array.push(info);
  //     //   })
  //     // );
  //     // immer 교체
  //     setData(
  //       //확인2
  //           produce((draft) => {
  //             draft.array.push(info);
  //           }));



  // //     // 폼 초기화
  // //     setForm({ name: '', username: '' });
  // //     nextId.current += 1; // ID 증가
  // //   },
  // //   [data, form.name, form.username]
  // // );

  //       // form 초기화 immer 교체.
  //       setForm({ name: '', username: '' });
  //       nextId.current += 1; // ID 증가
  //     },
  //     [form.name, form.username]
  //   );

  // // 항목 삭제를 처리하는 함수
  // // const onRemove = useCallback(
  // //   (id) => {
  // //     setData(
  // //       produce(data,(draft) => {
  // //         const index = draft.array.findIndex((info) => info.id === id);
  // //         if (index !== -1) {
  // //           draft.array.splice(index, 1); // 해당 항목 삭제
  // //         }
  // //       })
  // //     );
  // //   },
  // //   [data]
  // // );
  // // 항목을 삭제하는 함수 immer 교체.
  const onRemove = useCallback((id) => {
    setData(
	//확인3
      produce((draft) => {
        const index = draft.array.findIndex((info) => info.id === id);
        if (index !== -1) {
          draft.array.splice(index, 1); // 해당 항목 삭제
        }
      })
	  //확인3
    );
  }, []);

  const onClear = useCallback(() => {
    setData(
      produce((draft) => {
        draft.array = [];
      })
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
  
      if (!form.name.trim() || !form.username.trim()) {
        alert('이름과 아이디를 모두 입력하세요.');
        return;
      }
  
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
        checked: false,
      };
  
      const isDuplicate = data.array.some((item) => item.username === info.username);
      if (isDuplicate) {
        alert('이미 존재하는 아이디입니다.');
        return;
      }
  
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
  
      setForm({ name: '', username: '' });
      nextId.current += 1;
    },
    [form.name, form.username, data.array]
  );
  
  const onToggle = useCallback((id) => {
    setData(
      produce((draft) => {
        const item = draft.array.find((info) => info.id === id);
        if (item) {
          item.checked = !item.checked;
        }
      })
    );
  }, []);
  


  return (
    <div>
        <h1 className='react'>불변성 유지하기</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
          onToggle={onToggle}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
          onToggle={onToggle}
        />
        <button type="submit">등록</button>
        <button
        type="button"
        onClick={onClear}
        style={{ marginLeft: '10px' }}
      >
        모두 삭제
      </button>
      </form>
      <div>
      <ul>
  {data.array.map((info) => (
    <li
      key={info.id}
      style={{
        textDecoration: info.checked ? 'line-through' : 'none',
      }}
    >
            {info.username} ({info.name})
      <button
        onClick={() => onToggle(info.id)}
        style={{ marginLeft: '10px'}}
        >완료/미완료</button>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onDoubleClick
          onRemove(info.id);
        }}
        style={{ marginLeft: '5px' }}
      >
        삭제
      </button>
    </li>
  ))}
</ul>


      </div>
    </div>
  );
};

export default App;