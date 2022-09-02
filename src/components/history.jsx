import { useEffect, useState } from 'react'
import axios from 'axios'

function History() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [age, setAge] = useState();

    // https://data.gov.tw/dataset/6012 API 資料來源
    // 關於網站文章計算點擊次數
    // https://social.msdn.microsoft.com/Forums/zh-TW/1eaaa67d-1fb4-45d7-8c57-53de9eeb0f2e/35531259452291420309353363163921934389131998137325352062868735?forum=236
    // 總之，要看需求顆粒度，一般還是得透過後端，不然或許可以嘗試透過 GA 的 Unique Pageviews 實作看看
    // 關於 google Unique Pageviews 追蹤的依據 https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
    // 這篇感覺可以參考一下 https://www.kevinleary.net/unique-pageviews-google-analytics-4/
    // GA 可參考 https://stackoverflow.com/questions/64437248/in-react-use-google-analytics-to-track-top-users-by-their-pageviews
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`
            );
            setData(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);

      const selectChange = (e) => {
        const selectedId = e.target.value
        
        const young = data.filter((s) => { return s.hitRate === 0 })
        const adult = data.filter((s) => { return s.hitRate <= 10 })
        const old = data.filter((s) => { return s.hitRate >= 10 })

        if (selectedId === "5~11") setAge(young)
        if (selectedId === "11~18") setAge(adult)
        if (selectedId === "18以上") setAge(old)
      }

    return (
        <div>
            <div className="grid grid-cols-2 m-10">
                <h2 className='text-2xl'>歷史圖案</h2>
                <div className="grid grid-cols-2">
                    <select value={age?.id} onChange={(e) => {selectChange(e)}}>
                        <option>適合年齡</option>
                        <option>5~11</option>
                        <option>11~18</option>
                        <option>18以上</option>
                    </select>
                    <select>
                        <option>網站類型</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Hamster</option>
                        <option>Parrot</option>
                        <option>Spider</option>
                        <option>Goldfish</option>
                    </select>
                </div>
            </div>
            <div className="text-center">
                {loading && <div>loading....</div>}
            </div>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div className="grid grid-cols-4 gap-4 m-10 pt-10">
            {age ? (
                age.map(({ id, title }) => (
                    <div className="w-72 h-64 border-2 rounded-xl p-4" key={id}>
                        <div className=''></div>
                        <h3 className='text-lg border-b-2 pb-4'>{title}</h3>
                        <p className='pt-4 text-base'>1. 說明1</p>
                        <p className='pt-4 text-base'>2. 說明2</p>
                        <p className='pt-4 text-base'>3. 說明3</p>
                    </div>
                ))
            ) : (
                data.map(({ id, title }) => (
                    <div className="w-72 h-64 border-2 rounded-xl p-4" key={id}>
                        <div className=''></div>
                        <h3 className='text-lg border-b-2 pb-4'>{title}</h3>
                        <p className='pt-4 text-base'>1. 說明1</p>
                        <p className='pt-4 text-base'>2. 說明2</p>
                        <p className='pt-4 text-base'>3. 說明3</p>
                    </div>
                ))
            )}
            </div>
        </div>
    )
}

export default History;
