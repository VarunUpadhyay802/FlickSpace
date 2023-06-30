import { useEffect } from 'react';
import { fetchDataFromApi } from "./utils/api";
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice"
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    try {
      fetchDataFromApi("/movie/popular").then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='app'>
      {url?.total_pages}
    </div>
  )
}

export default App
