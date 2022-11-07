import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author : "소다",
//     content : "일기 1",
//     emotion : 1,
//     created_date : new Date().getTime(),
//   },
//   {
//     id:2,
//     author : "쿵이",
//     content : "일기 2",
//     emotion : 5,
//     created_date : new Date().getTime(),
//   },
//   {
//     id:3,
//     author : "두부",
//     content : "일기 3",
//     emotion : 4,
//     created_date : new Date().getTime(),
//   }
// ]

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      emotion,
      content,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content:newContent } : it)
    );
  };

  return(
  <div className='App'>
    <DiaryEditor onCreate={onCreate}/>
    <DiaryList onEdit={onEdit} onRemove={onRemove} diarylist={data} />
  </div>
  );
}

export default App;
