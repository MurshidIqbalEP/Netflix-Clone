import React,{useState,useEffect} from 'react'
import { UserAuth } from '../Context/AuthContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { db } from '../firebase';
import { updateDoc,doc,onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
export default function SavedShow() {
   
    const {user} = UserAuth()
    const [movies,setMovies] = useState([])

    useEffect(() => {
      const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.data();
          setMovies(userData.savedShows || []); // Ensure movies is an array
        } else {
          setMovies([]);
        }
      });
  
      return () => unsubscribe();
    }, [user?.email]);

    const sliderLeft =()=>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft-500;
    
      }
    
      const sliderRight =()=>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft+500;
    
      }
   
      const movieRef = doc(db,'users', `${user?.email}`)
      const deleteShow = async (id) =>{
        try {
          const result = movies.filter((item) => item.id !== id)
          await updateDoc(movieRef,{
            savedShows : result
          })
        } catch (error) {
          console.log(error.message);
        }
      }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={sliderLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40}/>
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"> 
          {movies.map((item, id) => (
            <div
            key={id}
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
          >
            <img
            className=" w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${item?.Img}`}
              alt={item.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
               <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center" >{item.title}</p>
               <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
               </div>
          </div>
          ))}
        </div>
        <MdChevronRight onClick={sliderRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
      </div>
      
    </>
  )
}
