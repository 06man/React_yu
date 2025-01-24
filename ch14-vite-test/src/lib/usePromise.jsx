import { useState, useEffect } from 'react';

// usePromise 함수, 1번째 파라미터, 콜백함수, 2번째, 의존성 배열 요소
export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    // 생명주기, 마운트(화면에 최초를 그릴 경우, )
    // useEffect 이용해서, 함수를 한번 호출 하니?, 여러번 호출?
    // [] : 한번만 호출, [변수]: 변수 업데이트시 마다 계속 호출. 
    useEffect(() => {
        // 비동기 함수로 진행. 
        // 함수 정의 
        const process = async () => {
            // 데이터 받기 시작해서, 로딩 중. 표기. 
            setLoading(true);
            try {
                // 비동기 통신, 콜백함수 내부 axios 도구 사용. 
                const resolved = await promiseCreator();
                // 현재 상태에 업데이트, 뉴스 기사들을 받아옴. 
                setResolved(resolved);
            } catch (e) {
                setError(e);
            }
            // 데이터 받기 완료. 
            setLoading(false);
        };

        // 함수 사용. 
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    // 함수의 결과, 데이터의 로딩 상태, 받은 데이터들, 에러 상태. 
    return [loading, resolved, error];
}