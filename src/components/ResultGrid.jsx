import { useEffect } from 'react'
import { fetchPhoto, fetchVideo } from '../api/mediaapi'
import { setloading, setError, setResults } from '../redux/features/SearchSlice'

import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activetab, result, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if (!query) return

        const getData = async () => {
            try {
                dispatch(setloading())
                let data = []
                if (activetab === 'photos') {
                    let res = await fetchPhoto(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        title: item.alt_description,
                        type: 'photo',
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }))
                }

                if (activetab === 'videos') {
                    let res = await fetchVideo(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        title: item.user.name || 'video',
                        type: 'video',
                        thumbnail: item.image,
                        src: item.video_files?.[0]?.link
                    }))
                }

                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activetab, dispatch])

    // Error UI
    if (error) {
        return (
            <div className="flex justify-center items-center h-40">
                <h1 className="text-red-500 text-lg font-semibold">
                    Something went wrong 😢
                </h1>
            </div>
        )
    }

    // Loading UI
    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <h1 className="text-gray-600 text-lg animate-pulse">
                    Loading...
                </h1>
            </div>
        )
    }

    return (
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-2">

            {/* Responsive Grid */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                gap-4 sm:gap-5 lg:gap-6
            ">
                {result.map((item) => (
                    <ResultCard key={item.id} item={item} />
                ))}
            </div>

        </div>
    )
}

export default ResultGrid